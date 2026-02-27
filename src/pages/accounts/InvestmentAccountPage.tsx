
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, BarChart3, PieChart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useBankingData } from '@/hooks/useBankingData';

const InvestmentAccountPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { accounts, transactions, isLoading } = useBankingData();

  const investmentAccount = accounts.find(acc => acc.account_type === 'investment');
  const investmentTransactions = transactions.filter(t => t.account_id === investmentAccount?.id).slice(0, 10);

  // Mock portfolio data - in a real app this would come from the database
  const portfolioData = {
    stocks: { value: 0, percentage: 0 },
    bonds: { value: 0, percentage: 0 },
    etfs: { value: 0, percentage: 0 },
    cash: { value: Number(investmentAccount?.balance || 0), percentage: 100 }
  };

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
          
          <h1 className="text-3xl font-bold text-gray-900">Investment Account</h1>
          <p className="text-gray-600 mt-2">
            Build wealth through smart investing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Portfolio Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Total Portfolio Value</p>
                    <p className="text-3xl font-bold text-gray-900">
                      ${Number(investmentAccount?.balance || 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Today's Change</p>
                      <p className="text-lg font-semibold text-green-600">+$0.00 (0.00%)</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Return</p>
                      <p className="text-lg font-semibold text-green-600">+$0.00 (0.00%)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Asset Allocation */}
            <Card>
              <CardHeader>
                <CardTitle>Asset Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                      <span>Stocks</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${portfolioData.stocks.value.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">{portfolioData.stocks.percentage}%</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                      <span>Bonds</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${portfolioData.bonds.value.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">{portfolioData.bonds.percentage}%</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
                      <span>ETFs</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${portfolioData.etfs.value.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">{portfolioData.etfs.percentage}%</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-500 rounded mr-3"></div>
                      <span>Cash</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${portfolioData.cash.value.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">{portfolioData.cash.percentage}%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                {investmentTransactions.length > 0 ? (
                  <div className="space-y-4">
                    {investmentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <p className="font-medium">{transaction.description || 'Investment Transaction'}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(transaction.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${
                            transaction.transaction_type === 'deposit' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.transaction_type === 'deposit' ? '+' : '-'}${Math.abs(Number(transaction.amount)).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-600 capitalize">{transaction.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">No investment activity yet</p>
                    <Button onClick={() => navigate('/start-investing')}>
                      Start Investing
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Investment Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-start"
                    onClick={() => navigate('/start-investing')}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Start Investing
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/wealth/portfolio-options')}
                  >
                    <PieChart className="h-4 w-4 mr-2" />
                    View Portfolios
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/wealth/portfolio-analysis')}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Portfolio Analysis
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/schedule-consultation')}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Performance Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">1 Month</span>
                    <span className="font-semibold text-green-600">+0.00%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">3 Months</span>
                    <span className="font-semibold text-green-600">+0.00%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">1 Year</span>
                    <span className="font-semibold text-green-600">+0.00%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">All Time</span>
                    <span className="font-semibold text-green-600">+0.00%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InvestmentAccountPage;
