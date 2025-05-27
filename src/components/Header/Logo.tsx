
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
      <img 
        src="/lovable-uploads/720b07eb-d3f3-452e-9778-fa1cb83f9853.png" 
        alt="Moonstone" 
        className="h-10 w-10 object-contain mr-3"
      />
      <div>
        <span className="text-2xl font-serif font-bold text-gray-800">Moonstone</span>
        <div className="text-xs text-gray-600 uppercase tracking-wider">Banking & Trust</div>
      </div>
    </Link>
  );
};

export default Logo;
