import React from 'react';
import { PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart as RechartsPieChart, Cell, ResponsiveContainer, Tooltip, Pie, Legend } from 'recharts';
import { useTransactions } from '@/hooks/useBankingData';
import { useAuth } from '@/hooks/useAuth';

const SpendingAnalytics = () => {
  const { user } = useAuth();
  const { data: transactions, isLoading } = useTransactions();

  // Process transactions to get spending by category
  const spendingByCategory = React.useMemo(() => {
    if (!transactions || transactions.length === 0) return [];

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    // Filter for current month's debit transactions
    const currentMonthTransactions = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.created_at);
      const isDebit = transaction.direction === 'debit' && transaction.status === 'completed';
      const isCurrentMonth = transactionDate.getMonth() === currentMonth && 
                            transactionDate.getFullYear() === currentYear;
      return isDebit && isCurrentMonth;
    });

    // Group by category and calculate totals
    const categoryTotals = currentMonthTransactions.reduce((acc, transaction) => {
      const category = transaction.category || 'Uncategorized';
      const amount = Math.abs(Number(transaction.amount || 0));
      
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += amount;
      return acc;
    }, {} as Record<string, number>);

    // Convert to array and calculate percentages
    const totalSpending = Object.values(categoryTotals).reduce((sum: number, amount: number) => sum + amount, 0);
    
    return Object.entries(categoryTotals).map(([category, amount]: [string, number]) => ({
      category,
      amount,
      percentage: (totalSpending as number) > 0 ? Math.round((amount / (totalSpending as number)) * 100) : 0
    })).sort((a, b) => (b.amount || 0) - (a.amount || 0));
  }, [transactions]);

  const COLORS = [
    '#3b82f6', // blue
    '#10b981', // green
    '#f59e0b', // yellow
    '#ef4444', // red
    '#8b5cf6', // purple
    '#6b7280', // gray
  ];

  if (isLoading) {
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
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!spendingByCategory || spendingByCategory.length === 0) {
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
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">No spending data available for this month</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const data = spendingByCategory.map((item, index) => ({
    name: item.category,
    value: item.amount,
    percentage: item.percentage
  }));

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
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`$${value.toFixed(2)}`, 'Amount']} />
                <Legend />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {data.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <span className="text-sm font-semibold">${typeof item.value === 'number' ? item.value.toFixed(2) : '0.00'}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingAnalytics;
