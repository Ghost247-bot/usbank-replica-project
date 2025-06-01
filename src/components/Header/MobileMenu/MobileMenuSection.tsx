
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
        className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isExpanded && (
        <div className="mt-2 space-y-1 pl-4">
          {items.map((item) => {
            const IconComponent = getIcon(item.title);
            return (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                onClick={onItemClick}
              >
                <IconComponent className="h-4 w-4 text-green-600" />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileMenuSection;
