
import React from 'react';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <div className="text-3xl font-bold text-green-700 transform transition-all duration-300 hover:scale-110 cursor-pointer flex items-center">
        <div className="w-10 h-10 bg-green-700 rounded-full mr-3 flex items-center justify-center">
          <span className="text-white font-bold text-lg">U</span>
        </div>
        US Bank
      </div>
    </div>
  );
};

export default Logo;
