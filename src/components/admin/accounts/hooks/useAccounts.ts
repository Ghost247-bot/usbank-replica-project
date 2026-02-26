
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Account } from '../types';
import { fetchAccounts, createAccount, updateAccount, freezeAccount, deleteAccount } from '../api/accountApi';
import { logger } from '@/lib/logger';

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    handleFetchAccounts();
  }, []);

  const handleFetchAccounts = async () => {
    try {
      setLoading(true);
      const accountsData = await fetchAccounts();
      setAccounts(accountsData);
    } catch (error: any) {
      logger.error('Error fetching accounts:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch accounts: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAccount = async (accountData: {
    user_id: string;
    account_name: string;
    account_type: 'checking' | 'savings' | 'investment';
    balance: number;
  }) => {
    try {
      setLoading(true);
      await createAccount(accountData);
      toast({
        title: "Success",
        description: "Account created successfully",
      });
      handleFetchAccounts();
      return true;
    } catch (error: any) {
      logger.error('Error creating account:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create account: " + error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleEditAccount = async (accountId: string, accountData: {
    account_name: string;
    account_type: 'checking' | 'savings' | 'investment';
    balance: number;
  }) => {
    try {
      setLoading(true);
      await updateAccount(accountId, accountData);
      toast({
        title: "Success",
        description: "Account updated successfully",
      });
      handleFetchAccounts();
      return true;
    } catch (error: any) {
      logger.error('Error updating account:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update account: " + error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleFreezeAccount = async (accountId: string, freeze: boolean, freezeReason?: string) => {
    try {
      setLoading(true);
      await freezeAccount(accountId, freeze, freezeReason);
      toast({
        title: "Success",
        description: `Account ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });
      handleFetchAccounts();
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

  const handleDeleteAccount = async (accountId: string) => {
    try {
      setLoading(true);
      await deleteAccount(accountId);
      toast({
        title: "Success",
        description: "Account deleted successfully",
      });
      handleFetchAccounts();
    } catch (error: any) {
      logger.error('Error deleting account:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete account: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    accounts,
    loading,
    handleCreateAccount,
    handleEditAccount,
    handleFreezeAccount,
    handleDeleteAccount
  };
};
