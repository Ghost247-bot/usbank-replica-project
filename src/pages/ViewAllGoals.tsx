
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Target, Plus, Calendar } from 'lucide-react';
import { useFinancialGoals } from '@/hooks/useFinancialGoals';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

const ViewAllGoals = () => {
  const navigate = useNavigate();
  const { goals, loading } = useFinancialGoals();
  const { toast } = useToast();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    goalName: '',
    targetAmount: '',
    targetDate: '',
    goalType: '',
  });

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newGoal.goalName || !newGoal.targetAmount || !newGoal.goalType) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields",
      });
      return;
    }

    // Here you would implement the actual goal creation logic
    toast({
      title: "Success",
      description: `Goal "${newGoal.goalName}" created successfully`,
    });

    setNewGoal({ goalName: '', targetAmount: '', targetDate: '', goalType: '' });
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
              <h1 className="text-3xl font-bold text-gray-900">Financial Goals</h1>
              <p className="text-gray-600 mt-2">Track your progress towards your financial objectives</p>
            </div>
            <Button onClick={() => setShowAddForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Goal
            </Button>
          </div>
        </div>

        {showAddForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Add New Financial Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddGoal} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="goalName">Goal Name</Label>
                    <Input
                      id="goalName"
                      placeholder="e.g., Emergency Fund, Vacation"
                      value={newGoal.goalName}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, goalName: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="goalType">Goal Type</Label>
                    <Input
                      id="goalType"
                      placeholder="e.g., Savings, Investment"
                      value={newGoal.goalType}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, goalType: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="targetAmount">Target Amount</Label>
                    <Input
                      id="targetAmount"
                      type="number"
                      placeholder="0.00"
                      value={newGoal.targetAmount}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, targetAmount: e.target.value }))}
                      step="0.01"
                      min="0.01"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="targetDate">Target Date (Optional)</Label>
                    <Input
                      id="targetDate"
                      type="date"
                      value={newGoal.targetDate}
                      onChange={(e) => setNewGoal(prev => ({ ...prev, targetDate: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button type="submit">Add Goal</Button>
                  <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals?.map((goal) => {
            const percentage = (goal.current_amount / goal.target_amount) * 100;
            const remaining = goal.target_amount - goal.current_amount;
            
            return (
              <Card key={goal.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{goal.goal_name}</span>
                    <Target className="h-5 w-5" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{goal.goal_type}</span>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Current</span>
                        <span>${goal.current_amount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Target</span>
                        <span>${goal.target_amount.toFixed(2)}</span>
                      </div>
                      <Progress value={Math.min(percentage, 100)} className="h-2" />
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-gray-600">
                          {percentage.toFixed(1)}% complete
                        </span>
                        <span className="text-gray-600">
                          ${remaining.toFixed(2)} to go
                        </span>
                      </div>
                    </div>

                    {goal.target_date && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-3 w-3 mr-1" />
                        Target: {format(new Date(goal.target_date), 'MMM dd, yyyy')}
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Add Money
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {goals?.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Target className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No financial goals yet</h3>
              <p className="text-gray-600 mb-4">Create your first goal to start tracking your progress</p>
              <Button onClick={() => setShowAddForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Goal
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ViewAllGoals;
