
import React from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useBills } from '@/hooks/useBankingData';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const UpcomingBills = () => {
  const { data: bills, isLoading } = useBills();
  const navigate = useNavigate();

  if (isLoading) {
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

  const upcomingBills = bills?.filter(bill => bill.status !== 'paid').slice(0, 3) || [];

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
            upcomingBills.map((bill) => (
              <div key={bill.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">{bill.bill_name}</p>
                  <p className="text-xs text-gray-600">
                    Due {format(new Date(bill.due_date), 'MMM dd')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${Number(bill.amount).toFixed(2)}</p>
                  {bill.category && (
                    <Badge variant="secondary" className="text-xs">
                      {bill.category}
                    </Badge>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={() => navigate('/view-all-bills')}
        >
          View All Bills
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpcomingBills;
