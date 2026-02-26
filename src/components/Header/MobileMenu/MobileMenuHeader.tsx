
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
    <div className="flex items-center justify-between p-4 border-b border-slate-600/30 bg-gradient-to-r from-slate-800 to-slate-900 flex-shrink-0">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-white leading-tight">Menu</h2>
        {user && (
          <p className="text-xs text-slate-400 font-medium">
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
            className="flex items-center space-x-1 text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200"
            aria-label="Sign out"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </Button>
        )}
        <button
          onClick={onClose}
          className="p-2 hover:bg-slate-700/50 rounded-lg transition-all duration-200 text-slate-300 hover:text-white"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenuHeader;
