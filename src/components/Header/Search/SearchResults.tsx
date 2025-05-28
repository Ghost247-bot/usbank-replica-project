
import React from 'react';
import { SearchResult } from './searchData';

interface SearchResultsProps {
  searchQuery: string;
  searchResults: SearchResult[];
  selectedIndex: number;
  onResultClick: (result: SearchResult) => void;
}

const SearchResults = ({ searchQuery, searchResults, selectedIndex, onResultClick }: SearchResultsProps) => {
  if (searchQuery.trim() === '') return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <button
            key={`${result.path}-${index}`}
            onClick={() => onResultClick(result)}
            className={`w-full text-left px-3 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${
              selectedIndex === index ? 'bg-blue-50 border-blue-200' : ''
            }`}
          >
            <div className="text-sm font-medium text-gray-900">{result.title}</div>
            <div className="text-xs text-gray-500">{result.category}</div>
          </button>
        ))
      ) : (
        <div className="p-3">
          <div className="text-sm text-gray-500 text-center">
            No results found for "{searchQuery}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
