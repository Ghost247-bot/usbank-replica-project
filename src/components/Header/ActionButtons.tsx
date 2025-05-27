
import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ActionButtons = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link to="/sign-in">
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden sm:flex items-center space-x-2 border border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors text-sm px-4 py-2 h-9"
        >
          <User className="h-4 w-4" />
          <span>Sign In</span>
        </Button>
      </Link>
      
      {/* Mobile Sign In Button */}
      <Link to="/sign-in">
        <Button 
          variant="outline" 
          size="sm" 
          className="sm:hidden flex items-center border border-gray-400 text-gray-700 hover:bg-gray-50 transition-colors text-xs px-3 h-8"
        >
          <User className="h-3 w-3" />
        </Button>
      </Link>
      
      <Link to="/create-account">
        <Button 
          size="sm" 
          className="bg-gray-800 hover:bg-gray-900 text-white transition-colors text-sm px-6 h-9"
        >
          <span className="hidden sm:inline">Open Account</span>
          <span className="sm:hidden">Open</span>
        </Button>
      </Link>
    </div>
  );
};

export default ActionButtons;
