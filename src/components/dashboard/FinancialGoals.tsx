
import React from 'react';
import { Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useFinancialGoals } from '@/hooks/useFinancialGoals';
import { useNavigate } from 'react-router-dom';

const FinancialGoals = () => {
  const { goals, loading } = useFinancialGoals();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Financial Goals</span>
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
          <span>Financial Goals</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No financial goals set</p>
            </div>
          ) : (
            goals.slice(0, 3).map((goal) => {
              const percentage = (goal.current_amount / goal.target_amount) * 100;
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500'];
              const colorIndex = Math.floor(Math.random() * colors.length);
              
              return (
                <div key={goal.id}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{goal.goal_name}</span>
                    <span className="text-sm text-gray-600">
                      ${goal.current_amount.toFixed(0)} / ${goal.target_amount.toFixed(0)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${colors[colorIndex]}`}
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
          onClick={() => navigate('/view-all-goals')}
        >
          View All Goals
        </Button>
      </CardContent>
    </Card>
  );
};

export default FinancialGoals;
