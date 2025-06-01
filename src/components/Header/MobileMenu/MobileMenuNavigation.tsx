
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
        className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
        onClick={onClose}
      >
        About Us
      </Link>
      
      <Link
        to="/customer-service"
        className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
        onClick={onClose}
      >
        Support
      </Link>
    </>
  );
};

export default MobileMenuNavigation;
