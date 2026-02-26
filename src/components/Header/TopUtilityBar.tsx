
import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const TopUtilityBar = () => {
  return (
    <div className="bg-slate-950/50 text-slate-400 text-[10px] sm:text-xs py-2 border-b border-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-6">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors duration-200 cursor-pointer group">
              <MapPin className="h-3 w-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-tight">Locations</span>
            </div>
            <div className="flex items-center space-x-1.5 hover:text-white transition-colors duration-200 cursor-pointer group">
              <Phone className="h-3 w-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-tight">1-800-MOONSTONE</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="font-medium tracking-tight opacity-60">Global Wealth Access</span>
            <div className="w-px h-3 bg-white/10" />
            <span className="hover:text-white transition-colors duration-200 cursor-pointer font-medium tracking-tight">Concierge Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUtilityBar;
