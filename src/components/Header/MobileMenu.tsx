
import React from 'react';
import { Search, User, ChevronDown, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t animate-fade-in">
      <div className="px-4 py-6 space-y-4">
        {/* Mobile Search */}
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
          <Search className="h-5 w-5 text-gray-500 mr-3" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="flex-1 bg-transparent outline-none text-sm"
          />
        </div>

        {/* Mobile Menu Items */}
        <div className="space-y-2">
          <div className="border-b pb-2">
            <button className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium">
              Personal Banking
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="border-b pb-2">
            <button className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium">
              Business Banking
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="border-b pb-2">
            <button className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium">
              Wealth Management
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="border-b pb-2">
            <button className="w-full text-left py-3 text-gray-700 hover:text-green-700 font-medium">
              About Us
            </button>
          </div>
        </div>

        {/* Mobile Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button variant="outline" className="w-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button className="w-full bg-green-700 hover:bg-green-800">
            Open Account
          </Button>
        </div>

        {/* Mobile Contact Info */}
        <div className="pt-4 border-t space-y-3 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Find a Branch</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>1-800-USBANKS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
