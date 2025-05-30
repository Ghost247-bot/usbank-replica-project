
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { User } from '../../users/types';
import { fetchUsers } from '../api/userApi';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    handleFetchUsers();
  }, []);

  const handleFetchUsers = async () => {
    try {
      const usersData = await fetchUsers();
      setUsers(usersData);
    } catch (error: any) {
      console.error('Error fetching users:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users: " + error.message,
      });
    }
  };

  return {
    users
  };
};
