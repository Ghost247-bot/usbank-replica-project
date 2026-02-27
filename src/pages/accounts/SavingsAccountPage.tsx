
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, ArrowUpRight, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useBankingData } from '@/hooks/useBankingData';

const SavingsAccountPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { accounts, transactions, isLoading } = useBankingData();

  const savingsAccount = accounts.find(acc => acc.account_type === 'savings');
  const savingsTransactions = transactions.filter(t => t.account_id === savingsAccount?.id).slice(0, 10);

  // Mock interest rate - in a real app this would come from the database
  const interestRate = 1.5;
  const monthlyInterest = savingsAccount ? (Number(savingsAccount.balance) * interestRate / 100) / 12 : 0;

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
          
          <h1 className="text-3xl font-bold text-gray-900">Savings Account</h1>
          <p className="text-gray-600 mt-2">
            Grow your money with competitive interest rates
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Account Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Current Balance</p>
                    <p className="text-3xl font-bold text-gray-900">
                      ${Number(savingsAccount?.balance || 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Interest Rate</p>
                      <p className="text-lg font-semibold text-green-600">{interestRate}% APY</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Monthly Interest</p>
                      <p className="text-lg font-semibold text-green-600">${monthlyInterest.toFixed(2)}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Account Number</p>
                    <p className="text-lg font-semibold">{savingsAccount?.account_number || 'Not available'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Account Status</p>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      savingsAccount?.is_frozen ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {savingsAccount?.is_frozen ? 'Frozen' : 'Active'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                {savingsTransactions.length > 0 ? (
                  <div className="space-y-4">
                    {savingsTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <p className="font-medium">{transaction.description || 'Transaction'}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(transaction.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${
                            transaction.transaction_type === 'deposit' || transaction.transaction_type === 'interest' 
                              ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {(transaction.transaction_type === 'deposit' || transaction.transaction_type === 'interest') ? '+' : '-'}
                            ${Math.abs(Number(transaction.amount)).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-600 capitalize">{transaction.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">No transactions found</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-start"
                    onClick={() => navigate('/transfer-money')}
                  >
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                    Transfer to Savings
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/view-all-transactions')}
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Growth History
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/deposit-check')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Deposit Check
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Interest Info */}
            <Card>
              <CardHeader>
                <CardTitle>Interest Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Rate</span>
                    <span className="font-semibold">{interestRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Compounding</span>
                    <span className="font-semibold">Monthly</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Next Interest Date</span>
                    <span className="font-semibold">
                      {new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toLocaleDateString()}
                    </span>
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

export default SavingsAccountPage;
