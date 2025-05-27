
import React from 'react';
import { Link } from 'react-router-dom';
import PersonalBankingDropdown from './PersonalBankingDropdown';
import BusinessBankingDropdown from './BusinessBankingDropdown';
import WealthManagementDropdown from './WealthManagementDropdown';

const DesktopNavigation = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <PersonalBankingDropdown />
      <BusinessBankingDropdown />
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
