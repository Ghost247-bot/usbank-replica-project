
import React from 'react';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700 transform transition-all duration-300 hover:scale-110 cursor-pointer flex items-center">
        <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-green-700 rounded-full mr-2 lg:mr-3 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xs sm:text-sm lg:text-lg">M</span>
        </div>
        <div className="min-w-0">
          <span className="hidden sm:inline whitespace-nowrap">Moonstone Holdings</span>
          <span className="sm:hidden text-base font-bold">MH</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
