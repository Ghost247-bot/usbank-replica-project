
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, DollarSign } from 'lucide-react';
import { useBills } from '@/hooks/useBills';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const PayBills = () => {
  const navigate = useNavigate();
  const { bills, loading } = useBills();
  const { toast } = useToast();
  const [payingBills, setPayingBills] = useState<Set<string>>(new Set());

  const handlePayBill = async (billId: string) => {
    setPayingBills(prev => new Set(prev).add(billId));
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Bill payment processed successfully",
      });
      setPayingBills(prev => {
        const newSet = new Set(prev);
        newSet.delete(billId);
        return newSet;
      });
    }, 2000);
  };

  const upcomingBills = bills?.filter(bill => !bill.is_paid) || [];
  const paidBills = bills?.filter(bill => bill.is_paid) || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/user-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Pay Bills</h1>
          <p className="text-gray-600 mt-2">Manage and pay your upcoming bills</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Bills */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingBills.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No upcoming bills</p>
                ) : (
                  upcomingBills.map((bill) => (
                    <div key={bill.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold">{bill.bill_name}</h3>
                          {bill.category && (
                            <Badge variant="secondary" className="mt-1">
                              {bill.category}
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-lg font-semibold">
                            <DollarSign className="h-4 w-4" />
                            {Number(bill.amount).toFixed(2)}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-3 w-3 mr-1" />
                            Due {format(new Date(bill.due_date), 'MMM dd')}
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => handlePayBill(bill.id)}
                        disabled={payingBills.has(bill.id)}
                        className="w-full"
                      >
                        {payingBills.has(bill.id) ? 'Processing...' : 'Pay Now'}
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Paid Bills */}
          <Card>
            <CardHeader>
              <CardTitle>Recently Paid</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paidBills.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No paid bills</p>
                ) : (
                  paidBills.slice(0, 5).map((bill) => (
                    <div key={bill.id} className="border rounded-lg p-4 bg-green-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold">{bill.bill_name}</h3>
                          {bill.category && (
                            <Badge variant="secondary" className="mt-1">
                              {bill.category}
                            </Badge>
                          )}
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-lg font-semibold">
                            <DollarSign className="h-4 w-4" />
                            {Number(bill.amount).toFixed(2)}
                          </div>
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            Paid
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PayBills;
