
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { User } from './types';
import { logger } from '@/lib/logger';

export const useUserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

    const fetchUsers = async () => {
      try {
        setLoading(true);
        logger.debug('Fetching users from profiles, user_roles, and user_status...');
        
        // Fetch profiles
        const { data: profiles, error: profilesError } = await supabase
          .from('profiles')
          .select(`
            id,
            user_id,
            first_name,
            last_name,
            email,
            phone,
            account_status,
            kyc_status,
            risk_level,
            last_login,
            created_at,
            updated_at
          `)
          .order('created_at', { ascending: false });

        if (profilesError) {
          logger.error('Error fetching profiles:', profilesError.message);
          
          // Fallback to user_roles table if profiles doesn't exist
          try {
            const { data: userRoles, error: userRolesError } = await supabase
              .from('user_roles')
              .select('user_id, role, created_at')
              .order('created_at', { ascending: false });

            if (userRolesError) {
              logger.error('Error fetching user roles:', userRolesError.message);
              throw userRolesError;
            }

            logger.debug('Found user roles:', userRoles?.length);

            const fallbackUsers = userRoles?.map(role => ({
              id: role.user_id,
              user_id: role.user_id,
              email: `user-${role.user_id.slice(0, 8)}@moonstone.bank`,
              first_name: 'Unknown',
              last_name: 'User',
              phone: undefined,
              account_status: 'active',
              kyc_status: 'pending',
              risk_level: 'low',
              last_login: undefined,
              created_at: (role.created_at || new Date()).toISOString(),
              updated_at: (role.created_at || new Date()).toISOString(),
              role: role.role,
              is_frozen: false,
              freeze_reason: undefined,
              user_status: { is_frozen: false }
            })) || [];

            setUsers(fallbackUsers);
            return;
          } catch (fallbackError) {
            logger.error('Fallback query failed:', fallbackError);
            setUsers([]);
            return;
          }
        }

        logger.debug('Fetched profiles:', profiles?.length);

        // Fetch roles and status
        const [
          { data: roles, error: rolesError },
          { data: status, error: statusError }
        ] = await Promise.all([
          supabase.from('user_roles').select('user_id, role'),
          supabase.from('user_status').select('user_id, is_frozen, freeze_reason')
        ]);

        if (rolesError) logger.warn('Error fetching roles:', rolesError.message);
        if (statusError) logger.warn('Error fetching status:', statusError.message);

        // Transform profiles to user format and merge roles/status
        const transformedUsers = profiles?.map(profile => {
          const userRole = roles?.find(r => r.user_id === profile.user_id)?.role;
          const userSt = status?.find(s => s.user_id === profile.user_id);
          
          return {
            id: profile.user_id,
            user_id: profile.user_id,
            email: profile.email,
            first_name: profile.first_name,
            last_name: profile.last_name,
            phone: profile.phone,
            account_status: profile.account_status,
            kyc_status: profile.kyc_status,
            risk_level: profile.risk_level,
            last_login: profile.last_login,
            created_at: (profile.created_at || new Date()).toISOString(),
            updated_at: profile.updated_at,
            role: userRole || 'user',
            is_frozen: userSt?.is_frozen || profile.account_status === 'suspended',
            freeze_reason: userSt?.freeze_reason || (profile.account_status === 'suspended' ? 'Account suspended' : undefined),
            user_status: {
              is_frozen: userSt?.is_frozen || profile.account_status === 'suspended',
              freeze_reason: userSt?.freeze_reason || (profile.account_status === 'suspended' ? 'Account suspended' : undefined)
            }
          };
        }) || [];

        logger.debug('Transformed users data with roles and status:', transformedUsers.length, 'users');
        setUsers(transformedUsers);
      } catch (error: any) {

      logger.error('Error fetching users:', error.message || error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users: " + (error.message || 'Unknown error'),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFreezeUser = async (userId: string, freeze: boolean, freezeReason: string) => {
    try {
      setLoading(true);
      logger.debug(`${freeze ? 'Freezing' : 'Unfreezing'} user:`, userId);
      
      const { error } = await supabase.rpc('toggle_user_freeze', {
        target_user_id: userId,
        freeze_status: freeze,
        reason: freeze ? freezeReason : null
      });

      if (error) {
        logger.error('Error toggling user freeze:', error);
        throw error;
      }

      toast({
        title: "Success",
        description: `User ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });

      fetchUsers();
      return true;
    } catch (error: any) {
      logger.error('Error in handleFreezeUser:', error.message || error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || 'Unknown error occurred',
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
