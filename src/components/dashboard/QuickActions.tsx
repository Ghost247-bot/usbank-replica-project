
import React from 'react';
import { ArrowUpRight, Download, CreditCard, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button className="h-20 flex flex-col items-center justify-center space-y-2">
            <ArrowUpRight className="h-5 w-5" />
            <span className="text-sm">Transfer Money</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
            <Download className="h-5 w-5" />
            <span className="text-sm">Pay Bills</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
            <CreditCard className="h-5 w-5" />
            <span className="text-sm">Deposit Check</span>
          </Button>
          <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
            <Settings className="h-5 w-5" />
            <span className="text-sm">Account Settings</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
