
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, TrendingUp, PiggyBank, Shield, Users, Crown, FileText, Calculator, BarChart, Coins, CreditCard, Home, Car, GraduationCap, Smartphone, Globe, Building, DollarSign, Briefcase } from 'lucide-react';
import { personalBankingItems, businessBankingItems } from './navigationData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const wealthServices = [
    {
      title: 'Investment Management',
      href: '/wealth/investment-management',
      icon: TrendingUp
    },
    {
      title: 'Retirement Planning',
      href: '/wealth/retirement-planning',
      icon: PiggyBank
    },
    {
      title: 'Financial Planning',
      href: '/wealth/financial-planning',
      icon: Calculator
    },
    {
      title: 'Estate Planning',
      href: '/wealth/estate-planning',
      icon: FileText
    },
    {
      title: 'Tax Planning',
      href: '/wealth/tax-planning',
      icon: Calculator
    },
    {
      title: 'Private Banking',
      href: '/wealth/private-banking',
      icon: Crown
    },
    {
      title: 'Trust Services',
      href: '/wealth/trust-services',
      icon: Shield
    },
    {
      title: 'Insurance Solutions',
      href: '/wealth/insurance-solutions',
      icon: Shield
    },
    {
      title: 'Portfolio Analysis',
      href: '/wealth/portfolio-analysis',
      icon: BarChart
    },
    {
      title: 'Alternative Investments',
      href: '/wealth/alternative-investments',
      icon: Coins
    }
  ];

  const getPersonalBankingIcon = (title: string) => {
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

  const getBusinessBankingIcon = (title: string) => {
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

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="py-4 overflow-y-auto">
          <div className="space-y-1 px-4">
            <div>
              <button
                onClick={() => toggleSection('personal')}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Personal Banking</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    expandedSection === 'personal' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedSection === 'personal' && (
                <div className="mt-2 space-y-1 pl-4">
                  {personalBankingItems.map((item) => {
                    const IconComponent = getPersonalBankingIcon(item.title);
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            
            <div>
              <button
                onClick={() => toggleSection('business')}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Business Banking</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    expandedSection === 'business' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedSection === 'business' && (
                <div className="mt-2 space-y-1 pl-4">
                  {businessBankingItems.map((item) => {
                    const IconComponent = getBusinessBankingIcon(item.title);
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={onClose}
                      >
                        <IconComponent className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            
            <div>
              <button
                onClick={() => toggleSection('wealth')}
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Wealth Management</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    expandedSection === 'wealth' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedSection === 'wealth' && (
                <div className="mt-2 space-y-1 pl-4">
                  {wealthServices.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={onClose}
                    >
                      <service.icon className="h-4 w-4" />
                      <span>{service.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/about-us"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              About Us
            </Link>
            
            <Link
              to="/customer-service"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
