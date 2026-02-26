
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAdminFunctions } from '@/hooks/useAdminFunctions';

interface CreateUserDialogProps {
  onUserCreated: () => void;
}

const CreateUserDialog: React.FC<CreateUserDialogProps> = ({ onUserCreated }) => {
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');

  const { createAdminUser } = useAdminFunctions();

  const handleCreateUser = async () => {
    if (!newUserEmail || !newUserPassword) return;

    const result = await createAdminUser(newUserEmail, newUserPassword);
    if (result.success) {
      setShowCreateUser(false);
      setNewUserEmail('');
      setNewUserPassword('');
      onUserCreated();
    }
  };

  return (
    <Dialog open={showCreateUser} onOpenChange={setShowCreateUser}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create User
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
          <DialogDescription>
            Create a new user account
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={newUserPassword}
            onChange={(e) => setNewUserPassword(e.target.value)}
          />
          <Button onClick={handleCreateUser} className="w-full">
            Create User
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserDialog;
