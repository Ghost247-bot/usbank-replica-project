
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export const useBankingData = () => {
  const { user } = useAuth();

  const { data: accounts, isLoading: accountsLoading } = useQuery({
    queryKey: ['accounts', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('accounts')
        .select('*')
        .eq('user_id', user.id);
      
      if (error) throw error;
      return data || [];
    },
    enabled: !!user,
  });

  const { data: transactions, isLoading: transactionsLoading } = useQuery({
    queryKey: ['transactions', user?.id],
    queryFn: async () => {
      if (!user || !accounts?.length) return [];
      
      const accountIds = accounts.map(acc => acc.id);
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .in('account_id', accountIds)
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (error) throw error;
      return data || [];
    },
    enabled: !!user && !!accounts?.length,
  });

  const { data: creditCards, isLoading: creditCardsLoading } = useQuery({
    queryKey: ['credit_cards', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('credit_cards')
        .select('*')
        .eq('user_id', user.id);
      
      if (error) throw error;
      return data || [];
    },
    enabled: !!user,
  });

  const { data: loans, isLoading: loansLoading } = useQuery({
    queryKey: ['loans', user?.id],
    queryFn: async () => {
      if (!user) return [];
      const { data, error } = await supabase
        .from('loans')
        .select('*')
        .eq('user_id', user.id);
      
      if (error) throw error;
      return data || [];
    },
    enabled: !!user,
  });

  const totalBalance = accounts?.reduce((sum, acc) => sum + Number(acc.balance), 0) || 0;
  const checkingBalance = accounts?.find(acc => acc.account_type === 'checking')?.balance || 0;
  const savingsBalance = accounts?.find(acc => acc.account_type === 'savings')?.balance || 0;
  const creditCardBalance = creditCards?.reduce((sum, card) => sum + Number(card.current_balance), 0) || 0;

  return {
    accounts,
    transactions,
    creditCards,
    loans,
    totalBalance,
    checkingBalance,
    savingsBalance,
    creditCardBalance,
    isLoading: accountsLoading || transactionsLoading || creditCardsLoading || loansLoading,
  };
};
