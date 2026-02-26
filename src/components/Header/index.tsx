
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';
import ActionButtons from './ActionButtons';
import SearchBar from './SearchBar';
import QuickAccessMenu from './QuickAccessMenu';
import NotificationDropdown from './NotificationDropdown';
import TopUtilityBar from './TopUtilityBar';
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
<header className="bg-white border-b border-slate-200 sticky top-0 z-50 overflow-visible transition-all duration-300 shadow-sm">
<TopUtilityBar />
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex items-center justify-between h-20">
<div className="flex items-center space-x-8 lg:space-x-12">
<Logo />
<div className="hidden xl:block">
<DesktopNavigation />
</div>
</div>

<div className="flex items-center space-x-4 lg:space-x-6">
<div className="hidden lg:flex items-center space-x-6">
<Link to="/customer-service" className="text-[15px] font-medium text-slate-700 hover:text-blue-600">Support</Link>
<SearchBar />
<QuickAccessMenu />
<NotificationDropdown />
</div>

  <div className="flex items-center space-x-4 pl-4 border-l border-slate-200">
    {user ? (
      <>
        <div className="hidden sm:block text-right">
          <p className="text-[12px] text-slate-500 font-medium leading-tight">
            Welcome,
          </p>
          <p className="text-[14px] text-slate-900 font-bold whitespace-nowrap leading-tight">
            {user.user_metadata?.full_name || 'Admin'}
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="flex items-center space-x-2 text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-all duration-200 rounded-lg px-2 py-1"
        >
          <LogOut className="h-4.5 w-4.5" />
          <span className="hidden md:inline font-bold text-[14px]">Sign Out</span>
        </Button>
      </>
    ) : (
      <ActionButtons />
    )}

{/* Mobile menu button */}
<button
onClick={handleMobileMenuToggle}
className="xl:hidden p-2 hover:bg-slate-100 rounded-lg transition-all duration-200 text-slate-600"
aria-label="Toggle mobile menu"
>
<Menu className="h-6 w-6" />
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
