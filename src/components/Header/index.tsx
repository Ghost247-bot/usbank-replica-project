
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import TopUtilityBar from './TopUtilityBar';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import SearchBar from './SearchBar';
import ActionButtons from './ActionButtons';
import NotificationDropdown from './NotificationDropdown';
import QuickAccessMenu from './QuickAccessMenu';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <TopUtilityBar />
      
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center ml-8">
              <DesktopNavigation />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Search Bar - Hidden on small screens */}
              <div className="hidden md:block">
                <SearchBar />
              </div>
              
              {/* Quick Access Menu - Desktop only */}
              <div className="hidden lg:block">
                <QuickAccessMenu />
              </div>

              {/* Notifications - Desktop and tablet */}
              <div className="hidden sm:block">
                <NotificationDropdown />
              </div>
              
              {/* Action Buttons */}
              <ActionButtons />

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-600" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </header>
    </>
  );
};

export default Header;
