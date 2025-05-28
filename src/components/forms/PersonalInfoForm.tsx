
import React from 'react';
import { User } from 'lucide-react';

interface PersonalInfoFormProps {
  formData: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    ssnIban: string;
  };
  setFormData: (data: any) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center">
        <User className="h-5 w-5 mr-2" />
        Personal Information
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="First name"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            required
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          />
        </div>

        <div>
          <label htmlFor="ssnIban" className="block text-sm font-medium text-gray-700 mb-2">
            SSN/IBAN
          </label>
          <input
            id="ssnIban"
            type="text"
            required
            value={formData.ssnIban}
            onChange={(e) => setFormData({ ...formData, ssnIban: e.target.value })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="SSN or IBAN"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
