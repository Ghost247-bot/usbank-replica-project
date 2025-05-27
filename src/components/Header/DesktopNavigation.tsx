
import React from 'react';
import { Link } from 'react-router-dom';
import WealthManagementDropdown from './WealthManagementDropdown';

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <div className="relative group">
        <Link 
          to="/" 
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        >
          Personal Banking
        </Link>
      </div>
      
      <div className="relative group">
        <Link 
          to="/business/business-checking" 
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        >
          Business Banking
        </Link>
      </div>
      
      <WealthManagementDropdown />
      
      <div className="relative group">
        <Link 
          to="/about-us" 
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        >
          About Us
        </Link>
      </div>
      
      <div className="relative group">
        <Link 
          to="/customer-service" 
          className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        >
          Support
        </Link>
      </div>
    </nav>
  );
};

export default DesktopNavigation;
