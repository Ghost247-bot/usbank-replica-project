
import React from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordFormProps {
  formData: {
    password: string;
    confirmPassword: string;
  };
  setFormData: (data: any) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  showConfirmPassword: boolean;
  setShowConfirmPassword: (show: boolean) => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ 
  formData, 
  setFormData, 
  showPassword, 
  setShowPassword, 
  showConfirmPassword, 
  setShowConfirmPassword 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center">
        <Lock className="h-5 w-5 mr-2" />
        Account Security
      </h3>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            required
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 pr-12 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="Create a password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            required
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="w-full px-4 pr-12 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="Confirm your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordForm;
