
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const TopUtilityBar = () => {
  return (
    <div className="bg-navy-900 text-white text-xs py-1 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>Find a Branch</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>1-800-MOONSTONE</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span>24/7 Customer Service</span>
            <span className="text-gray-400">|</span>
            <span>Security Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUtilityBar;
