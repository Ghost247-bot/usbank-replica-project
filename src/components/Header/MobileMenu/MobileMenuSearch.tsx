
import React from 'react';
import { Search } from 'lucide-react';

interface MobileMenuSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const MobileMenuSearch = ({ searchQuery, setSearchQuery }: MobileMenuSearchProps) => {
  return (
    <div className="p-4 flex-shrink-0">
      <div className="flex items-center bg-slate-100 rounded-xl px-4 py-3 border border-slate-200">
        <Search className="h-4 w-4 text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search products, services..." 
          className="flex-1 bg-transparent outline-none text-[14px] text-slate-900 placeholder-slate-500 font-medium"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MobileMenuSearch;
