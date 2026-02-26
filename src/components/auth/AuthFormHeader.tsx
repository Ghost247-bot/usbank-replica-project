
import React from 'react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface AuthFormHeaderProps {
  isSignUp: boolean;
}

const AuthFormHeader: React.FC<AuthFormHeaderProps> = ({ isSignUp }) => {
  return (
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold text-blue-900">
        {isSignUp ? 'Create Account' : 'Sign In'}
      </CardTitle>
      <CardDescription>
        {isSignUp 
          ? 'Join Moonstone Bank today' 
          : 'Welcome back to Moonstone Bank'
        }
      </CardDescription>
    </CardHeader>
  );
};

export default AuthFormHeader;
