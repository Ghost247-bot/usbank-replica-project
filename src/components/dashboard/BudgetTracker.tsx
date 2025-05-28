
import React from 'react';
import { Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useBudgets } from '@/hooks/useBudgets';
import { useNavigate } from 'react-router-dom';

const BudgetTracker = () => {
  const { budgets, loading } = useBudgets();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Budget Tracker</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-500">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Target className="h-5 w-5" />
          <span>Budget Tracker</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {budgets.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No budgets set up yet</p>
            </div>
          ) : (
            budgets.slice(0, 3).map((budget) => {
              const percentage = (budget.current_spent / budget.monthly_limit) * 100;
              const isOverBudget = percentage > 100;
              
              return (
                <div key={budget.id}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{budget.category}</span>
                    <span className={`text-sm ${isOverBudget ? 'text-red-600' : 'text-gray-600'}`}>
                      ${budget.current_spent.toFixed(2)} / ${budget.monthly_limit.toFixed(2)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        isOverBudget ? 'bg-red-500' : 
                        percentage > 80 ? 'bg-yellow-500' : 
                        'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={() => navigate('/manage-budget')}
        >
          Manage Budget
        </Button>
      </CardContent>
    </Card>
  );
};

export default BudgetTracker;
