
import React, { useState } from 'react';
import { Search, User, ChevronDown, ChevronUp, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { personalBankingItems, businessBankingItems, wealthItems, additionalServicesItems } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="lg:hidden bg-white border-t animate-fade-in max-h-screen overflow-y-auto">
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
          {/* Personal Banking */}
          <div className="border-b pb-2">
            <button 
              className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium"
              onClick={() => toggleSection('personal')}
            >
              Personal Banking
              {expandedSection === 'personal' ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {expandedSection === 'personal' && (
              <div className="pl-4 space-y-2 mt-2">
                {personalBankingItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block py-2 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 rounded px-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Business Banking */}
          <div className="border-b pb-2">
            <button 
              className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium"
              onClick={() => toggleSection('business')}
            >
              Business Banking
              {expandedSection === 'business' ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {expandedSection === 'business' && (
              <div className="pl-4 space-y-2 mt-2">
                {businessBankingItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block py-2 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 rounded px-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Wealth Management */}
          <div className="border-b pb-2">
            <button 
              className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium"
              onClick={() => toggleSection('wealth')}
            >
              Wealth Management
              {expandedSection === 'wealth' ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {expandedSection === 'wealth' && (
              <div className="pl-4 space-y-2 mt-2">
                {wealthItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block py-2 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 rounded px-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <div className="border-b pb-2">
            <button 
              className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium"
              onClick={() => toggleSection('services')}
            >
              Services
              {expandedSection === 'services' ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            {expandedSection === 'services' && (
              <div className="pl-4 space-y-2 mt-2">
                {additionalServicesItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block py-2 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 rounded px-2"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About Us */}
          <div className="border-b pb-2">
            <Link 
              to="/about-us"
              className="w-full text-left block py-3 text-gray-700 hover:text-green-700 font-medium"
            >
              About Us
            </Link>
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
