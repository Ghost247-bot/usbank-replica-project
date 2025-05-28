
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from './types';

export const useUserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      console.log('Fetching users from auth and profiles...');
      
      // First, get all profiles with their status
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select(`
          id,
          first_name,
          last_name,
          created_at,
          user_status!left (
            is_frozen,
            freeze_reason
          )
        `)
        .order('created_at', { ascending: false });

      if (profilesError) {
        console.error('Error fetching profiles:', profilesError);
        throw profilesError;
      }

      console.log('Fetched profiles:', profiles);

      // Get auth users using the admin API
      const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();

      if (authError) {
        console.error('Error fetching auth users:', authError);
        // If we can't fetch auth users (possibly due to permissions), 
        // fall back to using profile data only
        const usersFromProfiles = profiles?.map(profile => ({
          id: profile.id,
          email: `user-${profile.id.slice(0, 8)}@example.com`, // Placeholder
          first_name: profile.first_name || 'Unknown',
          last_name: profile.last_name || 'User',
          is_frozen: profile.user_status?.is_frozen || false,
          freeze_reason: profile.user_status?.freeze_reason || undefined,
          created_at: profile.created_at,
          email_confirmed_at: undefined,
          last_sign_in_at: undefined
        })) || [];

        console.log('Using profile-only data:', usersFromProfiles);
        setUsers(usersFromProfiles);
        return;
      }

      // Combine auth users with profile data
      const combinedUsers = authUsers.users.map(authUser => {
        const profile = profiles?.find(p => p.id === authUser.id);
        return {
          id: authUser.id,
          email: authUser.email || 'No email',
          first_name: profile?.first_name || authUser.user_metadata?.first_name || 'Unknown',
          last_name: profile?.last_name || authUser.user_metadata?.last_name || 'User',
          is_frozen: profile?.user_status?.is_frozen || false,
          freeze_reason: profile?.user_status?.freeze_reason || undefined,
          created_at: authUser.created_at,
          email_confirmed_at: authUser.email_confirmed_at,
          last_sign_in_at: authUser.last_sign_in_at
        };
      });

      console.log('Combined users data:', combinedUsers);
      setUsers(combinedUsers);
    } catch (error: any) {
      console.error('Error fetching users:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFreezeUser = async (userId: string, freeze: boolean, freezeReason: string) => {
    try {
      setLoading(true);
      console.log(`${freeze ? 'Freezing' : 'Unfreezing'} user:`, userId);
      
      const { error } = await supabase.rpc('toggle_user_freeze', {
        target_user_id: userId,
        freeze_status: freeze,
        reason: freeze ? freezeReason : null
      });

      if (error) {
        console.error('Error toggling user freeze:', error);
        throw error;
      }

      toast({
        title: "Success",
        description: `User ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });

      fetchUsers();
      return true;
    } catch (error: any) {
      console.error('Error in handleFreezeUser:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    handleFreezeUser,
    fetchUsers
  };
};
