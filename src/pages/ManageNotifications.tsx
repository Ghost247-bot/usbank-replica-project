
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Bell, BellOff, Trash2 } from 'lucide-react';
import { useNotifications } from '@/hooks/useNotifications';
import { format } from 'date-fns';
import { logger } from '@/lib/logger';

const ManageNotifications = () => {
  const navigate = useNavigate();
  const { notifications, loading, markAsRead } = useNotifications();

  const unreadNotifications = notifications?.filter(notification => !notification.is_read) || [];
  const readNotifications = notifications?.filter(notification => notification.is_read) || [];

  const handleMarkAsRead = (id: string) => {
    markAsRead(id);
  };

  const handleDeleteNotification = (id: string) => {
    // Here you would implement the actual delete logic
    logger.debug('Delete notification:', id);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const NotificationCard = ({ notification, isRead = false }: { notification: any; isRead?: boolean }) => (
    <Card key={notification.id} className={`${!isRead ? 'border-blue-200 bg-blue-50' : ''}`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold">{notification.title}</h3>
              {!isRead && <Badge variant="default" className="text-xs">New</Badge>}
            </div>
            <p className="text-gray-700 text-sm mb-2">{notification.message}</p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span className="capitalize">{notification.type}</span>
              <span>{format(new Date(notification.created_at), 'MMM dd, yyyy HH:mm')}</span>
            </div>
          </div>
          <div className="flex space-x-2 ml-4">
            {!isRead && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleMarkAsRead(notification.id)}
              >
                <Bell className="h-3 w-3" />
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDeleteNotification(notification.id)}
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
              <p className="text-gray-600 mt-2">Manage your account alerts and notifications</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <BellOff className="h-4 w-4 mr-2" />
                Mark All Read
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="unread" className="space-y-6">
          <TabsList>
            <TabsTrigger value="unread">
              Unread ({unreadNotifications.length})
            </TabsTrigger>
            <TabsTrigger value="read">
              Read ({readNotifications.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="unread">
            {unreadNotifications.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Bell className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No unread notifications</h3>
                  <p className="text-gray-600">You're all caught up!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {unreadNotifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="read">
            {readNotifications.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <BellOff className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No read notifications</h3>
                  <p className="text-gray-600">Your read notifications will appear here</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {readNotifications.map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} isRead />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ManageNotifications;
