
import React from 'react';
import PersonalInfoForm from '@/components/forms/PersonalInfoForm';
import ContactInfoForm from '@/components/forms/ContactInfoForm';
import AddressInfoForm from '@/components/forms/AddressInfoForm';
import SecurityInfoForm from '@/components/forms/SecurityInfoForm';
import { AuthFormData } from '@/hooks/useAuthForm';

interface SignUpFormsProps {
  formData: AuthFormData;
  setFormData: (data: AuthFormData) => void;
  securityQuestions: string[];
}

const SignUpForms: React.FC<SignUpFormsProps> = ({ formData, setFormData, securityQuestions }) => {
  return (
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
  );
};

export default SignUpForms;
