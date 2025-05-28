
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
  created_at: string;
  email_confirmed_at?: string;
  last_sign_in_at?: string;
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
      setLoading(true);
      console.log('Fetching users from auth and profiles...');
      
      // First, get all profiles with their status
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select(`
          id,
          first_name,
          last_name,
          created_at,
          user_status!left (
            is_frozen,
            freeze_reason
          )
        `)
        .order('created_at', { ascending: false });

      if (profilesError) {
        console.error('Error fetching profiles:', profilesError);
        throw profilesError;
      }

      console.log('Fetched profiles:', profiles);

      // Get auth users using the admin API
      const { data: authUsers, error: authError } = await supabase.auth.admin.listUsers();

      if (authError) {
        console.error('Error fetching auth users:', authError);
        // If we can't fetch auth users (possibly due to permissions), 
        // fall back to using profile data only
        const usersFromProfiles = profiles?.map(profile => ({
          id: profile.id,
          email: `user-${profile.id.slice(0, 8)}@example.com`, // Placeholder
          first_name: profile.first_name || 'Unknown',
          last_name: profile.last_name || 'User',
          is_frozen: profile.user_status?.is_frozen || false,
          freeze_reason: profile.user_status?.freeze_reason || undefined,
          created_at: profile.created_at,
          email_confirmed_at: undefined,
          last_sign_in_at: undefined
        })) || [];

        console.log('Using profile-only data:', usersFromProfiles);
        setUsers(usersFromProfiles);
        return;
      }

      // Combine auth users with profile data
      const combinedUsers = authUsers.users.map(authUser => {
        const profile = profiles?.find(p => p.id === authUser.id);
        return {
          id: authUser.id,
          email: authUser.email || 'No email',
          first_name: profile?.first_name || authUser.user_metadata?.first_name || 'Unknown',
          last_name: profile?.last_name || authUser.user_metadata?.last_name || 'User',
          is_frozen: profile?.user_status?.is_frozen || false,
          freeze_reason: profile?.user_status?.freeze_reason || undefined,
          created_at: authUser.created_at,
          email_confirmed_at: authUser.email_confirmed_at,
          last_sign_in_at: authUser.last_sign_in_at
        };
      });

      console.log('Combined users data:', combinedUsers);
      setUsers(combinedUsers);
    } catch (error: any) {
      console.error('Error fetching users:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFreezeUser = async (userId: string, freeze: boolean) => {
    try {
      setLoading(true);
      console.log(`${freeze ? 'Freezing' : 'Unfreezing'} user:`, userId);
      
      const { error } = await supabase.rpc('toggle_user_freeze', {
        target_user_id: userId,
        freeze_status: freeze,
        reason: freeze ? freezeReason : null
      });

      if (error) {
        console.error('Error toggling user freeze:', error);
        throw error;
      }

      toast({
        title: "Success",
        description: `User ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });

      setFreezeReason('');
      setSelectedUser(null);
      fetchUsers();
    } catch (error: any) {
      console.error('Error in handleFreezeUser:', error);
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

  if (loading && users.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Loading users...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg animate-pulse">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-3 bg-gray-200 rounded w-48"></div>
                </div>
                <div className="h-8 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>User Management</CardTitle>
            <CardDescription>Manage user accounts and access ({users.length} users)</CardDescription>
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
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">
                    {user.first_name} {user.last_name}
                  </h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p className="text-xs text-gray-500">
                    Joined: {new Date(user.created_at).toLocaleDateString()}
                  </p>
                  {user.email_confirmed_at && (
                    <p className="text-xs text-green-600">
                      Email confirmed: {new Date(user.email_confirmed_at).toLocaleDateString()}
                    </p>
                  )}
                  {user.last_sign_in_at && (
                    <p className="text-xs text-blue-600">
                      Last sign in: {new Date(user.last_sign_in_at).toLocaleDateString()}
                    </p>
                  )}
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
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                {loading ? 'Loading users...' : 'No users found'}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserManagement;
