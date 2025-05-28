
import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useBills } from '@/hooks/useBills';

const UpcomingBills = () => {
  const { bills, loading } = useBills();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Upcoming Bills</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-500">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  const upcomingBills = bills
    .filter(bill => !bill.is_paid)
    .sort((a, b) => new Date(a.due_date).getTime() - new Date(b.due_date).getTime())
    .slice(0, 3);

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span>Upcoming Bills</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingBills.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No upcoming bills</p>
            </div>
          ) : (
            upcomingBills.map((bill) => {
              const daysUntilDue = getDaysUntilDue(bill.due_date);
              const isUrgent = daysUntilDue <= 3;
              
              return (
                <div 
                  key={bill.id}
                  className={`flex items-center justify-between p-2 rounded-md border ${
                    isUrgent ? 'bg-yellow-50 border-yellow-200' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    {isUrgent ? (
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                    ) : (
                      <Calendar className="h-4 w-4 text-blue-600" />
                    )}
                    <div>
                      <p className="text-sm font-medium">{bill.bill_name}</p>
                      <p className="text-xs text-gray-600">
                        {daysUntilDue > 0 ? `Due in ${daysUntilDue} days` : 
                         daysUntilDue === 0 ? 'Due today' : 
                         `Overdue by ${Math.abs(daysUntilDue)} days`}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold">${bill.amount.toFixed(2)}</span>
                </div>
              );
            })
          )}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Bills
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpcomingBills;
