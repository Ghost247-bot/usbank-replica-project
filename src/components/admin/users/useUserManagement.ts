
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
      console.log('Fetching users from profiles and user_roles...');
      
      // Get all user IDs from user_roles table first (this contains all users)
      const { data: userRoles, error: userRolesError } = await supabase
        .from('user_roles')
        .select('user_id')
        .order('created_at', { ascending: false });

      if (userRolesError) {
        console.error('Error fetching user roles:', userRolesError);
        throw userRolesError;
      }

      console.log('Found user roles:', userRoles?.length);

      if (!userRoles || userRoles.length === 0) {
        console.log('No users found in user_roles table');
        setUsers([]);
        return;
      }

      // Get profiles for these users
      const userIds = userRoles.map(role => role.user_id);
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
        .in('id', userIds);

      if (profilesError) {
        console.error('Error fetching profiles:', profilesError);
        throw profilesError;
      }

      console.log('Fetched profiles:', profiles?.length);

      // Create user objects with available data
      const combinedUsers = userIds.map(userId => {
        const profile = profiles?.find(p => p.id === userId);
        return {
          id: userId,
          email: `user-${userId.slice(0, 8)}@moonstone.bank`, // Placeholder email since we can't access auth data
          first_name: profile?.first_name || 'Unknown',
          last_name: profile?.last_name || 'User',
          is_frozen: profile?.user_status?.is_frozen || false,
          freeze_reason: profile?.user_status?.freeze_reason || undefined,
          created_at: profile?.created_at || new Date().toISOString(),
          email_confirmed_at: undefined,
          last_sign_in_at: undefined
        };
      });

      console.log('Combined users data:', combinedUsers.length, 'users');
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
