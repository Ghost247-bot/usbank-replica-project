
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useUserManagement } from './users/useUserManagement';
import CreateUserDialog from './users/CreateUserDialog';
import UserList from './users/UserList';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { users, loading, handleFreezeUser, fetchUsers } = useUserManagement();

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
            <CardDescription>Manage user accounts and access ({users.length} users)</CardDescription>
          </div>
          <CreateUserDialog onUserCreated={fetchUsers} />
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

        <UserList
          users={filteredUsers}
          loading={loading}
          onFreezeUser={handleFreezeUser}
        />
      </CardContent>
    </Card>
  );
};

export default UserManagement;
