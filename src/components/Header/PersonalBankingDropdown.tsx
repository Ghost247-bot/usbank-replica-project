
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, CreditCard, PiggyBank, Home, Car, GraduationCap, Shield, Smartphone, Globe } from 'lucide-react';
import { personalBankingItems } from './navigationData';
import { useClickOutside } from '@/hooks/useClickOutside';

const PersonalBankingDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsOpen(false), isOpen);

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
    'ACCOUNTS': [
      { title: 'Checking Accounts', description: 'Everyday banking made simple', href: '/personal/checking-accounts' },
      { title: 'Savings Accounts', description: 'Grow your money with us', href: '/personal/savings-accounts' },
    ],
    'CREDIT & LOANS': [
      { title: 'Credit Cards', description: 'Find the right card for you', href: '/personal/credit-cards' },
      { title: 'Mortgages', description: 'Home financing solutions', href: '/personal/mortgages' },
      { title: 'Personal Loans', description: 'Funding for your needs', href: '/personal/personal-loans' },
      { title: 'Auto Loans', description: 'Drive your dream car', href: '/personal/auto-loans' },
      { title: 'Student Loans', description: 'Invest in your education', href: '/personal/student-loans' },
      { title: 'Home Equity Loans', description: 'Unlock your home\'s value', href: '/personal/home-equity-loans' },
    ],
    'DIGITAL BANKING': [
      { title: 'CDs & Money Market', description: 'Secure savings options', href: '/personal/cds-money-market' },
      { title: 'Online Banking', description: 'Bank anytime, anywhere', href: '/personal/online-banking' },
      { title: 'Mobile Banking', description: 'Banking on the go', href: '/personal/mobile-banking' },
      { title: 'Overdraft Protection', description: 'Avoid overdraft fees', href: '/personal/overdraft-protection' },
    ],
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
          <span>Personal</span>
          <span>Banking</span>
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 lg:-translate-x-[20%] w-[95vw] max-w-[1000px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-[60] overflow-hidden animate-in fade-in zoom-in duration-300">
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
              <h4 className="text-[17px] font-bold text-slate-900">Ready to get started?</h4>
              <p className="text-[14px] text-slate-600">Open an account online in minutes</p>
            </div>
            <Link
              to="/personal/checking-accounts"
              className="bg-[#3D5AFE] text-white px-8 py-3 rounded-lg font-bold text-[15px] hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Open Account
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalBankingDropdown;
