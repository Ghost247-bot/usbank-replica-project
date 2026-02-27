
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useBankingData } from '@/hooks/useBankingData';
import { formatCurrency } from '@/utils/currency';

const AccountOverview = () => {
  const navigate = useNavigate();
  const { 
    totalBalance, 
    checkingBalance, 
    savingsBalance, 
    escrowBalance, 
    investmentBalance, 
    creditCardBalance,
    isLoading 
  } = useBankingData();

  const accounts = [
    {
      title: "Total Balance",
      amount: totalBalance,
      description: "All accounts combined",
      route: "/accounts/total-balance",
      icon: "💰"
    },
    {
      title: "Checking Account", 
      amount: checkingBalance,
      description: "Available balance",
      route: "/accounts/checking",
      icon: "💳"
    },
    {
      title: "Savings Account",
      amount: savingsBalance,
      description: "1.5% APY earning",
      route: "/accounts/savings",
      icon: "🏦"
    },
    {
      title: "Investment Account",
      amount: investmentBalance,
      description: "Portfolio balance",
      route: "/accounts/investment",
      icon: "📈"
    },
    {
      title: "Escrow Account",
      amount: escrowBalance,
      description: "Secured funds",
      route: "/accounts/escrow",
      icon: "🏠"
    },
    {
      title: "Credit Card",
      amount: creditCardBalance,
      description: "Current balance",
      route: "/accounts/credit-card",
      icon: "💳"
    }
  ];

  if (isLoading) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(account.route)}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {account.title}
              </CardTitle>
              <span className="text-xl">{account.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatCurrency(account.amount)}
              </div>
              <p className="text-xs text-muted-foreground">
                {account.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AccountOverview;
