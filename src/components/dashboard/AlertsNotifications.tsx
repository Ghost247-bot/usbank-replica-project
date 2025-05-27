
import React from 'react';
import { Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AlertsNotifications = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Alerts & Notifications</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm font-medium text-blue-800">Payment Reminder</p>
            <p className="text-sm text-blue-600">Credit card payment due in 3 days</p>
          </div>
          <div className="p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-sm font-medium text-green-800">Direct Deposit</p>
            <p className="text-sm text-green-600">Salary deposited successfully</p>
          </div>
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm font-medium text-yellow-800">Budget Alert</p>
            <p className="text-sm text-yellow-600">You've exceeded your shopping budget</p>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4">
          Manage Notifications
        </Button>
      </CardContent>
    </Card>
  );
};

export default AlertsNotifications;
