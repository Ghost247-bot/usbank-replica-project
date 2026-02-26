
import React from 'react';
import { Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNotifications } from '@/hooks/useNotifications';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const AlertsNotifications = () => {
  const { notifications, loading } = useNotifications();
  const navigate = useNavigate();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span>Alerts & Notifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-500">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  const recentNotifications = notifications?.slice(0, 3) || [];
  const unreadCount = notifications?.filter(n => !n.is_read).length || 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span>Alerts & Notifications</span>
          </div>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="text-xs">
              {unreadCount}
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentNotifications.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No new notifications</p>
            </div>
          ) : (
            recentNotifications.map((notification) => (
              <div key={notification.id} className={`p-2 rounded ${!notification.is_read ? 'bg-blue-50' : ''}`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{notification.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {format(new Date(notification.created_at), 'MMM dd, HH:mm')}
                    </p>
                  </div>
                  {!notification.is_read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1"></div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={() => navigate('/manage-notifications')}
        >
          Manage Notifications
        </Button>
      </CardContent>
    </Card>
  );
};

export default AlertsNotifications;
