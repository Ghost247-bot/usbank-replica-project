
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { logger } from '@/lib/logger';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    logger.debug('Forgot password request for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                {isSubmitted ? 'Check Your Email' : 'Forgot Password?'}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                {isSubmitted 
                  ? 'We\'ve sent password reset instructions to your email'
                  : 'Enter your email address and we\'ll send you reset instructions'
                }
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 text-sm sm:text-base font-medium"
                >
                  Send Reset Instructions
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <p className="text-green-800 text-sm">
                    If an account with that email exists, you'll receive reset instructions shortly.
                  </p>
                </div>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="w-full"
                >
                  Send Another Email
                </Button>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <Link 
                to="/sign-in" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Sign In
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
