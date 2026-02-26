import React from 'react';
import { 
  ArrowUpRight, 
  Download, 
  CreditCard, 
  Settings, 
  Smartphone, 
  FileText, 
  Shield, 
  TrendingUp,
  Bell,
  Users,
  Lock,
  Wallet,
  PiggyBank,
  Receipt,
  Calculator,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const EnhancedQuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: ArrowUpRight,
      label: 'Transfer Money',
      description: 'Send funds instantly',
      route: '/transfer-money',
      color: 'bg-blue-500 hover:bg-blue-600',
      badge: null
    },
    {
      icon: Download,
      label: 'Pay Bills',
      description: 'Utilities & more',
      route: '/pay-bills',
      color: 'bg-green-500 hover:bg-green-600',
      badge: null
    },
    {
      icon: CreditCard,
      label: 'Card Management',
      description: 'View & manage cards',
      route: '/cards',
      color: 'bg-purple-500 hover:bg-purple-600',
      badge: '2 Active'
    },
    {
      icon: Smartphone,
      label: 'Mobile Banking',
      description: 'Bank on the go',
      route: '/mobile-banking',
      color: 'bg-orange-500 hover:bg-orange-600',
      badge: null
    },
    {
      icon: FileText,
      label: 'Statements',
      description: 'View documents',
      route: '/statements',
      color: 'bg-indigo-500 hover:bg-indigo-600',
      badge: 'New'
    },
    {
      icon: Shield,
      label: 'Security',
      description: 'Protect account',
      route: '/security',
      color: 'bg-red-500 hover:bg-red-600',
      badge: null
    },
    {
      icon: TrendingUp,
      label: 'Investments',
      description: 'Grow wealth',
      route: '/investments',
      color: 'bg-emerald-500 hover:bg-emerald-600',
      badge: '+12.5%'
    },
    {
      icon: Bell,
      label: 'Notifications',
      description: '3 new alerts',
      route: '/notifications',
      color: 'bg-yellow-500 hover:bg-yellow-600',
      badge: '3'
    },
    {
      icon: Users,
      label: 'Beneficiaries',
      description: 'Manage recipients',
      route: '/beneficiaries',
      color: 'bg-cyan-500 hover:bg-cyan-600',
      badge: null
    },
    {
      icon: Lock,
      label: 'Password Manager',
      description: 'Security settings',
      route: '/password-manager',
      color: 'bg-gray-500 hover:bg-gray-600',
      badge: null
    },
    {
      icon: Wallet,
      label: 'Budget Tracker',
      description: 'Track spending',
      route: '/budget',
      color: 'bg-pink-500 hover:bg-pink-600',
      badge: null
    },
    {
      icon: PiggyBank,
      label: 'Savings Goals',
      description: 'Set targets',
      route: '/savings',
      color: 'bg-teal-500 hover:bg-teal-600',
      badge: '2 Active'
    }
  ];

  const financialTools = [
    {
      icon: Receipt,
      label: 'Expense Tracker',
      description: 'Categorize spending',
      route: '/expenses'
    },
    {
      icon: Calculator,
      label: 'Loan Calculator',
      description: 'Estimate payments',
      route: '/loan-calculator'
    },
    {
      icon: HelpCircle,
      label: 'Help Center',
      description: 'Get support',
      route: '/help'
    },
    {
      icon: MessageSquare,
      label: 'Live Chat',
      description: 'Talk to us',
      route: '/chat'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Primary Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Quick Actions
            <Badge variant="outline">12 Available</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {actions.map((action, index) => (
              <Button
                key={index}
                className={`h-24 flex flex-col items-center justify-center space-y-2 relative ${action.color}`}
                onClick={() => navigate(action.route)}
              >
                {action.badge && (
                  <Badge 
                    variant="secondary" 
                    className="absolute top-2 right-2 text-xs px-1 py-0"
                  >
                    {action.badge}
                  </Badge>
                )}
                <action.icon className="h-6 w-6" />
                <div className="text-center">
                  <div className="text-sm font-medium">{action.label}</div>
                  <div className="text-xs opacity-80">{action.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Financial Tools */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {financialTools.map((tool, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-20 flex flex-col items-center justify-center space-y-2"
                onClick={() => navigate(tool.route)}
              >
                <tool.icon className="h-5 w-5" />
                <div className="text-center">
                  <div className="text-sm">{tool.label}</div>
                  <div className="text-xs text-gray-500">{tool.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedQuickActions;
