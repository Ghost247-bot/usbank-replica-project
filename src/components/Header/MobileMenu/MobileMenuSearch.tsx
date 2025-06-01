
import React from 'react';
import { Search } from 'lucide-react';

interface MobileMenuSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const MobileMenuSearch = ({ searchQuery, setSearchQuery }: MobileMenuSearchProps) => {
  return (
    <div className="p-4 border-b md:hidden">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
        <Search className="h-4 w-4 text-gray-500 mr-2" />
        <input 
          type="text" 
          placeholder="Search products, services..." 
          className="flex-1 bg-transparent outline-none text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MobileMenuSearch;
