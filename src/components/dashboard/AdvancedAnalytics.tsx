import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  CreditCard, 
  PiggyBank, 
  Target,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTransactions, useAccounts, useBills } from '@/hooks/useBankingData';
import { useFinancialGoals } from '@/hooks/useFinancialGoals';
import { format } from 'date-fns';

const AdvancedAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const { data: transactions, isLoading: transactionsLoading } = useTransactions();
  const { data: accounts, isLoading: accountsLoading } = useAccounts();
  const { data: bills, isLoading: billsLoading } = useBills();
  const { goals } = useFinancialGoals();

  const isLoading = transactionsLoading || accountsLoading || billsLoading;

  // Process spending by category
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

  const spendingCategories = (spendingByCategory || []).map(cat => ({
    name: cat.category,
    amount: cat.amount,
    percentage: cat.percentage,
    color: cat.percentage > 20 ? 'bg-red-500' : cat.percentage > 10 ? 'bg-yellow-500' : 'bg-green-500'
  }));

  // Process monthly trends
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

  const monthlyTrend = monthlyTrends;

  // Process portfolio summary from accounts
  const investmentPortfolio = React.useMemo(() => {
    if (!accounts || accounts.length === 0) return [];

    const investmentAccounts = accounts.filter(account => account.account_type === 'investment');
    
    return investmentAccounts.map(account => ({
      name: account.name,
      value: Number(account.balance || 0),
      percentage: 100, // Single account = 100%
      change: 0 // No change data available yet
    }));
  }, [accounts]);

  const savingsGoals = (goals || []).map(goal => ({
    name: goal.goal_name,
    target: goal.target_amount,
    current: goal.current_amount || 0,
    percentage: Math.round((goal.current_amount || 0) / goal.target_amount * 100)
  }));

  // Calculate real metrics from data
  const totalBalance = accounts?.reduce((sum, account) => sum + Number(account.balance || 0), 0) || 0;
  const monthlyIncome = transactions?.filter(t => 
    t.direction === 'credit' && 
    t.status === 'completed' && 
    new Date(t.created_at).getMonth() === new Date().getMonth()
  ).reduce((sum, t) => sum + Number(t.amount || 0), 0) || 0;
  const monthlyExpenses = transactions?.filter(t => 
    t.direction === 'debit' && 
    t.status === 'completed' && 
    new Date(t.created_at).getMonth() === new Date().getMonth()
  ).reduce((sum, t) => sum + Math.abs(Number(t.amount || 0)), 0) || 0;
  const savingsRate = monthlyIncome > 0 ? Math.round(((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100) : 0;

  return (
    <div className="space-y-6">
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Balance</p>
                <p className="text-2xl font-bold">${totalBalance.toLocaleString()}</p>
                <div className="flex items-center mt-2 text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+8.3%</span>
                </div>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Income</p>
                <p className="text-2xl font-bold">${monthlyIncome.toLocaleString()}</p>
                <div className="flex items-center mt-2 text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">+2.1%</span>
                </div>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Expenses</p>
                <p className="text-2xl font-bold">${monthlyExpenses.toLocaleString()}</p>
                <div className="flex items-center mt-2 text-red-600">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span className="text-sm">-5.2%</span>
                </div>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <CreditCard className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Savings Rate</p>
                <p className="text-2xl font-bold">{savingsRate.toFixed(1)}%</p>
                <div className="flex items-center mt-2 text-green-600">
                  <PiggyBank className="h-4 w-4 mr-1" />
                  <span className="text-sm">On Target</span>
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="spending" className="space-y-6">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="savings">Savings Goals</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <TabsContent value="spending" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2" />
                  Spending by Category
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {spendingCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-sm">${category.amount.toLocaleString()}</span>
                    </div>
                    <Progress value={category.percentage} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{category.percentage}% of total</span>
                      <Badge variant="outline" className="text-xs">
                        {category.percentage > 20 ? 'High' : category.percentage > 10 ? 'Medium' : 'Low'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Budget Utilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold">75%</div>
                    <p className="text-sm text-gray-600">of monthly budget used</p>
                  </div>
                  <Progress value={75} className="h-4" />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600">Remaining</p>
                      <p className="text-lg font-semibold text-green-600">
                        $500
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Days Left</p>
                      <p className="text-lg font-semibold">12</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="investments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Investment Portfolio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {investmentPortfolio.map((investment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{investment.name}</h4>
                        <div className="text-right">
                          <p className="font-semibold">${investment.value.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">{investment.percentage}% of portfolio</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Progress value={investment.percentage} className="h-2" />
                      </div>
                    </div>
                    <div className="ml-4 text-right">
                      <Badge variant={investment.change > 0 ? "default" : "destructive"}>
                        {investment.change > 0 ? '+' : ''}{investment.change}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="savings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savingsGoals.map((goal, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{goal.name}</h4>
                      <Badge variant={goal.percentage >= 75 ? "default" : goal.percentage >= 50 ? "secondary" : "outline"}>
                        {goal.percentage}%
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}</span>
                      </div>
                      <Progress value={goal.percentage} className="h-2" />
                    </div>
                    <div className="text-sm text-gray-600">
                      ${goal.target - goal.current} remaining to goal
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Monthly Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyTrend.map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="font-medium">{month.month}</div>
                    <div className="grid grid-cols-3 gap-8 text-center">
                      <div>
                        <p className="text-sm text-gray-600">Income</p>
                        <p className="font-semibold text-green-600">${month.income.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Expenses</p>
                        <p className="font-semibold text-red-600">${month.expenses.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Savings</p>
                        <p className="font-semibold text-blue-600">${month.savings.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
        </>
      )}
    </div>
  );
};

export default AdvancedAnalytics;
