
import React from 'react';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <div className="text-2xl lg:text-3xl font-bold text-green-700 transform transition-all duration-300 hover:scale-110 cursor-pointer flex items-center">
        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-700 rounded-full mr-2 lg:mr-3 flex items-center justify-center">
          <span className="text-white font-bold text-sm lg:text-lg">U</span>
        </div>
        <span className="hidden sm:inline">US Bank</span>
        <span className="sm:hidden">USB</span>
      </div>
    </div>
  );
};

export default Logo;
