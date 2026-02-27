
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, DollarSign, Calendar, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useBankingData } from '@/hooks/useBankingData';

const CreditCardPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { creditCards, isLoading } = useBankingData();

  const primaryCard = creditCards[0]; // Get the first credit card

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
          
          <h1 className="text-3xl font-bold text-gray-900">Credit Card</h1>
          <p className="text-gray-600 mt-2">
            Manage your credit card account and payments
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Credit Card Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {primaryCard ? (
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Current Balance</p>
                      <p className="text-3xl font-bold text-gray-900">
                        ${Number(primaryCard.current_balance).toFixed(2)}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Credit Limit</p>
                        <p className="text-lg font-semibold">${Number(primaryCard.credit_limit).toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Available Credit</p>
                        <p className="text-lg font-semibold text-green-600">
                          ${(Number(primaryCard.credit_limit) - Number(primaryCard.current_balance)).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Card Number</p>
                        <p className="text-lg font-semibold">****{primaryCard.card_number.slice(-4)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Card Type</p>
                        <p className="text-lg font-semibold">{primaryCard.card_type}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Interest Rate</p>
                        <p className="text-lg font-semibold">{Number(primaryCard.interest_rate).toFixed(2)}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Status</p>
                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          primaryCard.is_frozen ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {primaryCard.is_frozen ? 'Frozen' : 'Active'}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CreditCard className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">No credit card found</p>
                    <Button onClick={() => navigate('/personal/credit-cards')}>
                      Apply for Credit Card
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Information */}
            {primaryCard && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Minimum Payment</p>
                        <p className="text-lg font-semibold">
                          ${Math.max(25, Number(primaryCard.current_balance) * 0.02).toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Payment Due Date</p>
                        <p className="text-lg font-semibold">
                          {new Date(new Date().setDate(new Date().getDate() + 15)).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Last Payment</p>
                        <p className="text-lg font-semibold">$0.00</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Last Payment Date</p>
                        <p className="text-lg font-semibold">N/A</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500">No recent transactions</p>
                </div>
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
                    onClick={() => navigate('/pay-bills')}
                  >
                    <DollarSign className="h-4 w-4 mr-2" />
                    Make Payment
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/view-all-transactions')}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    View Statements
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/account-settings')}
                  >
                    <Shield className="h-4 w-4 mr-2" />
                    Card Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => navigate('/contact-us')}
                  >
                    Report Lost/Stolen
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Credit Utilization */}
            {primaryCard && (
              <Card>
                <CardHeader>
                  <CardTitle>Credit Utilization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current Utilization</span>
                      <span className="font-semibold">
                        {((Number(primaryCard.current_balance) / Number(primaryCard.credit_limit)) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ 
                          width: `${Math.min(100, (Number(primaryCard.current_balance) / Number(primaryCard.credit_limit)) * 100)}%` 
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-600">
                      Keep utilization below 30% for optimal credit score impact
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Card Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Card Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Fraud Protection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Zero Liability</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Travel Insurance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Purchase Protection</span>
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

export default CreditCardPage;
