
import React from 'react';
import { Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FinancialGoals = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="h-5 w-5" />
          <span>Financial Goals</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Emergency Fund</span>
              <span className="text-sm text-gray-600">$5,200 / $10,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '52%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Vacation Fund</span>
              <span className="text-sm text-gray-600">$1,800 / $5,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '36%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Car Down Payment</span>
              <span className="text-sm text-gray-600">$3,500 / $8,000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '44%' }}></div>
            </div>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Goals
        </Button>
      </CardContent>
    </Card>
  );
};

export default FinancialGoals;
