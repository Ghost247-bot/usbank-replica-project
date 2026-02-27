import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Home, CreditCard, TrendingUp, Target, FileText, Settings, DollarSign, PieChart } from 'lucide-react';
import { getUserDisplayName } from '@/utils/user';

interface WelcomeDropdownProps {
  user: any;
}

const WelcomeDropdown = ({ user }: WelcomeDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const quickLinks = [
    {
      title: 'Dashboard Overview',
      description: 'Main dashboard with all your accounts',
      icon: Home,
      href: '/user-dashboard'
    },
    {
      title: 'Total Balance',
      description: 'View all your account balances',
      icon: DollarSign,
      href: '/accounts/total-balance'
    },
    {
      title: 'Transactions',
      description: 'View all transaction history',
      icon: FileText,
      href: '/view-all-transactions'
    },
    {
      title: 'Transfer Money',
      description: 'Send money between accounts',
      icon: CreditCard,
      href: '/transfer-money'
    },
    {
      title: 'Pay Bills',
      description: 'Manage and pay your bills',
      icon: DollarSign,
      href: '/pay-bills'
    },
    {
      title: 'Wealth Management',
      description: 'Investment and portfolio options',
      icon: TrendingUp,
      href: '/wealth-management'
    },
    {
      title: 'Financial Goals',
      description: 'Track your financial goals',
      icon: Target,
      href: '/view-all-goals'
    },
    {
      title: 'Account Settings',
      description: 'Manage your account preferences',
      icon: Settings,
      href: '/account-settings'
    }
  ];

  const handleLinkClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="text-left justify-start p-0 h-auto hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {getUserDisplayName(user)}!
          </h1>
          <ChevronDown 
            className={`h-6 w-6 text-gray-600 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <Card className="absolute top-full left-0 z-20 mt-2 w-96 shadow-lg border-gray-200">
            <CardContent className="p-0">
              <div className="max-h-96 overflow-y-auto">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <link.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {link.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {link.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default WelcomeDropdown;
