
import React from 'react';
import { Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNotifications } from '@/hooks/useNotifications';

const AlertsNotifications = () => {
  const { notifications, loading, markAsRead } = useNotifications();

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

  const recentNotifications = notifications.slice(0, 3);

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'info':
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  const handleNotificationClick = (notification: any) => {
    if (!notification.is_read) {
      markAsRead(notification.id);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Alerts & Notifications</span>
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
              <div
                key={notification.id}
                className={`p-3 border rounded-md cursor-pointer ${getNotificationStyle(notification.type)} ${
                  !notification.is_read ? 'border-l-4' : ''
                }`}
                onClick={() => handleNotificationClick(notification)}
              >
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-sm">{notification.message}</p>
                {!notification.is_read && (
                  <div className="mt-1">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        <Button variant="outline" className="w-full mt-4">
          Manage Notifications
        </Button>
      </CardContent>
    </Card>
  );
};

export default AlertsNotifications;
