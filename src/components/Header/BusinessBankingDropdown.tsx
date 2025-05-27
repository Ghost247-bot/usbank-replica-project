
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Building, CreditCard, DollarSign, Globe, Users, FileText, TrendingUp, Shield, Briefcase } from 'lucide-react';
import { businessBankingItems } from './navigationData';

const BusinessBankingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getIconForItem = (title: string) => {
    switch (title) {
      case 'Business Checking':
        return Building;
      case 'Business Credit Cards':
        return CreditCard;
      case 'Business Loans':
      case 'Business Lines of Credit':
      case 'SBA Loans':
        return DollarSign;
      case 'Merchant Services':
        return TrendingUp;
      case 'Treasury Management':
        return Briefcase;
      case 'Equipment Financing':
      case 'Commercial Real Estate':
        return Building;
      case 'Payroll Services':
        return Users;
      case 'Business Insurance':
        return Shield;
      case 'International Banking':
        return Globe;
      default:
        return Building;
    }
  };

  const organizedItems = {
    'Banking': businessBankingItems.slice(0, 4), // Business Checking through Merchant Services
    'Lending': businessBankingItems.slice(4, 8), // Treasury through Commercial Real Estate
    'Services': businessBankingItems.slice(8, 12), // SBA through International Banking
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Business Banking</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-1 w-[800px] bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="p-6">
            <div className="grid grid-cols-3 gap-8">
              {Object.entries(organizedItems).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {items.map((item) => {
                      const IconComponent = getIconForItem(item.title);
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <IconComponent className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Grow your business with us
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Discover banking solutions tailored for businesses
                  </p>
                </div>
                <Link
                  to="/business/business-checking"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessBankingDropdown;
