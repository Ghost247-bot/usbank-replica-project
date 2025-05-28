
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BannerType, UserProfile } from './types';
import { getUserDisplayName } from './utils';

interface CreateBannerDialogProps {
  users: UserProfile[];
  onCreateBanner: (formData: {
    title: string;
    message: string;
    banner_type: BannerType;
    target_user_id: string;
    expires_at: string;
  }) => Promise<boolean>;
  loading: boolean;
}

const CreateBannerDialog: React.FC<CreateBannerDialogProps> = ({
  users,
  onCreateBanner,
  loading
}) => {
  const [showCreateBanner, setShowCreateBanner] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    banner_type: 'info' as BannerType,
    target_user_id: '',
    expires_at: ''
  });

  const handleCreateBanner = async () => {
    const success = await onCreateBanner(formData);
    if (success) {
      setShowCreateBanner(false);
      setFormData({
        title: '',
        message: '',
        banner_type: 'info',
        target_user_id: '',
        expires_at: ''
      });
    }
  };

  return (
    <Dialog open={showCreateBanner} onOpenChange={setShowCreateBanner}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Banner
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Banner</DialogTitle>
          <DialogDescription>
            Create a banner to display on user dashboards
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Banner title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <Textarea
            placeholder="Banner message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <Select value={formData.banner_type} onValueChange={(value: BannerType) => setFormData({ ...formData, banner_type: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Banner type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="success">Success</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="error">Error</SelectItem>
            </SelectContent>
          </Select>
          <Select value={formData.target_user_id} onValueChange={(value) => setFormData({ ...formData, target_user_id: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Target (All Users by default)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Users</SelectItem>
              {users.map((user) => (
                <SelectItem key={user.id} value={user.id}>
                  {getUserDisplayName(user.id, users)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="datetime-local"
            placeholder="Expires at (optional)"
            value={formData.expires_at}
            onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })}
          />
          <Button
            onClick={handleCreateBanner}
            disabled={loading || !formData.title || !formData.message}
            className="w-full"
          >
            Create Banner
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBannerDialog;
