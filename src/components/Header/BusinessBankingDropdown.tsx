
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
          className="flex items-center space-x-2 text-slate-300 hover:text-white px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>Business Banking</span>
          <ChevronDown className={`h-4 w-4 transition-all duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} />
        </button>

            {isOpen && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-screen max-w-[1000px] bg-slate-900/98 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] z-[60] overflow-hidden animate-in fade-in zoom-in slide-in-from-top-2 duration-300"
              >
                <div className="p-8 lg:p-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-w-0">
                  {Object.entries(organizedItems).map(([category, items]) => (
                    <div key={category} className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-6 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                          {category}
                        </h3>
                      </div>
                      <div className="space-y-1.5">
                        {items.map((item) => {
                          const IconComponent = getIconForItem(item.title);
                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 border border-transparent hover:border-white/10 relative overflow-hidden"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="flex-shrink-0 p-2.5 rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300">
                                <IconComponent className="h-5 w-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                              </div>
                              <div className="min-w-0 pt-0.5">
                                <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors duration-300">
                                  {item.title}
                                </div>
                                <div className="text-[13px] text-slate-500 mt-1 group-hover:text-slate-400 transition-colors duration-300 line-clamp-2 font-medium">
                                  {item.description}
                                </div>
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/[0.02] to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="bg-gradient-to-r from-emerald-600/15 via-teal-600/15 to-blue-600/15 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 shadow-inner">
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-black text-white mb-1 tracking-tight">
                        Elevate Your Enterprise
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        Bespoke financial solutions for the modern business leader.
                      </p>
                    </div>
                    <Link
                      to="/business/business-checking"
                      className="group relative inline-flex items-center px-8 py-3 bg-emerald-600 text-white text-sm font-black rounded-2xl hover:bg-emerald-500 transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(16,185,129,0.4)] hover:-translate-y-1 active:scale-95 overflow-hidden"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
