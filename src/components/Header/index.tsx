
import React from 'react';
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
import { LogOut } from 'lucide-react';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200">
      <TopUtilityBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Logo />
            <DesktopNavigation />
          </div>
          
          <div className="flex items-center space-x-4">
            <SearchBar />
            
            {user ? (
              <>
                <QuickAccessMenu />
                <NotificationDropdown />
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">
                    Welcome, {user.user_metadata?.first_name || 'User'}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={signOut}
                    className="flex items-center space-x-1"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Button>
                </div>
              </>
            ) : (
              <ActionButtons />
            )}
            
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
