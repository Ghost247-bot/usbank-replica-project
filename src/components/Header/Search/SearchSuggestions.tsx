
import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { SearchResult, popularSearches } from './searchData';

interface SearchSuggestionsProps {
  recentSearches: SearchResult[];
  onResultClick: (result: SearchResult) => void;
}

const SearchSuggestions = ({ recentSearches, onResultClick }: SearchSuggestionsProps) => {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto backdrop-blur-xl bg-opacity-95">
      {recentSearches.length > 0 && (
        <div className="p-4">
          <div className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            <Clock className="h-3.5 w-3.5 mr-2" />
            Recent Searches
          </div>
          {recentSearches.map((result, index) => (
            <button
              key={`recent-${index}`}
              onClick={() => onResultClick(result)}
              className="w-full text-left px-3 py-2.5 hover:bg-white/5 rounded-lg transition-all duration-200 group"
            >
              <div className="text-sm font-bold text-slate-200 group-hover:text-white">{result.title}</div>
              <div className="text-xs text-slate-400 group-hover:text-slate-300 mt-0.5">{result.category}</div>
            </button>
          ))}
        </div>
      )}
      
      <div className={`${recentSearches.length > 0 ? 'border-t border-white/5' : ''} p-4`}>
        <div className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
          <TrendingUp className="h-3.5 w-3.5 mr-2" />
          Popular Searches
        </div>
        {popularSearches.map((result, index) => (
          <button
            key={`popular-${index}`}
            onClick={() => onResultClick(result)}
            className="w-full text-left px-3 py-2.5 hover:bg-white/5 rounded-lg transition-all duration-200 group"
          >
            <div className="text-sm font-bold text-slate-200 group-hover:text-white">{result.title}</div>
            <div className="text-xs text-slate-400 group-hover:text-slate-300 mt-0.5">{result.category}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
