
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import AuthPageLayout from '@/components/auth/AuthPageLayout';
import MultiStepAuthForm from '@/components/auth/MultiStepAuthForm';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/user-dashboard');
    }
  }, [user, navigate]);

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
