
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Building, CreditCard, DollarSign, Globe, Users, FileText, TrendingUp, Shield, Briefcase } from 'lucide-react';
import { businessBankingItems } from './navigationData';
import { useClickOutside } from '@/hooks/useClickOutside';

const BusinessBankingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsOpen(false), isOpen);

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
    <div className="relative" ref={dropdownRef}>
      <button
        className={`flex items-center space-x-1.5 px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${isOpen ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'}`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="flex flex-col items-start leading-tight">
          <span>Business</span>
          <span>Banking</span>
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-[95vw] max-w-[1000px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-[60] overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-8 lg:p-10">
            <div className="grid grid-cols-3 gap-12">
              {Object.entries(organizedItems).map(([category, items]) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-wider">
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {items.map((item) => {
                      const IconComponent = getIconForItem(item.title);
                      return (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="group flex items-start space-x-4"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <IconComponent className="h-6 w-6 text-blue-700 opacity-80 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div>
                            <div className="text-[15px] font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[13px] text-slate-500 font-medium">
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
          </div>
          
          <div className="bg-slate-50 border-t border-slate-100 p-8 flex items-center justify-between">
            <div className="flex flex-col">
              <h4 className="text-[17px] font-bold text-slate-900">Ready to scale?</h4>
              <p className="text-[14px] text-slate-600">Bespoke financial solutions for your business</p>
            </div>
            <Link
              to="/business/business-checking"
              className="bg-[#3D5AFE] text-white px-8 py-3 rounded-lg font-bold text-[15px] hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessBankingDropdown;
