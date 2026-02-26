
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
    <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-300">
      {searchResults.length > 0 ? (
        searchResults.map((result, index) => (
          <button
            key={`${result.path}-${index}`}
            onClick={() => onResultClick(result)}
            className={`w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-b-0 transition-all duration-200 ${
              selectedIndex === index ? 'bg-slate-50 border-blue-500' : ''
            }`}
          >
            <div className="text-[14px] font-bold text-slate-900">{result.title}</div>
            <div className="text-[12px] text-slate-500 font-medium mt-0.5 uppercase tracking-wide">{result.category}</div>
          </button>
        ))
      ) : (
        <div className="p-6 text-center">
          <div className="text-sm text-slate-500">
            No results found for <span className="text-slate-900 font-bold">"{searchQuery}"</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
