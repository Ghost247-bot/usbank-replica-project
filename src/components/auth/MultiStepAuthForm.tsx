
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useAuthForm } from '@/hooks/useAuthForm';
import { usePasswordVisibility } from '@/hooks/usePasswordVisibility';
import { useAuthSubmit } from '@/hooks/useAuthSubmit';
import ContactInfoForm from '@/components/forms/ContactInfoForm';
import PasswordForm from '@/components/forms/PasswordForm';
import AuthFormHeader from '@/components/auth/AuthFormHeader';
import AuthToggle from '@/components/auth/AuthToggle';
import SignUpForms from '@/components/auth/SignUpForms';
import { SECURITY_QUESTIONS } from '@/constants/securityQuestions';

interface MultiStepAuthFormProps {
  isSignUp: boolean;
  onToggleMode: () => void;
}

const MultiStepAuthForm: React.FC<MultiStepAuthFormProps> = ({ isSignUp, onToggleMode }) => {
  const { formData, setFormData } = useAuthForm();
  const { showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword } = usePasswordVisibility();
  const { handleSubmit, loading } = useAuthSubmit();

  return (
    <Card className="w-full max-w-2xl">
      <AuthFormHeader isSignUp={isSignUp} />
      <CardContent>
        <form onSubmit={(e) => handleSubmit(e, formData, isSignUp)} className="space-y-6">
          {isSignUp && (
            <SignUpForms 
              formData={formData} 
              setFormData={setFormData} 
              securityQuestions={SECURITY_QUESTIONS}
            />
          )}

          <ContactInfoForm 
            formData={formData} 
            setFormData={setFormData} 
          />

          <PasswordForm 
            formData={formData} 
            setFormData={setFormData} 
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
          />
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Please wait...' : (isSignUp ? 'Create Account' : 'Sign In')}
          </Button>
        </form>
        
        <AuthToggle isSignUp={isSignUp} onToggleMode={onToggleMode} />
      </CardContent>
    </Card>
  );
};

export default MultiStepAuthForm;
