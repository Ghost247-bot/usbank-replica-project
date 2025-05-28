
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useAdminFunctions = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const createAdminUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log('Creating admin user:', email);

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
        console.error('Error signing up admin:', signUpError);
        throw signUpError;
      }

      if (!signUpData.user) {
        throw new Error('Failed to create user');
      }

      console.log('User created, now assigning admin role:', signUpData.user.id);

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
        console.error('Error assigning admin role:', roleError);
        throw roleError;
      }

      toast({
        title: "Admin User Created",
        description: `Admin user ${email} has been created successfully.`,
      });

      return { success: true, user: signUpData.user };
    } catch (error: any) {
      console.error('Error creating admin user:', error);
      toast({
        variant: "destructive",
        title: "Failed to Create Admin",
        description: error.message || "An unexpected error occurred",
      });
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const getUserRoles = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching user roles:', error);
      return [];
    }
  };

  const isUserAdmin = async (userId: string) => {
    const roles = await getUserRoles(userId);
    return roles.some(role => role.role === 'admin');
  };

  return {
    createAdminUser,
    getUserRoles,
    isUserAdmin,
    loading
  };
};
