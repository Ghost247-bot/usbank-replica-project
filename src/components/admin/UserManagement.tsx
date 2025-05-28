
import React, { useState, useEffect } from 'react';
import { Search, UserCheck, UserX, Edit, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAdminFunctions } from '@/hooks/useAdminFunctions';

interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  is_frozen: boolean;
  freeze_reason?: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [freezeReason, setFreezeReason] = useState('');
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const { createAdminUser } = useAdminFunctions();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select(`
          id,
          first_name,
          last_name,
          user_status (
            is_frozen,
            freeze_reason
          )
        `);

      if (error) throw error;

      // Also get user emails from auth metadata
      const usersWithStatus = profiles?.map(profile => ({
        id: profile.id,
        email: `user-${profile.id.slice(0, 8)}@example.com`, // Placeholder since we can't access auth.users
        first_name: profile.first_name,
        last_name: profile.last_name,
        is_frozen: Array.isArray(profile.user_status) && profile.user_status.length > 0 ? profile.user_status[0].is_frozen : false,
        freeze_reason: Array.isArray(profile.user_status) && profile.user_status.length > 0 ? profile.user_status[0].freeze_reason : undefined
      })) || [];

      setUsers(usersWithStatus);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users: " + error.message,
      });
    }
  };

  const handleFreezeUser = async (userId: string, freeze: boolean) => {
    try {
      setLoading(true);
      const { error } = await supabase.rpc('toggle_user_freeze', {
        target_user_id: userId,
        freeze_status: freeze,
        reason: freeze ? freezeReason : null
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: `User ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });

      setFreezeReason('');
      setSelectedUser(null);
      fetchUsers();
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

  const handleCreateUser = async () => {
    if (!newUserEmail || !newUserPassword) return;

    const result = await createAdminUser(newUserEmail, newUserPassword);
    if (result.success) {
      setShowCreateUser(false);
      setNewUserEmail('');
      setNewUserPassword('');
      fetchUsers();
    }
  };

  const filteredUsers = users.filter(user =>
    user.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage user accounts and access</CardDescription>
          </div>
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
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search users..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">
                  {user.first_name} {user.last_name}
                </h3>
                <p className="text-sm text-gray-600">{user.email}</p>
                {user.is_frozen && (
                  <p className="text-sm text-red-600">
                    Frozen: {user.freeze_reason}
                  </p>
                )}
              </div>
              <div className="flex space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedUser(user)}
                    >
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
                        onClick={() => handleFreezeUser(user.id, !user.is_frozen)}
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
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserManagement;
