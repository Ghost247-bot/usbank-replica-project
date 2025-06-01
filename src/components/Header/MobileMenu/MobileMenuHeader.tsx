
import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuHeaderProps {
  onClose: () => void;
}

const MobileMenuHeader = ({ onClose }: MobileMenuHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-green-50">
      <h2 className="text-lg font-semibold text-green-800">Menu</h2>
      <button
        onClick={onClose}
        className="p-2 hover:bg-green-100 rounded-lg transition-colors"
        aria-label="Close menu"
      >
        <X className="h-6 w-6 text-green-700" />
      </button>
    </div>
  );
};

export default MobileMenuHeader;
