
import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const RecentTransactions = () => {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest account activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-full">
                <ArrowDownRight className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="font-medium">Grocery Store</p>
                <p className="text-sm text-gray-600">Yesterday</p>
              </div>
            </div>
            <span className="text-red-600 font-semibold">-$87.32</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <ArrowUpRight className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="font-medium">Salary Deposit</p>
                <p className="text-sm text-gray-600">2 days ago</p>
              </div>
            </div>
            <span className="text-green-600 font-semibold">+$3,200.00</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-full">
                <ArrowDownRight className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="font-medium">Electric Bill</p>
                <p className="text-sm text-gray-600">3 days ago</p>
              </div>
            </div>
            <span className="text-red-600 font-semibold">-$142.68</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 p-2 rounded-full">
                <ArrowDownRight className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <p className="font-medium">Online Purchase</p>
                <p className="text-sm text-gray-600">4 days ago</p>
              </div>
            </div>
            <span className="text-red-600 font-semibold">-$59.99</span>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Transactions
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
