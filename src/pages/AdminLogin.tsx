
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle admin login logic here
    console.log('Admin login attempt:', formData);
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
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    id="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter admin username"
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
                className="w-full bg-red-600 hover:bg-red-700 text-white py-2 sm:py-3 text-sm sm:text-base font-medium"
              >
                Access Admin Panel
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
