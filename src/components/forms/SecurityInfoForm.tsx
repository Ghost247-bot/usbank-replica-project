
import React from 'react';
import { Shield } from 'lucide-react';

interface SecurityInfoFormProps {
  formData: {
    securityQuestion1: string;
    securityAnswer1: string;
    securityQuestion2: string;
    securityAnswer2: string;
    pin: string;
  };
  setFormData: (data: any) => void;
  securityQuestions: string[];
}

const SecurityInfoForm: React.FC<SecurityInfoFormProps> = ({ formData, setFormData, securityQuestions }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center">
        <Shield className="h-5 w-5 mr-2" />
        Security Information
      </h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="securityQuestion1" className="block text-sm font-medium text-gray-700 mb-2">
            Security Question 1
          </label>
          <select
            id="securityQuestion1"
            required
            value={formData.securityQuestion1}
            onChange={(e) => setFormData({ ...formData, securityQuestion1: e.target.value })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          >
            <option value="">Select a security question</option>
            {securityQuestions.map((question, index) => (
              <option key={index} value={question}>{question}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="securityAnswer1" className="block text-sm font-medium text-gray-700 mb-2">
            Answer 1
          </label>
          <input
            id="securityAnswer1"
            type="text"
            required
            value={formData.securityAnswer1}
            onChange={(e) => setFormData({ ...formData, securityAnswer1: e.target.value })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="Your answer"
          />
        </div>

        <div>
          <label htmlFor="securityQuestion2" className="block text-sm font-medium text-gray-700 mb-2">
            Security Question 2
          </label>
          <select
            id="securityQuestion2"
            required
            value={formData.securityQuestion2}
            onChange={(e) => setFormData({ ...formData, securityQuestion2: e.target.value })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          >
            <option value="">Select a different security question</option>
            {securityQuestions.filter(q => q !== formData.securityQuestion1).map((question, index) => (
              <option key={index} value={question}>{question}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="securityAnswer2" className="block text-sm font-medium text-gray-700 mb-2">
            Answer 2
          </label>
          <input
            id="securityAnswer2"
            type="text"
            required
            value={formData.securityAnswer2}
            onChange={(e) => setFormData({ ...formData, securityAnswer2: e.target.value })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="Your answer"
          />
        </div>

        <div>
          <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-2">
            4-Digit PIN
          </label>
          <input
            id="pin"
            type="password"
            required
            value={formData.pin}
            onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="Enter 4-digit PIN"
            maxLength={4}
            pattern="[0-9]{4}"
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityInfoForm;
