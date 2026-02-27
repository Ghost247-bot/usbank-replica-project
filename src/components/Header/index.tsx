
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { 
  LogOut, 
  Menu, 
  User, 
  ChevronDown,
  Home,
  Settings,
  CreditCard,
  TrendingUp
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getUserDisplayName } from '@/utils/user';

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <TopUtilityBar />
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Logo />
            <div className="hidden lg:block">
              <DesktopNavigation />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden md:block">
              <SearchBar />
            </div>
            
            {user ? (
              <>
                <div className="hidden lg:flex items-center space-x-2">
                  <QuickAccessMenu />
                  <NotificationDropdown />
                </div>
                
                {/* User Dropdown Menu */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 text-xs sm:text-sm px-2 sm:px-3 hover:bg-gray-100"
                    >
                      <User className="h-4 w-4" />
                      <span className="hidden sm:inline">
                        {getUserDisplayName(user)}
                      </span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-1.5 text-sm text-gray-700 border-b">
                      <div className="font-medium">{getUserDisplayName(user)}</div>
                      <div className="text-xs text-gray-500">{user?.email}</div>
                    </div>
                    
                    <DropdownMenuItem onClick={() => navigate('/user-dashboard')} className="cursor-pointer">
                      <Home className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem onClick={() => navigate('/accounts/total-balance')} className="cursor-pointer">
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Accounts</span>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem onClick={() => navigate('/wealth-management')} className="cursor-pointer">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      <span>Wealth Management</span>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem onClick={() => navigate('/account-settings')} className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuItem onClick={signOut} className="cursor-pointer text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <ActionButtons />
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} />
    </header>
  );
};

export default Header;
