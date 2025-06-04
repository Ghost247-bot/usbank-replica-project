
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useBankingData } from '@/hooks/useBankingData';

const EscrowAccountPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { accounts, transactions, isLoading } = useBankingData();

  const escrowAccount = accounts.find(acc => acc.account_type === 'escrow');
  const escrowTransactions = transactions.filter(t => t.account_id === escrowAccount?.id).slice(0, 10);

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
          
          <h1 className="text-3xl font-bold text-gray-900">Escrow Account</h1>
          <p className="text-gray-600 mt-2">
            Secure funds held for property taxes and insurance
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Account Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Escrow Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Current Escrow Balance</p>
                    <p className="text-3xl font-bold text-gray-900">
                      ${Number(escrowAccount?.balance || 0).toFixed(2)}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Collection</p>
                      <p className="text-lg font-semibold">$0.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Annual Total</p>
                      <p className="text-lg font-semibold">$0.00</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Account Number</p>
                    <p className="text-lg font-semibold">{escrowAccount?.account_number || 'Not available'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Account Status</p>
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      escrowAccount?.is_frozen ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {escrowAccount?.is_frozen ? 'Frozen' : 'Active'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Escrow Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Escrow Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Property Taxes</p>
                        <p className="text-sm text-gray-600">Next payment: Dec 2024</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$0.00</p>
                      <p className="text-sm text-gray-600">Collected</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <p className="font-medium">Homeowners Insurance</p>
                        <p className="text-sm text-gray-600">Next payment: Annual</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$0.00</p>
                      <p className="text-sm text-gray-600">Collected</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-purple-600 mr-3" />
                      <div>
                        <p className="font-medium">PMI (if applicable)</p>
                        <p className="text-sm text-gray-600">Monthly payment</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">$0.00</p>
                      <p className="text-sm text-gray-600">Collected</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Escrow Activity</CardTitle>
              </CardHeader>
              <CardContent>
                {escrowTransactions.length > 0 ? (
                  <div className="space-y-4">
                    {escrowTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <p className="font-medium">{transaction.description || 'Escrow Transaction'}</p>
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
                  <p className="text-gray-500 text-center py-8">No escrow activity found</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Escrow Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    className="w-full justify-start"
                    onClick={() => navigate('/view-all-transactions')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View All Activity
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/contact-us')}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Escrow Analysis
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/contact-us')}
                  >
                    Contact Escrow Dept
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600">
                    Your escrow account collects funds monthly to pay your property taxes and insurance when they're due.
                  </p>
                  <p className="text-gray-600">
                    We conduct an annual escrow analysis to ensure proper funding levels.
                  </p>
                  <p className="text-gray-600">
                    Any surplus over $50 will be refunded, while shortages may result in payment adjustments.
                  </p>
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

export default EscrowAccountPage;
