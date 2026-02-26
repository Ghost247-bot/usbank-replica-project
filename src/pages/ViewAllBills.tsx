
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Calendar, DollarSign, Plus } from 'lucide-react';
import { useBills } from '@/hooks/useBills';
import { format } from 'date-fns';

const ViewAllBills = () => {
  const navigate = useNavigate();
  const { bills, loading } = useBills();

  const upcomingBills = bills?.filter(bill => !bill.is_paid) || [];
  const paidBills = bills?.filter(bill => bill.is_paid) || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const BillCard = ({ bill, isPaid = false }: { bill: any; isPaid?: boolean }) => (
    <Card key={bill.id}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-semibold">{bill.bill_name}</h3>
            {bill.category && (
              <Badge variant="secondary" className="mt-1">
                {bill.category}
              </Badge>
            )}
            <div className="flex items-center text-sm text-gray-600 mt-1">
              <span className="capitalize">{bill.frequency}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-lg font-semibold">
              <DollarSign className="h-4 w-4" />
              {Number(bill.amount).toFixed(2)}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-3 w-3 mr-1" />
              {isPaid ? 'Paid' : `Due ${format(new Date(bill.due_date), 'MMM dd')}`}
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          {!isPaid && (
            <Button size="sm" className="flex-1">
              Pay Now
            </Button>
          )}
          <Button variant="outline" size="sm" className="flex-1">
            Edit
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );

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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">All Bills</h1>
              <p className="text-gray-600 mt-2">Manage all your bills and payment history</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Bill
            </Button>
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList>
            <TabsTrigger value="upcoming">
              Upcoming Bills ({upcomingBills.length})
            </TabsTrigger>
            <TabsTrigger value="paid">
              Paid Bills ({paidBills.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            {upcomingBills.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No upcoming bills</h3>
                  <p className="text-gray-600 mb-4">All your bills are up to date!</p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Bill
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingBills.map((bill) => (
                  <BillCard key={bill.id} bill={bill} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="paid">
            {paidBills.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No paid bills</h3>
                  <p className="text-gray-600">Your payment history will appear here</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {paidBills.map((bill) => (
                  <BillCard key={bill.id} bill={bill} isPaid />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ViewAllBills;
