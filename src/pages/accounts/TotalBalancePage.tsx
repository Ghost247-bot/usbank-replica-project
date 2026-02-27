
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Eye, EyeOff } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useBankingData } from '@/hooks/useBankingData';
import { formatCurrency } from '@/utils/currency';

const TotalBalancePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { 
    accounts, 
    creditCards, 
    totalBalance, 
    checkingBalance, 
    savingsBalance, 
    escrowBalance, 
    investmentBalance, 
    creditCardBalance,
    isLoading 
  } = useBankingData();

  const [showBalances, setShowBalances] = React.useState(true);

  const accountBreakdown = [
    {
      name: 'Checking Account',
      balance: checkingBalance,
      type: 'checking',
      icon: '💳',
      route: '/accounts/checking'
    },
    {
      name: 'Savings Account',
      balance: savingsBalance,
      type: 'savings',
      icon: '🏦',
      route: '/accounts/savings'
    },
    {
      name: 'Investment Account',
      balance: investmentBalance,
      type: 'investment',
      icon: '📈',
      route: '/accounts/investment'
    },
    {
      name: 'Escrow Account',
      balance: escrowBalance,
      type: 'escrow',
      icon: '🏠',
      route: '/accounts/escrow'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/user-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Total Balance Overview</h1>
              <p className="text-gray-600 mt-2">
                Complete view of all your accounts
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowBalances(!showBalances)}
              className="flex items-center"
            >
              {showBalances ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              {showBalances ? 'Hide' : 'Show'} Balances
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Total Balance Card */}
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardHeader>
              <CardTitle className="text-xl">Total Combined Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-bold">
                    {showBalances ? formatCurrency(totalBalance) : '••••••'}
                  </p>
                  <p className="text-blue-100 mt-2">All accounts combined</p>
                </div>
                <TrendingUp className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          {/* Account Breakdown */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Breakdown</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accountBreakdown.map((account) => (
                <Card 
                  key={account.type} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(account.route)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{account.icon}</span>
                      <CardTitle className="text-lg">{account.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-gray-900">
                      {showBalances ? formatCurrency(Number(account.balance)) : '••••••'}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Click to view details
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Credit Cards Section */}
          {creditCards.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Credit Cards</h2>
              <Card 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate('/accounts/credit-card')}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-2xl mr-3">💳</span>
                    Credit Cards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Current Balance</p>
                      <p className="text-2xl font-bold text-red-600">
                        {showBalances ? formatCurrency(creditCardBalance) : '••••••'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Credit Limit</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {showBalances ? formatCurrency(creditCards.reduce((sum, card) => sum + Number(card.credit_limit), 0)) : '••••••'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Net Worth Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Net Worth Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Total Assets</p>
                  <p className="text-2xl font-bold text-green-600">
                    {showBalances ? formatCurrency(totalBalance) : '••••••'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Liabilities</p>
                  <p className="text-2xl font-bold text-red-600">
                    {showBalances ? formatCurrency(creditCardBalance) : '••••••'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Net Worth</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {showBalances ? formatCurrency(totalBalance - creditCardBalance) : '••••••'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TotalBalancePage;
