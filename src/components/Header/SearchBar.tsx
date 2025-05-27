
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className="flex items-center">
      <div className={`transition-all duration-200 ${
        isSearchVisible 
          ? 'w-32 sm:w-40 md:w-48 lg:w-64' 
          : 'w-8'
      } overflow-hidden`}>
        {isSearchVisible ? (
          <div className="flex items-center border border-gray-300 rounded px-2 sm:px-3 py-1 bg-white">
            <Search className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mr-1 sm:mr-2 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 bg-transparent outline-none text-xs sm:text-sm min-w-0"
              autoFocus
              onBlur={() => setIsSearchVisible(false)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setIsSearchVisible(false);
                }
              }}
            />
          </div>
        ) : (
          <button 
            onClick={() => setIsSearchVisible(true)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Open search"
          >
            <Search className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
