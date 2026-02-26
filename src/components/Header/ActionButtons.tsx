
import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ActionButtons = () => {
  return (
    <div className="flex items-center space-x-3 sm:space-x-6">
      <Link to="/auth">
        <Button 
          variant="ghost" 
          size="sm" 
          className="hidden sm:flex items-center space-x-2 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-black px-6 h-12 rounded-2xl border border-transparent hover:border-white/10"
        >
          <User className="h-4.5 w-4.5" />
          <span>Sign In</span>
        </Button>
      </Link>
      
      {/* Mobile Sign In Button */}
      <Link to="/auth">
        <Button 
          variant="ghost" 
          size="sm" 
          className="sm:hidden flex items-center text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300 px-4 h-12 rounded-2xl border border-white/10 shadow-lg"
        >
          <User className="h-5 w-5" />
        </Button>
      </Link>
      
      <Link to="/create-account">
        <Button 
          size="sm" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-black transition-all duration-300 text-xs sm:text-sm px-6 sm:px-10 h-12 rounded-2xl shadow-[0_10px_20px_-5px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95"
        >
          <span className="hidden sm:inline">Open Account</span>
          <span className="sm:hidden">Open</span>
        </Button>
      </Link>
    </div>
  );
};

export default ActionButtons;
