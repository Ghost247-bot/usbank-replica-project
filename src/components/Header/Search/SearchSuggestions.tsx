
import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { SearchResult, popularSearches } from './searchData';

interface SearchSuggestionsProps {
  recentSearches: SearchResult[];
  onResultClick: (result: SearchResult) => void;
}

const SearchSuggestions = ({ recentSearches, onResultClick }: SearchSuggestionsProps) => {
  return (
    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
      {recentSearches.length > 0 && (
        <div className="p-3">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Clock className="h-4 w-4 mr-2" />
            Recent Searches
          </div>
          {recentSearches.map((result, index) => (
            <button
              key={`recent-${index}`}
              onClick={() => onResultClick(result)}
              className="w-full text-left px-2 py-2 hover:bg-gray-50 rounded transition-colors"
            >
              <div className="text-sm font-medium text-gray-900">{result.title}</div>
              <div className="text-xs text-gray-500">{result.category}</div>
            </button>
          ))}
        </div>
      )}
      
      <div className={`${recentSearches.length > 0 ? 'border-t border-gray-200' : ''} p-3`}>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <TrendingUp className="h-4 w-4 mr-2" />
          Popular Searches
        </div>
        {popularSearches.map((result, index) => (
          <button
            key={`popular-${index}`}
            onClick={() => onResultClick(result)}
            className="w-full text-left px-2 py-2 hover:bg-gray-50 rounded transition-colors"
          >
            <div className="text-sm font-medium text-gray-900">{result.title}</div>
            <div className="text-xs text-gray-500">{result.category}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
