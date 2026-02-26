
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const TopUtilityBar = () => {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-2">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-4 sm:h-5">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-[11px] font-bold text-blue-700 cursor-pointer hover:underline">
              <span>Personal</span>
            </div>
            <div className="flex items-center space-x-1.5 text-[11px] font-bold text-slate-500 cursor-pointer hover:text-blue-700">
              <span>Business</span>
            </div>
            <div className="flex items-center space-x-1.5 text-[11px] font-bold text-slate-500 cursor-pointer hover:text-blue-700">
              <span>Wealth</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-6 text-[11px] font-bold text-slate-500">
            <div className="flex items-center space-x-1.5 cursor-pointer hover:text-blue-700 group">
              <MapPin className="h-3 w-3 text-slate-400 group-hover:text-blue-700" />
              <span>Locations</span>
            </div>
            <div className="flex items-center space-x-1.5 cursor-pointer hover:text-blue-700 group">
              <Phone className="h-3 w-3 text-slate-400 group-hover:text-blue-700" />
              <span>1-800-MOONSTONE</span>
            </div>
            <div className="h-3 w-px bg-slate-200" />
            <span className="cursor-pointer hover:text-blue-700">Concierge Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUtilityBar;
