
import React from 'react';
import { MapPin } from 'lucide-react';

interface AddressInfoFormProps {
  formData: {
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    };
  };
  setFormData: (data: any) => void;
}

const AddressInfoForm: React.FC<AddressInfoFormProps> = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-800 flex items-center">
        <MapPin className="h-5 w-5 mr-2" />
        Address Information
      </h3>

      <div>
        <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">
          Street Address
        </label>
        <input
          id="street"
          type="text"
          required
          value={formData.address.street}
          onChange={(e) => setFormData({ ...formData, address: { ...formData.address, street: e.target.value } })}
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          placeholder="123 Main Street"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <input
            id="city"
            type="text"
            required
            value={formData.address.city}
            onChange={(e) => setFormData({ ...formData, address: { ...formData.address, city: e.target.value } })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="City"
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <input
            id="state"
            type="text"
            required
            value={formData.address.state}
            onChange={(e) => setFormData({ ...formData, address: { ...formData.address, state: e.target.value } })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="State"
          />
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code
          </label>
          <input
            id="zipCode"
            type="text"
            required
            value={formData.address.zipCode}
            onChange={(e) => setFormData({ ...formData, address: { ...formData.address, zipCode: e.target.value } })}
            className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
            placeholder="ZIP"
          />
        </div>
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
          Country
        </label>
        <input
          id="country"
          type="text"
          required
          value={formData.address.country}
          onChange={(e) => setFormData({ ...formData, address: { ...formData.address, country: e.target.value } })}
          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
          placeholder="Country"
        />
      </div>
    </div>
  );
};

export default AddressInfoForm;
