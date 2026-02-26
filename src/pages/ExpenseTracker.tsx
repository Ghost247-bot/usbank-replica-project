import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Trash2, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
}

const ExpenseTracker = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: '1',
      description: 'Grocery Shopping',
      amount: 125.50,
      category: 'Food & Dining',
      date: '2026-02-25'
    },
    {
      id: '2',
      description: 'Gas Station',
      amount: 45.00,
      category: 'Transportation',
      date: '2026-02-24'
    },
    {
      id: '3',
      description: 'Netflix Subscription',
      amount: 15.99,
      category: 'Entertainment',
      date: '2026-02-23'
    }
  ]);
  
  const [newExpense, setNewExpense] = useState({
    description: '',
    amount: '',
    category: '',
    date: new Date().toISOString().split('T')[0]
  });

  const categories = [
    'Food & Dining',
    'Transportation',
    'Shopping',
    'Entertainment',
    'Bills & Utilities',
    'Healthcare',
    'Education',
    'Travel',
    'Other'
  ];

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const addExpense = () => {
    if (newExpense.description && newExpense.amount && newExpense.category) {
      const expense: Expense = {
        id: Date.now().toString(),
        description: newExpense.description,
        amount: parseFloat(newExpense.amount),
        category: newExpense.category,
        date: newExpense.date
      };
      
      setExpenses([expense, ...expenses]);
      setNewExpense({
        description: '',
        amount: '',
        category: '',
        date: new Date().toISOString().split('T')[0]
      });
    }
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900">Expense Tracker</h1>
          <p className="text-gray-600 mt-2">Track and categorize your daily expenses</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Expense Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2" />
                  Add New Expense
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                    placeholder="Enter expense description"
                  />
                </div>
                
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={newExpense.category} onValueChange={(value) => setNewExpense({...newExpense, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newExpense.date}
                    onChange={(e) => setNewExpense({...newExpense, date: e.target.value})}
                  />
                </div>
                
                <Button onClick={addExpense} className="w-full">
                  Add Expense
                </Button>
              </CardContent>
            </Card>

            {/* Summary */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Expenses:</span>
                    <Badge variant="destructive" className="text-lg">
                      ${totalExpenses.toFixed(2)}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <h4 className="font-medium">By Category:</h4>
                    {Object.entries(categoryTotals).map(([category, total]) => (
                      <div key={category} className="flex justify-between items-center">
                        <span className="text-sm">{category}:</span>
                        <span className="text-sm font-medium">${total.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expenses List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expenses.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No expenses recorded yet</p>
                  ) : (
                    expenses.map((expense) => (
                      <div key={expense.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{expense.description}</div>
                          <div className="text-sm text-gray-500">{expense.category} • {expense.date}</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="destructive">
                            ${expense.amount.toFixed(2)}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteExpense(expense.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExpenseTracker;
