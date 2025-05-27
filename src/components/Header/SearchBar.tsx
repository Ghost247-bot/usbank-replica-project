
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className="hidden lg:flex items-center">
      <div className={`transition-all duration-300 ${isSearchVisible ? 'w-64' : 'w-10'} overflow-hidden`}>
        {isSearchVisible ? (
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search products, services..." 
              className="flex-1 bg-transparent outline-none text-sm"
              autoFocus
              onBlur={() => setIsSearchVisible(false)}
            />
          </div>
        ) : (
          <button 
            onClick={() => setIsSearchVisible(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <Search className="h-5 w-5 text-gray-500 hover:text-green-700" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
