
import React, { useState } from 'react';
import { Edit, UserCheck, UserX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { User } from './types';

interface UserFreezeDialogProps {
  user: User;
  onFreezeUser: (userId: string, freeze: boolean, reason: string) => Promise<boolean>;
  loading: boolean;
}

const UserFreezeDialog: React.FC<UserFreezeDialogProps> = ({
  user,
  onFreezeUser,
  loading
}) => {
  const [freezeReason, setFreezeReason] = useState('');

  const handleFreezeToggle = async () => {
    const success = await onFreezeUser(user.id, !user.is_frozen, freezeReason);
    if (success) {
      setFreezeReason('');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {user.is_frozen ? 'Unfreeze' : 'Freeze'} User
          </DialogTitle>
          <DialogDescription>
            {user.is_frozen 
              ? 'Unfreeze this user account' 
              : 'Freeze this user account and provide a reason'
            }
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {!user.is_frozen && (
            <Textarea
              placeholder="Reason for freezing..."
              value={freezeReason}
              onChange={(e) => setFreezeReason(e.target.value)}
            />
          )}
          <Button
            onClick={handleFreezeToggle}
            disabled={loading || (!user.is_frozen && !freezeReason)}
            className="w-full"
            variant={user.is_frozen ? "default" : "destructive"}
          >
            {user.is_frozen ? (
              <>
                <UserCheck className="h-4 w-4 mr-2" />
                Unfreeze User
              </>
            ) : (
              <>
                <UserX className="h-4 w-4 mr-2" />
                Freeze User
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserFreezeDialog;
