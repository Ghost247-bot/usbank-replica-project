
import React from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ActionButtons = () => {
  return (
    <div className="flex items-center space-x-3">
      <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 hover:scale-105">
        <User className="h-4 w-4" />
        <span>Sign In</span>
      </Button>
      <Button size="sm" className="bg-green-700 hover:bg-green-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg px-6">
        Open Account
      </Button>
    </div>
  );
};

export default ActionButtons;
