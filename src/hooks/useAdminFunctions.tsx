
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { adminOperation } from '@/integrations/supabase/admin';
import { useToast } from '@/hooks/use-toast';
import { logger } from '@/lib/logger';

export const useAdminFunctions = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const createAdminUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      logger.debug('Creating admin user:', email);

      // First, sign up the user
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: 'Admin',
            last_name: 'User',
          },
        },
      });

      if (signUpError) {
        logger.error('Error signing up admin:', signUpError.message);
        throw signUpError;
      }

      if (!signUpData.user) {
        throw new Error('Failed to create user');
      }

      logger.debug('User created, now assigning admin role:', signUpData.user.id);

      // Wait a moment for the trigger to complete
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Now assign admin role
      const { error: roleError } = await supabase
        .from('user_roles')
        .insert({
          user_id: signUpData.user.id,
          role: 'admin'
        });

      if (roleError) {
        logger.error('Error assigning admin role:', roleError.message);
        throw roleError;
      }

      toast({
        title: 'Success',
        description: 'Admin user created successfully',
      });

      return { success: true };
    } catch (error: any) {
      logger.error('Error creating admin user:', error.message);
      toast({
        title: 'Error',
        description: error.message || 'Failed to create admin user',
        variant: 'destructive',
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const updateUserDetails = async (userId: string, updates: any) => {
    setLoading(true);
    try {
      logger.debug('Updating user details:', userId, updates);

      const { error } = await adminOperation(
        async (client) => client.from('profiles').update(updates).eq('id', userId)
      );

      if (error) {
        logger.error('Error updating user:', error.message);
        throw error;
      }

      toast({
        title: 'Success',
        description: 'User details updated successfully',
      });

      return { success: true };
    } catch (error: any) {
      logger.error('Error updating user details:', error.message);
      toast({
        title: 'Error',
        description: error.message || 'Failed to update user details',
        variant: 'destructive',
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (userId: string) => {
    setLoading(true);
    try {
      logger.debug('Deleting user:', userId);

      // Delete user profile first
      const { error: profileError } = await adminOperation(
        async (client) => client.from('profiles').delete().eq('id', userId)
      );

      if (profileError) {
        logger.error('Error deleting user profile:', profileError.message);
        throw profileError;
      }

      // Delete user role
      const { error: roleError } = await adminOperation(
        async (client) => client.from('user_roles').delete().eq('user_id', userId)
      );

      if (roleError) {
        logger.error('Error deleting user role:', roleError.message);
        throw roleError;
      }

      // Delete user from auth (this requires admin client)
      const { error: authError } = await adminOperation(
        async (client) => client.auth.admin.deleteUser(userId)
      );

      if (authError) {
        logger.error('Error deleting user from auth:', authError.message);
        throw authError;
      }

      toast({
        title: 'Success',
        description: 'User deleted successfully',
      });

      return { success: true };
    } catch (error: any) {
      logger.error('Error deleting user:', error.message);
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete user',
        variant: 'destructive',
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const freezeUser = async (userId: string, freeze: boolean, reason: string = '') => {
    setLoading(true);
    try {
      logger.debug('Freezing/unfreezing user:', userId, freeze);

      const { error } = await adminOperation(
        async (client) => client
          .from('user_status')
          .upsert({
            user_id: userId,
            is_frozen: freeze,
            freeze_reason: freeze ? reason : null,
            updated_at: new Date().toISOString()
          })
      );

      if (error) {
        logger.error('Error updating user freeze status:', error.message);
        throw error;
      }

      toast({
        title: 'Success',
        description: freeze ? 'User frozen successfully' : 'User unfrozen successfully',
      });

      return { success: true };
    } catch (error: any) {
      logger.error('Error updating user freeze status:', error.message);
      toast({
        title: 'Error',
        description: error.message || 'Failed to update user status',
        variant: 'destructive',
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return {
    createAdminUser,
    updateUserDetails,
    deleteUser,
    freezeUser,
    loading,
  };
};
