
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, TrendingUp, PiggyBank, Shield, Users, Crown, FileText, Calculator, BarChart, Coins } from 'lucide-react';

const WealthManagementDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const wealthServices = {
    'Investment Services': [
      {
        title: 'Investment Management',
        description: 'Professional portfolio management',
        href: '/wealth/investment-management',
        icon: TrendingUp
      },
      {
        title: 'Portfolio Analysis',
        description: 'In-depth investment review',
        href: '/wealth/portfolio-analysis',
        icon: BarChart
      },
      {
        title: 'Alternative Investments',
        description: 'Diversify with alternative options',
        href: '/wealth/alternative-investments',
        icon: Coins
      }
    ],
    'Planning Services': [
      {
        title: 'Retirement Planning',
        description: 'Secure your financial future',
        href: '/wealth/retirement-planning',
        icon: PiggyBank
      },
      {
        title: 'Financial Planning',
        description: 'Comprehensive financial advice',
        href: '/wealth/financial-planning',
        icon: Calculator
      },
      {
        title: 'Estate Planning',
        description: 'Plan for the future',
        href: '/wealth/estate-planning',
        icon: FileText
      },
      {
        title: 'Tax Planning',
        description: 'Optimize your tax strategy',
        href: '/wealth/tax-planning',
        icon: Calculator
      }
    ],
    'Specialized Services': [
      {
        title: 'Private Banking',
        description: 'Exclusive banking services',
        href: '/wealth/private-banking',
        icon: Crown
      },
      {
        title: 'Trust Services',
        description: 'Protect and transfer wealth',
        href: '/wealth/trust-services',
        icon: Shield
      },
      {
        title: 'Insurance Solutions',
        description: 'Comprehensive protection',
        href: '/wealth/insurance-solutions',
        icon: Shield
      }
    ]
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Wealth Management</span>
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
              {Object.entries(wealthServices).map(([category, services]) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <service.icon className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                            {service.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    Need personalized advice?
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Connect with our wealth management specialists
                  </p>
                </div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WealthManagementDropdown;
