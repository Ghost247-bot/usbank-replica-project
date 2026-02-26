import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';
import { useTransactions } from '@/hooks/useBankingData';
import { format } from 'date-fns';

const MonthlySpendingTrend = () => {
  const { data: transactions, isLoading } = useTransactions();

  // Process transactions to get monthly trends
  const monthlyTrends = React.useMemo(() => {
    if (!transactions || transactions.length === 0) return [];

    const monthlyData: Record<string, { income: number; expenses: number; savings: number }> = {};
    
    // Get last 6 months
    const currentDate = new Date();
    for (let i = 5; i >= 0; i--) {
      const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const monthKey = format(monthDate, 'MMM yyyy');
      monthlyData[monthKey] = { income: 0, expenses: 0, savings: 0 };
    }

    // Process transactions
    transactions.forEach(transaction => {
      if (transaction.status !== 'completed') return;
      
      const transactionDate = new Date(transaction.created_at);
      const monthKey = format(transactionDate, 'MMM yyyy');
      
      if (monthlyData[monthKey]) {
        const amount = Number(transaction.amount || 0);
        
        if (transaction.direction === 'credit') {
          monthlyData[monthKey].income += amount;
        } else {
          monthlyData[monthKey].expenses += Math.abs(amount);
        }
      }
    });

    // Calculate savings and convert to array
    return Object.entries(monthlyData).map(([month, data]) => ({
      month,
      income: data.income,
      expenses: data.expenses,
      savings: Math.max(0, data.income - data.expenses)
    }));
  }, [transactions]);

  if (isLoading) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Monthly Spending Trend</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!monthlyTrends || monthlyTrends.length === 0) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Monthly Spending Trend</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">No trend data available</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5" />
          <span>Monthly Spending Trend</span>
        </CardTitle>
        <CardDescription>Your spending patterns over the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value: number) => [`$${value.toFixed(2)}`, '']}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
              <Bar dataKey="income" fill="#10b981" name="Income" />
              <Bar dataKey="savings" fill="#3b82f6" name="Savings" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlySpendingTrend;
