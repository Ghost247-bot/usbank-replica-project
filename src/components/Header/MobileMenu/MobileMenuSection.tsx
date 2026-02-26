
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MobileMenuSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  items: Array<{
    title: string;
    href: string;
  }>;
  getIcon: (title: string) => React.ComponentType<{ className?: string }>;
  onItemClick: () => void;
}

const MobileMenuSection = ({ 
  title, 
  isExpanded, 
  onToggle, 
  items, 
  getIcon, 
  onItemClick 
}: MobileMenuSectionProps) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`flex items-center justify-between w-full px-4 py-3.5 text-base font-bold rounded-xl transition-all duration-200 border ${
          isExpanded 
            ? 'bg-blue-50 text-blue-700 border-blue-100' 
            : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50 border-transparent hover:border-slate-100'
        }`}
      >
        <span>{title} Banking</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isExpanded && (
        <div className="mt-2 space-y-1 pl-2 overflow-hidden bg-white rounded-xl border border-slate-100 shadow-sm animate-in slide-in-from-top-2 duration-300">
          {items.map((item) => {
            const IconComponent = getIcon(item.title);
            return (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-[14px] text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded-lg transition-all duration-200 w-full font-medium"
                onClick={onItemClick}
              >
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                  <IconComponent className="h-4 w-4 flex-shrink-0" />
                </div>
                <span className="truncate flex-1">{item.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileMenuSection;
