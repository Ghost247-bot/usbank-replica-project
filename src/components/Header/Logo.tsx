
import React from 'react';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <div className="flex items-center transform transition-all duration-300 hover:scale-110 cursor-pointer">
        <img 
          src="/lovable-uploads/720b07eb-d3f3-452e-9778-fa1cb83f9853.png" 
          alt="Moonstone" 
          className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
        />
        <div className="ml-2 lg:ml-3 min-w-0">
          <span className="hidden sm:inline text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 whitespace-nowrap">Moonstone</span>
          <span className="sm:hidden text-base font-bold text-gray-800">M</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
