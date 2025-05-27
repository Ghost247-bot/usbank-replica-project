
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, CreditCard, PiggyBank, Home, Car, GraduationCap, Shield, Smartphone, Globe } from 'lucide-react';
import { personalBankingItems } from './navigationData';

const PersonalBankingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getIconForItem = (title: string) => {
    switch (title) {
      case 'Checking Accounts':
      case 'Savings Accounts':
        return PiggyBank;
      case 'Credit Cards':
        return CreditCard;
      case 'Mortgages':
      case 'Home Equity Loans':
        return Home;
      case 'Auto Loans':
        return Car;
      case 'Student Loans':
        return GraduationCap;
      case 'Online Banking':
        return Globe;
      case 'Mobile Banking':
        return Smartphone;
      case 'Overdraft Protection':
        return Shield;
      default:
        return CreditCard;
    }
  };

  const organizedItems = {
    'Accounts': personalBankingItems.slice(0, 2), // Checking, Savings
    'Credit & Loans': personalBankingItems.slice(2, 8), // Credit Cards through Home Equity
    'Digital Banking': personalBankingItems.slice(8, 12), // Online through Overdraft
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Personal Banking</span>
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
                    Ready to get started?
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Open an account online in minutes
                  </p>
                </div>
                <Link
                  to="/personal/checking-accounts"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Open Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalBankingDropdown;
