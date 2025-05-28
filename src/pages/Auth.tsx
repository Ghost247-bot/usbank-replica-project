
import React, { useState } from 'react';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import AuthPageLayout from '@/components/auth/AuthPageLayout';
import MultiStepAuthForm from '@/components/auth/MultiStepAuthForm';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { user } = useAuthRedirect();

  // Don't render the form if user is already authenticated (prevents flash)
  if (user) {
    return null;
  }

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <AuthPageLayout>
      <MultiStepAuthForm 
        isSignUp={isSignUp} 
        onToggleMode={handleToggleMode} 
      />
    </AuthPageLayout>
  );
};

export default Auth;
