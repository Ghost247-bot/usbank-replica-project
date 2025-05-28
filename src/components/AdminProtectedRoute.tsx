
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

const AdminProtectedRoute = ({ children }: AdminProtectedRouteProps) => {
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        console.log('No user found, redirecting to admin login');
        navigate('/admin-login');
        return;
      }

      try {
        console.log('Checking admin status for user:', user.id);
        
        const { data: userRoles, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .eq('role', 'admin');

        if (error) {
          console.error('Error checking admin status:', error);
          navigate('/admin-login');
          return;
        }

        const hasAdminRole = userRoles && userRoles.length > 0;
        console.log('User has admin role:', hasAdminRole);
        
        setIsAdmin(hasAdminRole);
        
        if (!hasAdminRole) {
          console.log('User is not admin, redirecting to admin login');
          navigate('/admin-login');
        }
      } catch (error) {
        console.error('Error in admin check:', error);
        navigate('/admin-login');
      } finally {
        setLoading(false);
      }
    };

    if (!authLoading) {
      checkAdminStatus();
    }
  }, [user, authLoading, navigate]);

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null; // Will redirect in useEffect
  }

  return <>{children}</>;
};

export default AdminProtectedRoute;
