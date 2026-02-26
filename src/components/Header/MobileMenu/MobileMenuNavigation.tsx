
import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuNavigationProps {
  onClose: () => void;
}

const MobileMenuNavigation = ({ onClose }: MobileMenuNavigationProps) => {
  return (
    <>
      <Link
        to="/about-us"
        className="block px-4 py-3.5 text-base font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100"
        onClick={onClose}
      >
        About Us
      </Link>
      
      <Link
        to="/customer-service"
        className="block px-4 py-3.5 text-base font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-100"
        onClick={onClose}
      >
        Support
      </Link>
    </>
  );
};

export default MobileMenuNavigation;
