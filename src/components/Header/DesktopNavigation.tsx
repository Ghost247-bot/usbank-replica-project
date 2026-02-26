
import React from 'react';
import { Link } from 'react-router-dom';
import PersonalBankingDropdown from './PersonalBankingDropdown';
import BusinessBankingDropdown from './BusinessBankingDropdown';
import WealthManagementDropdown from './WealthManagementDropdown';

const DesktopNavigation = () => {
  return (
    <nav className="flex items-center space-x-1 lg:space-x-2">
      <PersonalBankingDropdown />
      <BusinessBankingDropdown />
      <WealthManagementDropdown />
      
      <Link 
        to="/about-us" 
        className="text-[15px] font-medium text-slate-700 hover:text-blue-700 px-4 py-2 transition-colors duration-200"
      >
        <span className="flex flex-col items-start leading-tight">
          <span>About</span>
          <span>Us</span>
        </span>
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
