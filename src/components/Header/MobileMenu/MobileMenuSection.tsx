
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
        className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-700/50 rounded-lg transition-all duration-200 border border-transparent hover:border-slate-600/30"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-all duration-200 text-slate-400 ${
            isExpanded ? 'rotate-180 text-slate-200' : ''
          }`}
        />
      </button>
      
      {isExpanded && (
        <div className="mt-2 space-y-1 pl-4 overflow-hidden bg-slate-800/50 rounded-lg border border-slate-600/20">
          {items.map((item) => {
            const IconComponent = getIcon(item.title);
            return (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center space-x-3 px-3 py-2 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 rounded-lg transition-all duration-200 w-full border border-transparent hover:border-slate-600/30"
                onClick={onItemClick}
              >
                <IconComponent className="h-4 w-4 text-blue-400 flex-shrink-0" />
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
