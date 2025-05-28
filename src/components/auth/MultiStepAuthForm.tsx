
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import ContactInfoForm from '@/components/forms/ContactInfoForm';
import PasswordForm from '@/components/forms/PasswordForm';
import PersonalInfoForm from '@/components/forms/PersonalInfoForm';
import AddressInfoForm from '@/components/forms/AddressInfoForm';
import SecurityInfoForm from '@/components/forms/SecurityInfoForm';

interface AuthFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  ssnIban: string;
  securityQuestion1: string;
  securityAnswer1: string;
  securityQuestion2: string;
  securityAnswer2: string;
  pin: string;
}

interface MultiStepAuthFormProps {
  isSignUp: boolean;
  onToggleMode: () => void;
}

const MultiStepAuthForm: React.FC<MultiStepAuthFormProps> = ({ isSignUp, onToggleMode }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    ssnIban: '',
    securityQuestion1: '',
    securityAnswer1: '',
    securityQuestion2: '',
    securityAnswer2: '',
    pin: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const securityQuestions = [
    "What was the name of your first pet?",
    "What is your mother's maiden name?",
    "What was the name of your first school?",
    "What is your favorite book?",
    "What city were you born in?",
    "What was your first car?",
    "What is your favorite food?",
    "What was your childhood nickname?"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
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

  return (
    <Card className="w-full max-w-2xl">
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
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <>
              <PersonalInfoForm 
                formData={formData} 
                setFormData={setFormData} 
              />
              
              <ContactInfoForm 
                formData={formData} 
                setFormData={setFormData} 
              />

              <AddressInfoForm 
                formData={formData} 
                setFormData={setFormData} 
              />

              <SecurityInfoForm 
                formData={formData} 
                setFormData={setFormData} 
                securityQuestions={securityQuestions} 
              />
            </>
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
        
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onToggleMode}
            className="text-blue-600 hover:text-blue-500 text-sm"
          >
            {isSignUp 
              ? 'Already have an account? Sign in' 
              : "Don't have an account? Sign up"
            }
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiStepAuthForm;
