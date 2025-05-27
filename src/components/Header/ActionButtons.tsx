
import React from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ActionButtons = () => {
  return (
    <div className="flex items-center space-x-2 lg:space-x-3">
      <Button 
        variant="outline" 
        size="sm" 
        className="hidden sm:flex items-center space-x-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 hover:scale-105 text-xs lg:text-sm px-2 lg:px-4"
      >
        <User className="h-3 w-3 lg:h-4 lg:w-4" />
        <span className="hidden md:inline">Sign In</span>
      </Button>
      <Button 
        size="sm" 
        className="bg-green-700 hover:bg-green-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-xs lg:text-sm px-3 lg:px-6"
      >
        <span className="hidden sm:inline">Open Account</span>
        <span className="sm:hidden">Open</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
