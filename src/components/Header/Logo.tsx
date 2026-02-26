
import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity group">
      <div className="bg-[#0A1F44] p-2 rounded flex items-center justify-center">
        <Landmark className="h-6 w-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-serif font-bold text-[#0A1F44] leading-none tracking-tight">Moonstone</span>
        <span className="text-[9px] font-sans font-bold text-[#0A1F44] tracking-[0.15em] mt-1 opacity-80 uppercase">Banking & Trust</span>
      </div>
    </Link>
  );
};

export default Logo;
