
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { AuthFormData } from '@/hooks/useAuthForm';

export const useAuthSubmit = () => {
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent, formData: AuthFormData, isSignUp: boolean) => {
    e.preventDefault();
    setLoading(true);

    try {
      let result;
      if (isSignUp) {
        const userData = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          date_of_birth: formData.dateOfBirth,
          phone: formData.phone,
          address: JSON.stringify(formData.address),
          ssn_iban: formData.ssnIban,
          security_question_1: formData.securityQuestion1,
          security_answer_1: formData.securityAnswer1,
          security_question_2: formData.securityQuestion2,
          security_answer_2: formData.securityAnswer2,
          pin: formData.pin
        };
        
        result = await signUp(formData.email, formData.password, formData.firstName, formData.lastName, userData);
      } else {
        result = await signIn(formData.email, formData.password);
      }

      if (result.error) {
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: result.error.message,
        });
      } else {
        toast({
          title: isSignUp ? "Account Created" : "Welcome Back",
          description: isSignUp ? "Please check your email to verify your account." : "You have successfully signed in.",
        });
        if (!isSignUp) {
          navigate('/user-dashboard');
        }
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
};
