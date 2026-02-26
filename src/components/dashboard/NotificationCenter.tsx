import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  Check, 
  X, 
  Trash2, 
  Filter,
  Search,
  ChevronDown,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
  ExternalLink,
  Clock,
  CreditCard,
  Shield,
  TrendingUp,
  Users,
  FileText,
  Smartphone,
  AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNotifications } from '@/hooks/useNotifications';
import { useToast } from '@/hooks/use-toast';

// Local interface matching the hook's return type
interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
  action_label?: string;
  action_url?: string;
  category?: string;
}

const NotificationCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { 
    notifications, 
    loading, 
    markAsRead, 
    deleteNotification, 
    markAllAsRead, 
    clearAll 
  } = useNotifications();

  const { toast } = useToast();

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'info': return <Info className="h-4 w-4 text-blue-500" />;
      default: return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return <Shield className="h-4 w-4" />;
      case 'transactions': return <CreditCard className="h-4 w-4" />;
      case 'account': return <Users className="h-4 w-4" />;
      case 'marketing': return <TrendingUp className="h-4 w-4" />;
      case 'system': return <FileText className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    return `${days} days ago`;
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      await markAsRead(id);
      toast({
        title: "Notification marked as read",
        description: "The notification has been marked as read."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to mark notification as read.",
        variant: "destructive"
      });
    }
  };

  const handleDeleteNotification = async (id: string) => {
    try {
      await deleteNotification(id);
      toast({
        title: "Notification deleted",
        description: "The notification has been deleted."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete notification.",
        variant: "destructive"
      });
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead();
      toast({
        title: "All notifications marked as read",
        description: "All notifications have been marked as read."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to mark all notifications as read.",
        variant: "destructive"
      });
    }
  };

  const handleClearAll = async () => {
    try {
      await clearAll();
      toast({
        title: "All notifications cleared",
        description: "All notifications have been cleared."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to clear notifications.",
        variant: "destructive"
      });
    }
  };

  const unreadCount = notifications.filter(n => !n.is_read).length;
  const notificationsByCategory = notifications.reduce((acc, notif) => {
    const category = notif.category || 'general';
    if (!acc[category]) acc[category] = [];
    acc[category].push(notif);
    return acc;
  }, {} as Record<string, Notification[]>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bell className="h-6 w-6" />
                {unreadCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {unreadCount}
                  </Badge>
                )}
              </div>
              <div>
                <CardTitle>Notifications</CardTitle>
                <p className="text-sm text-gray-600">
                  {unreadCount > 0 ? `${unreadCount} unread notifications` : 'All caught up!'}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleMarkAllAsRead}
                disabled={loading}
              >
                <Check className="h-4 w-4 mr-1" />
                Mark All Read
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleClearAll}
                disabled={loading}
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Clear All
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Notifications */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {notifications.length === 0 ? (
                <div className="text-center py-12">
                  <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification: Notification) => (
                  <Card key={notification.id} className={`transition-all hover:shadow-md ${!notification.is_read ? 'border-blue-200 bg-blue-50/50' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1">
                            {getIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium">{notification.title}</h4>
                              {!notification.is_read && (
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">New</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-xs text-gray-500">
                                {formatTimestamp(new Date(notification.created_at))}
                              </span>
                              {notification.category && (
                                <Badge variant="secondary" className="text-xs">
                                  {notification.category}
                                </Badge>
                              )}
                            </div>
                            {notification.action_label && (
                              <Button 
                                variant="link" 
                                className="p-0 h-auto text-blue-600 text-sm mt-2"
                                onClick={() => {
                                  if (notification.action_url) {
                                    window.location.href = notification.action_url;
                                  }
                                }}
                              >
                                {notification.action_label}
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </Button>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {!notification.is_read && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleMarkAsRead(notification.id)}
                            >
                              <Check className="h-4 w-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteNotification(notification.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <ScrollArea className="h-[600px]">
            <div className="space-y-4">
              {notifications.filter(n => !n.is_read).length === 0 ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-600">No unread notifications</p>
                </div>
              ) : (
                notifications.filter(n => !n.is_read).map((notification: Notification) => (
                  <Card key={notification.id} className="border-blue-200 bg-blue-50/50 transition-all hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1">
                            {getIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium">{notification.title}</h4>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">New</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="text-xs text-gray-500">
                                {formatTimestamp(new Date(notification.created_at))}
                              </span>
                              {notification.category && (
                                <Badge variant="secondary" className="text-xs">
                                  {notification.category}
                                </Badge>
                              )}
                            </div>
                            {notification.action_label && (
                              <Button 
                                variant="link" 
                                className="p-0 h-auto text-blue-600 text-sm mt-2"
                                onClick={() => {
                                  if (notification.action_url) {
                                    window.location.href = notification.action_url;
                                  }
                                }}
                              >
                                {notification.action_label}
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </Button>
                            )}
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMarkAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteNotification(notification.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        {Object.entries(notificationsByCategory).map(([category, notifs]) => (
          <TabsContent key={category} value={category} className="space-y-4">
            <ScrollArea className="h-[600px]">
              <div className="space-y-4">
                {notifs.length === 0 ? (
                  <div className="text-center py-12">
                    {getCategoryIcon(category)}
                    <p className="text-gray-600 mt-4">No {category} notifications</p>
                  </div>
                ) : (
                  notifs.map((notification: Notification) => (
                    <Card key={notification.id} className={`transition-all hover:shadow-md ${!notification.is_read ? 'border-blue-200 bg-blue-50/50' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <div className="mt-1">
                              {getIcon(notification.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-medium">{notification.title}</h4>
                                {!notification.is_read && (
                                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">New</span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                              <div className="flex items-center space-x-4 mt-2">
                                <span className="text-xs text-gray-500">
                                  {formatTimestamp(new Date(notification.created_at))}
                                </span>
                              </div>
                              {notification.action_label && (
                                <Button 
                                  variant="link" 
                                  className="p-0 h-auto text-blue-600 text-sm mt-2"
                                  onClick={() => {
                                    if (notification.action_url) {
                                      window.location.href = notification.action_url;
                                    }
                                  }}
                                >
                                  {notification.action_label}
                                  <ExternalLink className="h-3 w-3 ml-1" />
                                </Button>
                              )}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            {!notification.is_read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleMarkAsRead(notification.id)}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteNotification(notification.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default NotificationCenter;
