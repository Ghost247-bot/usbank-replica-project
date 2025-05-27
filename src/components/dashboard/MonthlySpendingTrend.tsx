
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MonthlySpendingTrend = () => {
  const monthlySpendingData = [
    { month: 'Jan', amount: 2100 },
    { month: 'Feb', amount: 1850 },
    { month: 'Mar', amount: 2300 },
    { month: 'Apr', amount: 1950 },
    { month: 'May', amount: 2400 },
    { month: 'Jun', amount: 1280 },
  ];

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Monthly Spending Trend</CardTitle>
        <CardDescription>Your spending patterns over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlySpendingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
              <Bar dataKey="amount" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlySpendingTrend;
