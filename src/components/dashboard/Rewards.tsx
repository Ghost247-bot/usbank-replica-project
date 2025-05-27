
import React from 'react';
import { Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Rewards = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Gift className="h-5 w-5" />
          <span>Rewards</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">$24.50</div>
          <p className="text-sm text-gray-600 mb-4">Available Cashback</p>
          <Button size="sm" className="w-full">
            Redeem Rewards
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Rewards;
