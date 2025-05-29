
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Account, CreditCard } from './types';
import { User } from '../users/types';

export const useAccountManagement = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchAccounts();
    fetchCreditCards();
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      console.log('Fetching users for account creation...');
      
      const { data: userRoles, error: userRolesError } = await supabase
        .from('user_roles')
        .select('user_id')
        .order('created_at', { ascending: false });

      if (userRolesError) {
        console.error('Error fetching user roles:', userRolesError);
        throw userRolesError;
      }

      if (!userRoles || userRoles.length === 0) {
        console.log('No users found');
        setUsers([]);
        return;
      }

      const userIds = userRoles.map(role => role.user_id);
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, first_name, last_name, created_at')
        .in('id', userIds);

      if (profilesError) {
        console.error('Error fetching profiles:', profilesError);
        throw profilesError;
      }

      const combinedUsers = userIds.map(userId => {
        const profile = profiles?.find(p => p.id === userId);
        return {
          id: userId,
          email: `user-${userId.slice(0, 8)}@moonstone.bank`,
          first_name: profile?.first_name || 'Unknown',
          last_name: profile?.last_name || 'User',
          is_frozen: false,
          freeze_reason: undefined,
          created_at: profile?.created_at || new Date().toISOString(),
          email_confirmed_at: undefined,
          last_sign_in_at: undefined
        };
      });

      console.log('Fetched users for account creation:', combinedUsers.length);
      setUsers(combinedUsers);
    } catch (error: any) {
      console.error('Error fetching users:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users: " + error.message,
      });
    }
  };

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('accounts')
        .select(`
          *,
          profiles (
            first_name,
            last_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      console.log('Fetched accounts:', data);
      setAccounts(data || []);
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

  const fetchCreditCards = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('credit_cards')
        .select(`
          *,
          profiles (
            first_name,
            last_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      console.log('Fetched credit cards:', data);
      setCreditCards(data || []);
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
      
      // Generate account number
      const { data: accountNumber, error: genError } = await supabase.rpc('generate_account_number');
      
      if (genError) {
        console.error('Error generating account number:', genError);
        throw genError;
      }

      const { error } = await supabase
        .from('accounts')
        .insert({
          user_id: accountData.user_id,
          account_name: accountData.account_name,
          account_type: accountData.account_type,
          account_number: accountNumber,
          balance: accountData.balance,
          status: 'active'
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Account created successfully",
      });

      fetchAccounts();
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

  const handleCreateCreditCard = async (cardData: {
    user_id: string;
    card_type: string;
    credit_limit: number;
    interest_rate: number;
    current_balance: number;
  }) => {
    try {
      setLoading(true);
      
      // Generate a card number (16 digits)
      const cardNumber = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
      
      // Generate expiry date (3 years from now)
      const expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 3);
      const expiryString = expiryDate.toISOString().split('T')[0];

      const { error } = await supabase
        .from('credit_cards')
        .insert({
          user_id: cardData.user_id,
          card_type: cardData.card_type,
          card_number: cardNumber,
          credit_limit: cardData.credit_limit,
          interest_rate: cardData.interest_rate,
          current_balance: cardData.current_balance,
          expiry_date: expiryString,
          status: 'active'
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Credit card created successfully",
      });

      fetchCreditCards();
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

  const handleFreezeAccount = async (accountId: string, freeze: boolean, freezeReason?: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.rpc('toggle_account_freeze', {
        account_id: accountId,
        freeze_status: freeze,
        reason: freeze ? freezeReason : null
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: `Account ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });

      fetchAccounts();
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
      const { error } = await supabase.rpc('toggle_card_freeze', {
        card_id: cardId,
        freeze_status: freeze,
        reason: freeze ? freezeReason : null
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: `Card ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });

      fetchCreditCards();
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

  return {
    accounts,
    creditCards,
    users,
    loading,
    handleCreateAccount,
    handleCreateCreditCard,
    handleFreezeAccount,
    handleFreezeCard
  };
};
