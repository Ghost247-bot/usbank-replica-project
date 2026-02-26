
import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ActionButtons = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link to="/auth">
        <Button 
          variant="outline" 
          size="sm" 
          className="hidden sm:flex items-center space-x-2 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-200 h-10 px-4 rounded-lg font-bold"
        >
          <User className="h-4 w-4" />
          <span>Sign In</span>
        </Button>
      </Link>
      
      <Link to="/create-account" className="hidden sm:block">
        <Button 
          size="sm" 
          className="bg-[#0A1F44] hover:bg-slate-800 text-white font-bold transition-all duration-200 h-10 px-6 rounded-lg"
        >
          Open Account
        </Button>
      </Link>

      {/* Mobile view just shows one solid button for space */}
      <Link to="/auth" className="sm:hidden">
        <Button 
          size="sm" 
          className="bg-[#0A1F44] text-white h-9 px-4 rounded-lg font-bold"
        >
          Sign In
        </Button>
      </Link>
    </div>
  );
};

export default ActionButtons;
