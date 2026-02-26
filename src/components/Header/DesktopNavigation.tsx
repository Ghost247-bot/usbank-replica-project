
import React from 'react';
import { Link } from 'react-router-dom';
import PersonalBankingDropdown from './PersonalBankingDropdown';
import BusinessBankingDropdown from './BusinessBankingDropdown';
import WealthManagementDropdown from './WealthManagementDropdown';

const DesktopNavigation = () => {
  return (
    <nav className="flex items-center space-x-2">
      <PersonalBankingDropdown />
      <BusinessBankingDropdown />
      <WealthManagementDropdown />
      
      <Link 
        to="/about-us" 
        className="text-slate-300 hover:text-white px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
      >
        About Us
      </Link>
      
      <Link 
        to="/customer-service" 
        className="text-slate-300 hover:text-white px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
      >
        Support
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
