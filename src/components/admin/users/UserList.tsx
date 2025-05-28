
import React from 'react';
import { User } from './types';
import UserFreezeDialog from './UserFreezeDialog';

interface UserListProps {
  users: User[];
  loading: boolean;
  onFreezeUser: (userId: string, freeze: boolean, reason: string) => Promise<boolean>;
}

const UserList: React.FC<UserListProps> = ({ users, loading, onFreezeUser }) => {
  if (loading && users.length === 0) {
    return (
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
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          {loading ? 'Loading users...' : 'No users found'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h3 className="font-medium">
              {user.first_name} {user.last_name}
            </h3>
            <p className="text-sm text-gray-600">
              User ID: {user.id.slice(0, 8)}...{user.id.slice(-4)}
            </p>
            <p className="text-xs text-gray-500">
              Joined: {new Date(user.created_at).toLocaleDateString()}
            </p>
            {user.is_frozen && (
              <p className="text-sm text-red-600">
                Frozen: {user.freeze_reason}
              </p>
            )}
          </div>
          <div className="flex space-x-2">
            <UserFreezeDialog
              user={user}
              onFreezeUser={onFreezeUser}
              loading={loading}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
