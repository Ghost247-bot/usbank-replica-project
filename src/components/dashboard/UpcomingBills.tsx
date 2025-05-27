
import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const UpcomingBills = () => {
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
          <div className="flex items-center justify-between p-2 bg-yellow-50 border border-yellow-200 rounded-md">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <div>
                <p className="text-sm font-medium">Credit Card</p>
                <p className="text-xs text-gray-600">Due in 3 days</p>
              </div>
            </div>
            <span className="text-sm font-semibold">$842.15</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-blue-50 border border-blue-200 rounded-md">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm font-medium">Internet</p>
                <p className="text-xs text-gray-600">Due in 5 days</p>
              </div>
            </div>
            <span className="text-sm font-semibold">$79.99</span>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Bills
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpcomingBills;
