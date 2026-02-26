
import React, { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onClear: () => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
}

const SearchInput = ({ 
  searchQuery, 
  setSearchQuery, 
  onKeyDown, 
  onClear, 
  onBlur,
  autoFocus = false 
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleClear = () => {
    onClear();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded px-2 sm:px-3 py-1 bg-white shadow-lg">
      <Search className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mr-1 sm:mr-2 flex-shrink-0" />
      <input 
        ref={inputRef}
        type="text" 
        placeholder="Search pages..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        className="flex-1 bg-transparent outline-none text-xs sm:text-sm min-w-0"
        autoFocus={autoFocus}
      />
      {searchQuery && (
        <button 
          onClick={handleClear}
          className="p-0.5 hover:bg-gray-100 rounded"
          aria-label="Clear search"
        >
          <X className="h-3 w-3 text-gray-400" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
