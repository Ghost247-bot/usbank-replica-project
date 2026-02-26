
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import PersonalInfoForm from '@/components/forms/PersonalInfoForm';
import ContactInfoForm from '@/components/forms/ContactInfoForm';
import AddressInfoForm from '@/components/forms/AddressInfoForm';
import SecurityInfoForm from '@/components/forms/SecurityInfoForm';
import PasswordForm from '@/components/forms/PasswordForm';

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
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
    pin: '',
    agreeToTerms: false
  });

  const { signUp } = useAuth();
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
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Passwords do not match",
      });
      return;
    }

    if (formData.pin.length !== 4 || !/^\d{4}$/.test(formData.pin)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "PIN must be 4 digits",
      });
      return;
    }

    try {
      const userData = {
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

      const result = await signUp(formData.email, formData.password, formData.firstName, formData.lastName, userData);
      
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error creating account",
          description: result.error.message,
        });
      } else {
        toast({
          title: "Account created successfully!",
          description: "Please check your email to verify your account.",
        });
        navigate('/auth');
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "An unexpected error occurred",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
              <p className="text-gray-600 text-sm sm:text-base">Join Moonstone Banking & Trust</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <PersonalInfoForm formData={formData} setFormData={setFormData} />
              <ContactInfoForm formData={formData} setFormData={setFormData} />
              <AddressInfoForm formData={formData} setFormData={setFormData} />
              <SecurityInfoForm 
                formData={formData} 
                setFormData={setFormData} 
                securityQuestions={securityQuestions} 
              />
              <PasswordForm 
                formData={formData} 
                setFormData={setFormData}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                showConfirmPassword={showConfirmPassword}
                setShowConfirmPassword={setShowConfirmPassword}
              />

              <div className="flex items-start">
                <input
                  id="agreeToTerms"
                  type="checkbox"
                  required
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="/terms-of-service" className="text-green-600 hover:text-green-700 font-medium">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy-policy" className="text-green-600 hover:text-green-700 font-medium">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 text-sm sm:text-base font-medium"
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm sm:text-base">
                Already have an account?{' '}
                <Link to="/sign-in" className="text-green-600 hover:text-green-700 font-medium">
                  Sign In
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

export default CreateAccount;
