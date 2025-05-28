
import React, { useState } from 'react';
import { Grid3X3, Calculator, CreditCard, PiggyBank, TrendingUp, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickAccessMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      icon: Calculator,
      title: 'Loan Calculator',
      description: 'Calculate payments',
      path: '/personal/personal-loans'
    },
    {
      icon: CreditCard,
      title: 'Apply for Credit Card',
      description: 'Get approved instantly',
      path: '/personal/credit-cards'
    },
    {
      icon: PiggyBank,
      title: 'Open Savings',
      description: 'Start earning interest',
      path: '/personal/savings-accounts'
    },
    {
      icon: TrendingUp,
      title: 'Investment Tools',
      description: 'Portfolio tracker',
      path: '/wealth/investment-management'
    },
    {
      icon: FileText,
      title: 'Account Statements',
      description: 'Download statements',
      path: '/user-dashboard'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Quick access menu"
      >
        <Grid3X3 className="h-5 w-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Quick Access</h3>
          </div>
          
          <div className="p-2">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="bg-green-100 p-2 rounded-lg">
                  <action.icon className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{action.title}</p>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickAccessMenu;
