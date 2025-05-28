
import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from './Search/useSearch';
import SearchInput from './Search/SearchInput';
import SearchResults from './Search/SearchResults';
import SearchSuggestions from './Search/SearchSuggestions';

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    selectedIndex,
    recentSearches,
    handleKeyDown,
    handleResultClick,
    clearSearch,
    resetSearch
  } = useSearch();

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeSearch();
    } else {
      handleKeyDown(e);
    }
  };

  const handleSearchResultClick = (result: any) => {
    handleResultClick(result);
    setIsSearchVisible(false);
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
    resetSearch();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Only close if the blur is not moving to a search result
    if (!e.relatedTarget || !searchRef.current?.contains(e.relatedTarget as Node)) {
      setTimeout(() => closeSearch(), 150);
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        closeSearch();
      }
    };

    if (isSearchVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchVisible]);

  return (
    <div className="flex items-center relative" ref={searchRef}>
      <div className={`transition-all duration-200 ${
        isSearchVisible 
          ? 'w-32 sm:w-40 md:w-48 lg:w-64' 
          : 'w-8'
      } overflow-visible relative`}>
        {isSearchVisible ? (
          <div className="relative">
            <SearchInput
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onKeyDown={handleSearchKeyDown}
              onClear={clearSearch}
              onBlur={handleBlur}
              autoFocus
            />
            
            {/* Search Results or Default Content */}
            {searchQuery.trim() === '' ? (
              <SearchSuggestions
                recentSearches={recentSearches}
                onResultClick={handleSearchResultClick}
              />
            ) : (
              <SearchResults
                searchQuery={searchQuery}
                searchResults={searchResults}
                selectedIndex={selectedIndex}
                onResultClick={handleSearchResultClick}
              />
            )}
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
