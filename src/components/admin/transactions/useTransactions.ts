
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Transaction, Account, CreateTransactionForm, EditTransactionForm } from './types';
import { logger } from '@/lib/logger';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchAccounts = async () => {
    try {
      const { data, error } = await supabase
        .from('accounts')
        .select('id, account_number, account_name, user_id')
        .order('account_name', { ascending: true });

      if (error) throw error;
      setAccounts(data || []);
    } catch (error: any) {
      logger.error('Error fetching accounts:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch accounts: " + error.message,
      });
    }
  };

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;
      
      const typedTransactions = (data || []).map(transaction => ({
        ...transaction,
        status: transaction.status as any,
        transaction_type: transaction.transaction_type as any
      }));
      
      setTransactions(typedTransactions);
    } catch (error: any) {
      logger.error('Error fetching transactions:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch transactions: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const updateAccountBalance = async (accountId: string, amount: number, transactionType: string) => {
    try {
      // Get current account balance
      const { data: account, error: fetchError } = await supabase
        .from('accounts')
        .select('balance')
        .eq('id', accountId)
        .single();

      if (fetchError) throw fetchError;

      // Calculate new balance
      const currentBalance = account.balance || 0;
      const balanceChange = transactionType === 'withdrawal' ? -amount : amount;
      const newBalance = currentBalance + balanceChange;

      // Update account balance
      const { error: updateError } = await supabase
        .from('accounts')
        .update({ balance: newBalance })
        .eq('id', accountId);

      if (updateError) throw updateError;

      logger.debug(`Account ${accountId} balance updated from ${currentBalance} to ${newBalance}`);
    } catch (error: any) {
      logger.error('Error updating account balance:', error);
      // Don't throw here, just log the error as this is a secondary operation
    }
  };

  const createTransaction = async (createForm: CreateTransactionForm) => {
    if (!createForm.account_id || !createForm.amount) return false;

    try {
      setLoading(true);
      const { error } = await supabase
        .from('transactions')
        .insert({
          account_id: createForm.account_id,
          amount: parseFloat(createForm.amount),
          transaction_type: createForm.transaction_type,
          description: createForm.description,
          status: createForm.status,
          reference_number: `TXN${Date.now()}`
        });

      if (error) throw error;

      // Update account balance if transaction is completed
      if (createForm.status === 'completed') {
        await updateAccountBalance(
          createForm.account_id,
          parseFloat(createForm.amount),
          createForm.transaction_type
        );
      }

      toast({
        title: "Success",
        description: "Transaction created successfully",
      });

      fetchTransactions();
      return true;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const updateTransaction = async (transactionId: string, editForm: EditTransactionForm) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('transactions')
        .update({
          amount: parseFloat(editForm.amount),
          description: editForm.description,
          status: editForm.status,
          transaction_type: editForm.transaction_type,
          updated_at: new Date().toISOString()
        })
        .eq('id', transactionId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Transaction updated successfully",
      });

      fetchTransactions();
      return true;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchAccounts();
  }, []);

  return {
    transactions,
    accounts,
    loading,
    createTransaction,
    updateTransaction,
    fetchTransactions
  };
};
