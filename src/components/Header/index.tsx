
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import TopUtilityBar from './TopUtilityBar';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <TopUtilityBar />
      
      <header className="bg-white shadow-lg border-b sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Logo />
            </div>

            <DesktopNavigation />

            <div className="flex items-center space-x-3">
              <SearchBar />
              <ActionButtons />

              <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-500" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} />
      </header>
    </>
  );
};

export default Header;
