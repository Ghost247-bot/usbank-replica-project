
import React from 'react';
import { Bell } from 'lucide-react';
import { Notification } from './types';

interface NotificationListProps {
  notifications: Notification[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  const getNotificationTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'error': return 'text-red-600 bg-red-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="space-y-4">
      {notifications.slice(0, 20).map((notification) => (
        <div key={notification.id} className="border rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <Bell className="h-4 w-4" />
                <h3 className="font-medium">{notification.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getNotificationTypeColor(notification.type)}`}>
                  {notification.type}
                </span>
                {notification.is_read ? (
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-600">
                    Read
                  </span>
                ) : (
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                    Unread
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
              <p className="text-xs text-gray-500">
                Sent: {new Date(notification.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
