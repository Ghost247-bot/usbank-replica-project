
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <div className="flex items-center">
      <div className={`transition-all duration-300 ${isSearchVisible ? 'w-48 lg:w-64' : 'w-10'} overflow-hidden`}>
        {isSearchVisible ? (
          <div className="flex items-center bg-gray-100 rounded-full px-3 lg:px-4 py-2">
            <Search className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 bg-transparent outline-none text-sm min-w-0"
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
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            aria-label="Open search"
          >
            <Search className="h-4 w-4 lg:h-5 lg:w-5 text-gray-500 hover:text-green-700" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
