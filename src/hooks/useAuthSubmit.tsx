
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { AuthFormData } from '@/hooks/useAuthForm';
import { validateAndSanitize, signInSchema, isValidationError } from '@/lib/validation';
import { sanitizeInput } from '@/lib/validation';
import { rateLimiters, withRateLimit, RateLimitError, formatRetryAfter, getClientRateLimitKey } from '@/lib/rateLimiting';

export const useAuthSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent, formData: AuthFormData, isSignUp: boolean) => {
    e.preventDefault();
    
    // Generate rate limit key based on email for auth
    const rateLimitKey = getClientRateLimitKey('auth', sanitizeInput.email(formData.email));
    
    try {
      let result;
      if (isSignUp) {
        // Validate and sanitize input data
        const signInData = {
          email: sanitizeInput.email(formData.email),
          password: formData.password,
        };

        const validation = validateAndSanitize(signInSchema, signInData);
        
        if (isValidationError(validation)) {
          const errorMessages = Object.values(validation.errors).join(', ');
          toast({
            variant: "destructive",
            title: "Validation Error",
            description: errorMessages,
          });
          return;
        }

        // For signup, we'll add additional validation later
        const userData = {
          first_name: sanitizeInput.text(formData.firstName),
          last_name: sanitizeInput.text(formData.lastName),
          date_of_birth: formData.dateOfBirth,
          phone: sanitizeInput.phone(formData.phone),
          address: JSON.stringify(formData.address),
          ssn_iban: sanitizeInput.database(formData.ssnIban),
          security_question_1: sanitizeInput.text(formData.securityQuestion1),
          security_answer_1: sanitizeInput.text(formData.securityAnswer1),
          security_question_2: sanitizeInput.text(formData.securityQuestion2),
          security_answer_2: sanitizeInput.text(formData.securityAnswer2),
          pin: formData.pin
        };
        
        result = await withRateLimit(
          rateLimiters.auth,
          rateLimitKey,
          async () => await signUp(validation.data.email, formData.password, formData.firstName, formData.lastName, userData),
          {
            onRateLimit: (resetTime) => {
              const retryAfter = formatRetryAfter(Math.ceil((resetTime - Date.now()) / 1000));
              toast({
                variant: "destructive",
                title: "Too Many Attempts",
                description: `Please wait ${retryAfter} before trying again.`,
              });
            }
          }
        );
      } else {
        // Validate and sanitize input data
        const signInData = {
          email: sanitizeInput.email(formData.email),
          password: formData.password,
        };

        const validation = validateAndSanitize(signInSchema, signInData);
        
        if (isValidationError(validation)) {
          const errorMessages = Object.values(validation.errors).join(', ');
          toast({
            variant: "destructive",
            title: "Validation Error",
            description: errorMessages,
          });
          return;
        }
        
        result = await withRateLimit(
          rateLimiters.auth,
          rateLimitKey,
          async () => await signIn(validation.data.email, formData.password),
          {
            onRateLimit: (resetTime) => {
              const retryAfter = formatRetryAfter(Math.ceil((resetTime - Date.now()) / 1000));
              toast({
                variant: "destructive",
                title: "Too Many Attempts",
                description: `Please wait ${retryAfter} before trying again.`,
              });
            }
          }
        );
      }

      if (result.error) {
        // Special handling for rate limit errors
        if (result.error.code === 'RATE_LIMIT_EXCEEDED') {
          toast({
            variant: "destructive",
            title: "Rate Limit Exceeded",
            description: result.error.message,
          });
        } else {
          toast({
            variant: "destructive",
            title: "Authentication Error",
            description: result.error.message,
          });
        }
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
