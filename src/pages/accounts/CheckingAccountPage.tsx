
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Download, ArrowUpRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useBankingData } from '@/hooks/useBankingData';

const CheckingAccountPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { accounts, transactions, isLoading } = useBankingData();

  const checkingAccount = accounts.find(acc => acc.account_type === 'checking');
  const checkingTransactions = transactions.filter(t => t.account_id === checkingAccount?.id).slice(0, 10);

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
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900">Checking Account</h1>
          <p className="text-gray-600 mt-2">
            Manage your everyday banking needs
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
                    <p className="text-sm text-gray-600">Available Balance</p>
                    <p className="text-3xl font-bold text-gray-900">
                      ${Number(checkingAccount?.balance || 0).toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Account Number</p>
                    <p className="text-lg font-semibold">{checkingAccount?.account_number || 'Not available'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Account Status</p>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      checkingAccount?.is_frozen ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {checkingAccount?.is_frozen ? 'Frozen' : 'Active'}
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
                {checkingTransactions.length > 0 ? (
                  <div className="space-y-4">
                    {checkingTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <p className="font-medium">{transaction.description || 'Transaction'}</p>
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
                    Transfer Money
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/pay-bills')}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay Bills
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/deposit-check')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Deposit Check
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/view-all-transactions')}
                  >
                    View All Transactions
                  </Button>
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

export default CheckingAccountPage;
