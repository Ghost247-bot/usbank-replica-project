
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Account, CreditCard } from './types';
import { User } from '../users/types';
import { fetchAccounts, createAccount, updateAccount, freezeAccount, deleteAccount } from './api/accountApi';
import { fetchCreditCards, createCreditCard, updateCreditCard, freezeCreditCard, deleteCreditCard } from './api/creditCardApi';
import { fetchUsers } from './api/userApi';

export const useAccountManagement = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    handleFetchAccounts();
    handleFetchCreditCards();
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

  const handleFetchAccounts = async () => {
    try {
      setLoading(true);
      const accountsData = await fetchAccounts();
      setAccounts(accountsData);
    } catch (error: any) {
      console.error('Error fetching accounts:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch accounts: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFetchCreditCards = async () => {
    try {
      setLoading(true);
      const cardsData = await fetchCreditCards();
      setCreditCards(cardsData);
    } catch (error: any) {
      console.error('Error fetching credit cards:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch credit cards: " + error.message,
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
      console.error('Error creating account:', error);
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
      console.error('Error updating account:', error);
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

  const handleCreateCreditCard = async (cardData: {
    user_id: string;
    card_type: string;
    credit_limit: number;
    interest_rate: number;
    current_balance: number;
  }) => {
    try {
      setLoading(true);
      await createCreditCard(cardData);
      toast({
        title: "Success",
        description: "Credit card created successfully",
      });
      handleFetchCreditCards();
      return true;
    } catch (error: any) {
      console.error('Error creating credit card:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create credit card: " + error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleEditCreditCard = async (cardId: string, cardData: {
    card_type: string;
    credit_limit: number;
    interest_rate: number;
    current_balance: number;
  }) => {
    try {
      setLoading(true);
      await updateCreditCard(cardId, cardData);
      toast({
        title: "Success",
        description: "Credit card updated successfully",
      });
      handleFetchCreditCards();
      return true;
    } catch (error: any) {
      console.error('Error updating credit card:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update credit card: " + error.message,
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

  const handleFreezeCard = async (cardId: string, freeze: boolean, freezeReason?: string) => {
    try {
      setLoading(true);
      await freezeCreditCard(cardId, freeze, freezeReason);
      toast({
        title: "Success",
        description: `Card ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });
      handleFetchCreditCards();
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
      console.error('Error deleting account:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete account: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    try {
      setLoading(true);
      await deleteCreditCard(cardId);
      toast({
        title: "Success",
        description: "Credit card deleted successfully",
      });
      handleFetchCreditCards();
    } catch (error: any) {
      console.error('Error deleting credit card:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete credit card: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    accounts,
    creditCards,
    users,
    loading,
    handleCreateAccount,
    handleEditAccount,
    handleCreateCreditCard,
    handleEditCreditCard,
    handleFreezeAccount,
    handleFreezeCard,
    handleDeleteAccount,
    handleDeleteCard
  };
};
