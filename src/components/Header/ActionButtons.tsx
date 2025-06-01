
import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ActionButtons = () => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <Link to="/auth">
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden sm:flex items-center space-x-2 border border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors text-sm px-3 sm:px-4 py-2 h-8 sm:h-9"
        >
          <User className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>Sign In</span>
        </Button>
      </Link>
      
      {/* Mobile Sign In Button */}
      <Link to="/auth">
        <Button 
          variant="outline" 
          size="sm" 
          className="sm:hidden flex items-center border border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors text-xs px-2 h-8"
        >
          <User className="h-3 w-3" />
        </Button>
      </Link>
      
      <Link to="/create-account">
        <Button 
          size="sm" 
          className="bg-gray-800 hover:bg-gray-900 text-white transition-colors text-xs sm:text-sm px-3 sm:px-6 h-8 sm:h-9"
        >
          <span className="hidden sm:inline">Open Account</span>
          <span className="sm:hidden">Open</span>
        </Button>
      </Link>
    </div>
  );
};

export default ActionButtons;
