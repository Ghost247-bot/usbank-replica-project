
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RecentActivity {
  id: string;
  type: string;
  description: string;
  time: string;
}

interface RecentActivityCardProps {
  activities: RecentActivity[];
  loading: boolean;
}

const RecentActivityCard = ({ activities, loading }: RecentActivityCardProps) => {
  const getActivityColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'deposit': return 'bg-green-50';
      case 'withdrawal': return 'bg-red-50';
      case 'transfer': return 'bg-blue-50';
      case 'payment': return 'bg-purple-50';
      default: return 'bg-gray-50';
    }
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Loading...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="p-3 bg-gray-100 rounded-md animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest transactions and activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.length > 0 ? (
            activities.map((activity) => (
              <div key={activity.id} className={`flex items-center justify-between p-3 rounded-md ${getActivityColor(activity.type)}`}>
                <div>
                  <p className="font-medium capitalize">{activity.type}</p>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">No recent activity</p>
          )}
          <Button variant="outline" className="w-full mt-4">
            View All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
