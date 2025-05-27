
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const TopUtilityBar = () => {
  return (
    <div className="bg-gray-900 text-white text-sm py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Find a Branch</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>1-800-USBANKS</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>24/7 Customer Service</span>
            <span className="text-gray-300">|</span>
            <span>Security Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUtilityBar;
