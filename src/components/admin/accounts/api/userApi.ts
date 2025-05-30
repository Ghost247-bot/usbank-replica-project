
import { supabase } from '@/integrations/supabase/client';
import { User } from '../../users/types';

export const fetchUsers = async (): Promise<User[]> => {
  console.log('Fetching users for account creation...');
  
  const { data: userRoles, error: userRolesError } = await supabase
    .from('user_roles')
    .select('user_id')
    .order('created_at', { ascending: false });

  if (userRolesError) {
    console.error('Error fetching user roles:', userRolesError);
    throw userRolesError;
  }

  if (!userRoles || userRoles.length === 0) {
    console.log('No users found');
    return [];
  }

  const userIds = userRoles.map(role => role.user_id);
  const { data: profiles, error: profilesError } = await supabase
    .from('profiles')
    .select('id, first_name, last_name, created_at')
    .in('id', userIds);

  if (profilesError) {
    console.error('Error fetching profiles:', profilesError);
    throw profilesError;
  }

  const combinedUsers = userIds.map(userId => {
    const profile = profiles?.find(p => p.id === userId);
    return {
      id: userId,
      email: `user-${userId.slice(0, 8)}@moonstone.bank`,
      first_name: profile?.first_name || 'Unknown',
      last_name: profile?.last_name || 'User',
      is_frozen: false,
      freeze_reason: undefined,
      created_at: profile?.created_at || new Date().toISOString(),
      email_confirmed_at: undefined,
      last_sign_in_at: undefined
    };
  });

  console.log('Fetched users for account creation:', combinedUsers.length);
  return combinedUsers;
};
