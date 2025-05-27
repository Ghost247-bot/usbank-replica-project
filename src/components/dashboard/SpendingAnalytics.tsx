
import React from 'react';
import { PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart as RechartsPieChart, Cell, ResponsiveContainer, Tooltip, Pie } from 'recharts';

const SpendingAnalytics = () => {
  const spendingData = [
    { name: 'Groceries', value: 450, color: '#3B82F6' },
    { name: 'Gas', value: 200, color: '#EF4444' },
    { name: 'Entertainment', value: 150, color: '#10B981' },
    { name: 'Shopping', value: 300, color: '#F59E0B' },
    { name: 'Dining', value: 180, color: '#8B5CF6' },
  ];

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <PieChart className="h-5 w-5" />
          <span>Spending Analytics</span>
        </CardTitle>
        <CardDescription>Your spending breakdown for this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={spendingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {spendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {spendingData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <span className="text-sm font-semibold">${item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingAnalytics;
