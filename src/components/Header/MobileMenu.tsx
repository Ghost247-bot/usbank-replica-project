
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, TrendingUp, PiggyBank, Shield, Users, Crown, FileText, Calculator, BarChart, Coins } from 'lucide-react';

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
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              Personal Banking
            </Link>
            
            <Link
              to="/business/business-checking"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              Business Banking
            </Link>
            
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
