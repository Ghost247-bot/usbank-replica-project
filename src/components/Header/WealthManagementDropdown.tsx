
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, TrendingUp, PiggyBank, Shield, Users, Crown, FileText, Calculator, BarChart, Coins } from 'lucide-react';
import { useClickOutside } from '@/hooks/useClickOutside';

const WealthManagementDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsOpen(false), isOpen);

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
          <span>Wealth</span>
          <span>Management</span>
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 lg:-translate-x-[80%] w-[95vw] max-w-[1000px] bg-white border border-slate-200 rounded-2xl shadow-2xl z-[60] overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-8 lg:p-10">
            <div className="grid grid-cols-3 gap-12">
              {Object.entries(wealthServices).map(([category, services]) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-[13px] font-bold text-slate-900 uppercase tracking-wider">
                    {category}
                  </h3>
                  <div className="space-y-6">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="group flex items-start space-x-4"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <service.icon className="h-6 w-6 text-blue-700 opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                          <div className="text-[15px] font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                            {service.title}
                          </div>
                          <div className="text-[13px] text-slate-500 font-medium">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-50 border-t border-slate-100 p-8 flex items-center justify-between">
            <div className="flex flex-col">
              <h4 className="text-[17px] font-bold text-slate-900">Need personalized advice?</h4>
              <p className="text-[14px] text-slate-600">Connect with our wealth management specialists</p>
            </div>
            <Link
              to="/contact-us"
              className="bg-[#3D5AFE] text-white px-8 py-3 rounded-lg font-bold text-[15px] hover:bg-blue-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Advisor
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default WealthManagementDropdown;
