
import React, { useState } from 'react';
import { Plus, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NotificationFormData, User } from './types';

interface SendNotificationDialogProps {
  users: User[];
  loading: boolean;
  onSendNotification: (formData: NotificationFormData) => Promise<boolean>;
}

const SendNotificationDialog: React.FC<SendNotificationDialogProps> = ({
  users,
  loading,
  onSendNotification
}) => {
  const [showCreateNotification, setShowCreateNotification] = useState(false);
  const [formData, setFormData] = useState<NotificationFormData>({
    title: '',
    message: '',
    type: 'info',
    target_user_id: '',
    send_to_all: false
  });

  const handleSendNotification = async () => {
    const success = await onSendNotification(formData);
    if (success) {
      setShowCreateNotification(false);
      setFormData({
        title: '',
        message: '',
        type: 'info',
        target_user_id: '',
        send_to_all: false
      });
    }
  };

  return (
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
  );
};

export default SendNotificationDialog;
