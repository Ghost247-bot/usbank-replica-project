
import React from 'react';
import { X, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

interface MobileMenuHeaderProps {
  onClose: () => void;
}

const MobileMenuHeader = ({ onClose }: MobileMenuHeaderProps) => {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    onClose();
  };

  return (
    <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white flex-shrink-0">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-slate-900 leading-tight">Menu</h2>
        {user && (
          <p className="text-[13px] text-slate-500 font-medium mt-1">
            Welcome back, {user.user_metadata?.first_name || 'User'}
          </p>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {user && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="flex items-center space-x-2 text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-all duration-200 px-3 py-2 rounded-lg"
            aria-label="Sign out"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline font-bold">Sign Out</span>
          </Button>
        )}
        <button
          onClick={onClose}
          className="p-2 hover:bg-slate-50 rounded-xl transition-all duration-200 text-slate-400 hover:text-slate-900"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenuHeader;
