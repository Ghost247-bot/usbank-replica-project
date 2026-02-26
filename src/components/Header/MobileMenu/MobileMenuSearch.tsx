
import React from 'react';
import { Search } from 'lucide-react';

interface MobileMenuSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const MobileMenuSearch = ({ searchQuery, setSearchQuery }: MobileMenuSearchProps) => {
  return (
    <div className="p-4 border-b border-slate-600/30 flex-shrink-0">
      <div className="flex items-center bg-slate-700/50 rounded-full px-4 py-2 border border-slate-600/30">
        <Search className="h-4 w-4 text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search products, services..." 
          className="flex-1 bg-transparent outline-none text-sm text-slate-200 placeholder-slate-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MobileMenuSearch;
