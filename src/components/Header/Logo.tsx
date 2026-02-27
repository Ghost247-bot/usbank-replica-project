
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
      <img 
        src="/Logo with Crescent Moon and Gemstone.png" 
        alt="Moonstone" 
        className="h-8 w-8 sm:h-10 sm:w-10 object-contain mr-2 sm:mr-3"
      />
      <div>
        <span className="text-lg sm:text-2xl font-serif font-bold text-gray-800">Moonstone</span>
        <div className="text-xs text-gray-600 uppercase tracking-wider hidden sm:block">Banking & Trust</div>
      </div>
    </Link>
  );
};

export default Logo;
