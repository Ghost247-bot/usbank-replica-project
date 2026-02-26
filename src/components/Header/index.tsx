
import React, { useState } from 'react';
import TopUtilityBar from './TopUtilityBar';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';
import ActionButtons from './ActionButtons';
import SearchBar from './SearchBar';
import QuickAccessMenu from './QuickAccessMenu';
import NotificationDropdown from './NotificationDropdown';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, Menu } from 'lucide-react';

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-slate-900/90 border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl overflow-visible transition-all duration-500 shadow-2xl">
      <TopUtilityBar />
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24 sm:h-28">
          <div className="flex items-center space-x-12 sm:space-x-16">
            <Logo />
            <div className="hidden xl:block">
              <DesktopNavigation />
            </div>
          </div>
          
          <div className="flex items-center space-x-6 sm:space-x-8">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            
            <div className="flex items-center space-x-6 lg:space-x-8">
              {user ? (
                <>
                  <div className="hidden sm:flex items-center space-x-6">
                    <QuickAccessMenu />
                    <NotificationDropdown />
                  </div>
                  <div className="flex items-center space-x-6 pl-6 border-l border-white/15">
                    <div className="hidden lg:block text-right">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-0.5">Welcome back</p>
                      <p className="text-sm text-white font-black leading-tight tracking-tight">
                        {user.user_metadata?.full_name || user.user_metadata?.first_name || user.email?.split('@')[0] || 'Member'}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={signOut}
                      className="flex items-center space-x-2 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-xl px-4 py-2"
                    >
                      <LogOut className="h-4.5 w-4.5" />
                      <span className="hidden sm:inline font-bold">Sign Out</span>
                    </Button>
                  </div>
                </>
              ) : (
                <ActionButtons />
              )}
              
              {/* Mobile menu button */}
              <button
                onClick={handleMobileMenuToggle}
                className="xl:hidden p-3 hover:bg-white/10 rounded-2xl transition-all duration-300 text-slate-300 border border-white/10 group shadow-lg"
                aria-label="Toggle mobile menu"
              >
                <Menu className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
    </header>
  );
};

export default Header;
