
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, User, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdminFunctions } from '@/hooks/useAdminFunctions';
import { supabase } from '@/integrations/supabase/client';

const AdminSetup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [adminExists, setAdminExists] = useState(false);
  const [checking, setChecking] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { createAdminUser, loading } = useAdminFunctions();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminExists = async () => {
      try {
        console.log('Checking if admin user exists...');
        const { data, error } = await supabase
          .from('user_roles')
          .select('id')
          .eq('role', 'admin')
          .limit(1);

        if (error) {
          console.error('Error checking admin existence:', error);
          return;
        }

        setAdminExists(data && data.length > 0);
        console.log('Admin exists:', data && data.length > 0);
      } catch (error) {
        console.error('Error checking admin:', error);
      } finally {
        setChecking(false);
      }
    };

    checkAdminExists();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await createAdminUser(formData.email, formData.password);
    
    if (result.success) {
      setAdminExists(true);
      // Clear form
      setFormData({ email: '', password: '' });
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${adminExists ? 'bg-green-100' : 'bg-red-100'}`}>
                  {adminExists ? (
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  ) : (
                    <Shield className="h-8 w-8 text-red-600" />
                  )}
                </div>
              </div>
              <CardTitle className="text-2xl sm:text-3xl font-bold">
                {adminExists ? 'Admin Account Ready' : 'Admin Setup Required'}
              </CardTitle>
              <CardDescription>
                {adminExists 
                  ? 'An admin account has been configured. You can now access the admin panel.'
                  : 'Create the first admin account to access administrative features.'
                }
              </CardDescription>
            </CardHeader>

            <CardContent>
              {adminExists ? (
                <div className="space-y-4">
                  <div className="text-center text-green-600 mb-4">
                    <CheckCircle className="h-12 w-12 mx-auto mb-2" />
                    <p className="font-medium">Admin account is configured</p>
                  </div>
                  
                  <Button 
                    onClick={() => navigate('/admin-login')}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    Go to Admin Login
                  </Button>
                  
                  <div className="text-center">
                    <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
                      Return to Home
                    </Link>
                  </div>
                </div>
              ) : (
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
                        minLength={6}
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
                    {loading ? 'Creating Admin...' : 'Create Admin Account'}
                  </Button>

                  <div className="text-center">
                    <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
                      Return to Home
                    </Link>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminSetup;
