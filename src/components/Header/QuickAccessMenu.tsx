
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
      case 'blue': return 'bg-blue-50 text-blue-600';
      case 'purple': return 'bg-purple-50 text-purple-600';
      case 'emerald': return 'bg-emerald-50 text-emerald-600';
      case 'amber': return 'bg-amber-50 text-amber-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-slate-100 rounded-full transition-all duration-200 text-slate-600 relative group"
        aria-label="Quick access menu"
      >
        <Grid3X3 className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 bg-white border border-slate-200 rounded-lg shadow-xl z-[70] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 border-b border-slate-100 bg-slate-50">
            <h3 className="text-sm font-bold text-slate-900">Quick Access</h3>
          </div>
          
          <div className="p-2 max-h-[350px] overflow-y-auto">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                onClick={() => setIsOpen(false)}
                className="group flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-all duration-200"
              >
                <div className={`p-2 rounded-lg transition-colors duration-200 ${getColorClasses(action.color)}`}>
                  <action.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-200">{action.title}</p>
                  <p className="text-[11px] text-slate-500 font-medium truncate">{action.description}</p>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-700 transform group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ))}
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-100">
            <Link 
              to="/user-dashboard" 
              className="text-[12px] text-center block text-blue-700 hover:text-blue-800 font-bold py-1 transition-colors"
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
