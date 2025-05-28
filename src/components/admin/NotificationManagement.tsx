
import React, { useState, useEffect } from 'react';
import { Plus, Send, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  user_id: string;
  is_read: boolean;
  created_at: string;
}

const NotificationManagement = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showCreateNotification, setShowCreateNotification] = useState(false);
  const [users, setUsers] = useState<Array<{ id: string; name: string }>>([]);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    type: 'info',
    target_user_id: '',
    send_to_all: false
  });
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    fetchNotifications();
    fetchUsers();
  }, []);

  const fetchNotifications = async () => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;
      setNotifications(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch notifications: " + error.message,
      });
    }
  };

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, first_name, last_name');

      if (error) throw error;
      
      const userList = data?.map(user => ({
        id: user.id,
        name: `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'Unnamed User'
      })) || [];
      
      setUsers(userList);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users: " + error.message,
      });
    }
  };

  const handleSendNotification = async () => {
    try {
      setLoading(true);

      if (formData.send_to_all) {
        // Send to all users
        const notifications = users.map(user => ({
          title: formData.title,
          message: formData.message,
          type: formData.type,
          user_id: user.id
        }));

        const { error } = await supabase
          .from('notifications')
          .insert(notifications);

        if (error) throw error;
      } else {
        // Send to specific user
        const { error } = await supabase
          .from('notifications')
          .insert({
            title: formData.title,
            message: formData.message,
            type: formData.type,
            user_id: formData.target_user_id
          });

        if (error) throw error;
      }

      toast({
        title: "Success",
        description: `Notification sent ${formData.send_to_all ? 'to all users' : 'successfully'}`,
      });

      setShowCreateNotification(false);
      setFormData({
        title: '',
        message: '',
        type: 'info',
        target_user_id: '',
        send_to_all: false
      });
      fetchNotifications();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const getNotificationTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'error': return 'text-red-600 bg-red-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Notification Management</CardTitle>
            <CardDescription>Send notifications to users</CardDescription>
          </div>
          <Dialog open={showCreateNotification} onOpenChange={setShowCreateNotification}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Send Notification
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Send Notification</DialogTitle>
                <DialogDescription>
                  Send a notification to users
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Notification title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <Textarea
                  placeholder="Notification message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Notification type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sendToAll"
                    checked={formData.send_to_all}
                    onChange={(e) => setFormData({ ...formData, send_to_all: e.target.checked })}
                    className="rounded"
                  />
                  <label htmlFor="sendToAll" className="text-sm">
                    Send to all users
                  </label>
                </div>

                {!formData.send_to_all && (
                  <Select value={formData.target_user_id} onValueChange={(value) => setFormData({ ...formData, target_user_id: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select user" />
                    </SelectTrigger>
                    <SelectContent>
                      {users.map((user) => (
                        <SelectItem key={user.id} value={user.id}>
                          {user.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                <Button
                  onClick={handleSendNotification}
                  disabled={loading || !formData.title || !formData.message || (!formData.send_to_all && !formData.target_user_id)}
                  className="w-full"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Notification
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default NotificationManagement;
