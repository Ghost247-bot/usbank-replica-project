
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNotificationManagement } from './notifications/useNotificationManagement';
import SendNotificationDialog from './notifications/SendNotificationDialog';
import NotificationList from './notifications/NotificationList';

const NotificationManagement = () => {
  const { notifications, users, loading, sendNotification } = useNotificationManagement();

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Notification Management</CardTitle>
            <CardDescription>Send notifications to users</CardDescription>
          </div>
          <SendNotificationDialog
            users={users}
            loading={loading}
            onSendNotification={sendNotification}
          />
        </div>
      </CardHeader>
      <CardContent>
        <NotificationList notifications={notifications} />
      </CardContent>
    </Card>
  );
};

export default NotificationManagement;
