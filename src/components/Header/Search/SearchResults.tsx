
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
    <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto backdrop-blur-xl bg-opacity-95">
      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <button
            key={`${result.path}-${index}`}
            onClick={() => onResultClick(result)}
            className={`w-full text-left px-4 py-3 hover:bg-white/5 border-b border-white/5 last:border-b-0 transition-all duration-200 ${
              selectedIndex === index ? 'bg-white/10 border-blue-500/50' : ''
            }`}
          >
            <div className="text-sm font-bold text-slate-100">{result.title}</div>
            <div className="text-xs text-slate-400 mt-0.5">{result.category}</div>
          </button>
        ))
      ) : (
        <div className="p-6 text-center">
          <div className="text-sm text-slate-400">
            No results found for <span className="text-white font-bold">"{searchQuery}"</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
