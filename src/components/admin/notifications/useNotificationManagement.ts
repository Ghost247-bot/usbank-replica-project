
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Notification, User, NotificationFormData } from './types';

export const useNotificationManagement = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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

  const sendNotification = async (formData: NotificationFormData) => {
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

      fetchNotifications();
      return true;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
    fetchUsers();
  }, []);

  return {
    notifications,
    users,
    loading,
    sendNotification,
    fetchNotifications
  };
};
