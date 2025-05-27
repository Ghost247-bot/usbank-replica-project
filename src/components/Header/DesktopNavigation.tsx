
import React from 'react';
import { Link } from 'react-router-dom';
import PersonalBankingDropdown from './PersonalBankingDropdown';
import BusinessBankingDropdown from './BusinessBankingDropdown';
import WealthManagementDropdown from './WealthManagementDropdown';

const DesktopNavigation = () => {
  return (
    <nav className="flex items-center space-x-8">
      <PersonalBankingDropdown />
      <BusinessBankingDropdown />
      <WealthManagementDropdown />
      
      <Link 
        to="/about-us" 
        className="text-gray-700 hover:text-gray-900 px-2 py-1 text-sm font-medium border-b-2 border-transparent hover:border-gray-300 transition-colors"
      >
        About Us
      </Link>
      
      <Link 
        to="/customer-service" 
        className="text-gray-700 hover:text-gray-900 px-2 py-1 text-sm font-medium border-b-2 border-transparent hover:border-gray-300 transition-colors"
      >
        Support
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
