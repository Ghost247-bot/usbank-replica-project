
import React, { useState } from 'react';
import { Grid3X3, Calculator, CreditCard, PiggyBank, TrendingUp, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useClickOutside } from '@/hooks/useClickOutside';

const QuickAccessMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside(() => setIsOpen(false), isOpen);

  const quickActions = [
    {
      icon: Calculator,
      title: 'Loan Calculator',
      description: 'Calculate payments',
      path: '/personal/personal-loans',
      color: 'blue'
    },
    {
      icon: CreditCard,
      title: 'Apply for Credit Card',
      description: 'Get approved instantly',
      path: '/personal/credit-cards',
      color: 'purple'
    },
    {
      icon: PiggyBank,
      title: 'Open Savings',
      description: 'Start earning interest',
      path: '/personal/savings-accounts',
      color: 'emerald'
    },
    {
      icon: TrendingUp,
      title: 'Investment Tools',
      description: 'Portfolio tracker',
      path: '/wealth/investment-management',
      color: 'amber'
    },
    {
      icon: FileText,
      title: 'Account Statements',
      description: 'Download statements',
      path: '/user-dashboard',
      color: 'slate'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500/10 text-blue-400';
      case 'purple': return 'bg-purple-500/10 text-purple-400';
      case 'emerald': return 'bg-emerald-500/10 text-emerald-400';
      case 'amber': return 'bg-amber-500/10 text-amber-400';
      default: return 'bg-slate-500/10 text-slate-400';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-slate-700/50 rounded-full transition-all duration-200 text-slate-300 relative group"
        aria-label="Quick access menu"
      >
        <Grid3X3 className="h-4.5 w-4.5 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 bg-slate-800/95 backdrop-blur-xl border border-slate-600/50 rounded-xl shadow-2xl z-[70] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-3 border-b border-slate-600/30 bg-gradient-to-r from-slate-800 to-slate-900">
            <h3 className="text-sm font-bold text-slate-200">Quick Access</h3>
          </div>
          
          <div className="p-1.5 max-h-[350px] overflow-y-auto custom-scrollbar">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center space-x-2.5 p-2.5 hover:bg-slate-700/50 rounded-lg transition-all duration-200 border border-transparent hover:border-slate-600/30"
              >
                <div className={`p-1.5 rounded-lg transition-colors duration-200 ${getColorClasses(action.color)}`}>
                  <action.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-slate-200 group-hover:text-white transition-colors duration-200">{action.title}</p>
                  <p className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors duration-200 truncate">{action.description}</p>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-slate-300 transform group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ))}
          </div>

          <div className="p-2.5 bg-slate-900/50 border-t border-slate-600/30">
            <Link 
              to="/user-dashboard" 
              className="text-[11px] text-center block text-blue-400 hover:text-blue-300 font-medium py-1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              View Full Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickAccessMenu;
