
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Target, Plus } from 'lucide-react';
import { useBudgets } from '@/hooks/useBudgets';
import { useToast } from '@/hooks/use-toast';

const ManageBudget = () => {
  const navigate = useNavigate();
  const { budgets, loading } = useBudgets();
  const { toast } = useToast();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBudget, setNewBudget] = useState({
    category: '',
    monthlyLimit: '',
  });

  const handleAddBudget = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newBudget.category || !newBudget.monthlyLimit) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    // Here you would implement the actual budget creation logic
    toast({
      title: "Success",
      description: `Budget for ${newBudget.category} created successfully`,
    });

    setNewBudget({ category: '', monthlyLimit: '' });
    setShowAddForm(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/user-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Manage Budget</h1>
              <p className="text-gray-600 mt-2">Track and manage your spending categories</p>
            </div>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Budget
            </Button>
          </div>
        </div>

        {showAddForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Add New Budget Category</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddBudget} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      placeholder="e.g., Groceries, Entertainment"
                      value={newBudget.category}
                      onChange={(e) => setNewBudget(prev => ({ ...prev, category: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="monthlyLimit">Monthly Limit</Label>
                    <Input
                      id="monthlyLimit"
                      type="number"
                      placeholder="0.00"
                      value={newBudget.monthlyLimit}
                      onChange={(e) => setNewBudget(prev => ({ ...prev, monthlyLimit: e.target.value }))}
                      step="0.01"
                      min="0.01"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button type="submit">Add Budget</Button>
                  <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {budgets?.map((budget) => {
            const percentage = (budget.current_spent / budget.monthly_limit) * 100;
            const isOverBudget = percentage > 100;
            const remaining = budget.monthly_limit - budget.current_spent;
            
            return (
              <Card key={budget.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{budget.category}</span>
                    <Target className="h-5 w-5" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Spent</span>
                        <span>${budget.current_spent.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Budget</span>
                        <span>${budget.monthly_limit.toFixed(2)}</span>
                      </div>
                      <Progress 
                        value={Math.min(percentage, 100)} 
                        className={`h-2 ${isOverBudget ? 'bg-red-200' : ''}`}
                      />
                      <div className="flex justify-between text-sm mt-2">
                        <span className={isOverBudget ? 'text-red-600' : 'text-green-600'}>
                          {isOverBudget ? 'Over budget' : 'Remaining'}
                        </span>
                        <span className={isOverBudget ? 'text-red-600' : 'text-green-600'}>
                          ${Math.abs(remaining).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {budgets?.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Target className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No budgets set up yet</h3>
              <p className="text-gray-600 mb-4">Create your first budget to start tracking your spending</p>
              <Button onClick={() => setShowAddForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Budget
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ManageBudget;
