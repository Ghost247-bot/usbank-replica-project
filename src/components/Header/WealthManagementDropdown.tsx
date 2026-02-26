
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
          className="flex items-center space-x-2 text-slate-300 hover:text-white px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>Wealth Management</span>
          <ChevronDown className={`h-4 w-4 transition-all duration-200 ${isOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} />
        </button>

            {isOpen && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-screen max-w-[1000px] bg-slate-900/98 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] z-[60] overflow-hidden animate-in fade-in zoom-in slide-in-from-top-2 duration-300"
              >
                <div className="p-8 lg:p-10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-w-0">
                  {Object.entries(wealthServices).map(([category, services]) => (
                    <div key={category} className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-1.5 h-6 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                          {category}
                        </h3>
                      </div>
                      <div className="space-y-1.5">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 border border-transparent hover:border-white/10 relative overflow-hidden"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="flex-shrink-0 p-2.5 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                              <service.icon className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                            </div>
                            <div className="min-w-0 pt-0.5">
                              <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors duration-300">
                                {service.title}
                              </div>
                              <div className="text-[13px] text-slate-500 mt-1 group-hover:text-slate-400 transition-colors duration-300 line-clamp-2 font-medium">
                                {service.description}
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/[0.02] to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-white/5">
                  <div className="bg-gradient-to-r from-purple-600/15 via-pink-600/15 to-indigo-600/15 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/5 shadow-inner">
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg font-black text-white mb-1 tracking-tight">
                        Preserve Your Legacy
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        World-class wealth strategies for generations to come.
                      </p>
                    </div>
                    <Link
                      to="/contact-us"
                      className="group relative inline-flex items-center px-8 py-3 bg-purple-600 text-white text-sm font-black rounded-2xl hover:bg-purple-500 transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(168,85,247,0.4)] hover:-translate-y-1 active:scale-95 overflow-hidden"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">Contact Advisor</span>
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

export default WealthManagementDropdown;
