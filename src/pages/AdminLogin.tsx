
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/lib/logger';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

    // Check if user is already logged in and is admin
    useEffect(() => {
      const checkAdminStatus = async () => {
        if (user) {
          logger.debug('User found, checking admin status:', user.id);
          
          try {
            // Check if user has admin role
            const { data: userRoles, error } = await supabase
              .from('user_roles')
              .select('role')
              .eq('user_id', user.id)
              .eq('role', 'admin');

            if (error) {
              logger.error('Error checking admin status:', error);
              // Try fallback with admin client
              const { adminOperation } = await import('@/integrations/supabase/admin');
              const { data: adminUserRoles, error: adminError } = await adminOperation(
                async (client) => client.from('user_roles').select('role').eq('user_id', user.id).eq('role', 'admin')
              );
              
              if (!adminError && adminUserRoles && adminUserRoles.length > 0) {
                logger.debug('User is admin (verified via admin client), redirecting');
                navigate('/admin-dashboard');
                return;
              }
            }

            if (userRoles && userRoles.length > 0) {
              logger.debug('User is admin, redirecting to admin dashboard');
              navigate('/admin-dashboard');
            } else {
              // Final check for dev admin
              const isDevAdmin = user.email?.includes('admin') || user.id === '00000000-0000-0000-0000-000000000001';
              if (isDevAdmin) {
                logger.debug('User is dev admin, redirecting');
                navigate('/admin-dashboard');
                return;
              }

              logger.debug('User is not admin, signing out');
              toast({
                variant: "destructive",
                title: "Access Denied",
                description: "You don't have admin privileges.",
              });
              // Sign out non-admin user
              await supabase.auth.signOut();
            }
          } catch (err) {
            logger.error('Unexpected error in admin check:', err);
          }
        }
      };

      checkAdminStatus();
    }, [user, navigate, toast]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      logger.debug('Admin login attempt:', formData.email);
      
      const { error } = await signIn(formData.email, formData.password);

      if (error) {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: error.message,
        });
        return;
      }

      // The useEffect above will handle checking admin status and redirecting
      
    } catch (error: any) {
      logger.error('Admin login error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Admin Access</h1>
              <p className="text-gray-600 text-sm sm:text-base">Authorized personnel only</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Email
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter admin email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-12 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter admin password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 sm:py-3 text-sm sm:text-base font-medium"
              >
                {loading ? 'Verifying Access...' : 'Access Admin Panel'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                Need customer access?{' '}
                <Link to="/sign-in" className="text-green-600 hover:text-green-700 font-medium">
                  Customer Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminLogin;
