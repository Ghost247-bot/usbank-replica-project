
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface Account {
  id: string;
  account_number: string;
  account_name: string;
  account_type: 'checking' | 'savings' | 'investment' | 'escrow' | 'credit_card' | 'loan';
  balance: number;
  is_frozen: boolean;
  freeze_reason?: string;
  user_id: string;
  status: string;
}

interface CreditCard {
  id: string;
  card_number: string;
  card_type: string;
  credit_limit: number;
  current_balance: number;
  interest_rate: number;
  is_frozen: boolean;
  freeze_reason?: string;
  user_id: string;
  status: string;
}

interface Transaction {
  id: string;
  account_id: string;
  amount: number;
  transaction_type: string;
  description: string;
  status: string;
  created_at: string;
  reference_number?: string;
}

export const useBankingData = () => {
  const { user } = useAuth();

  const { data: accounts = [], isLoading: accountsLoading } = useQuery({
    queryKey: ['accounts', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      
      const { data, error } = await supabase
        .from('accounts')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching accounts:', error);
        throw error;
      }
      
      return data || [];
    },
    enabled: !!user,
  });

  const { data: creditCards = [], isLoading: cardsLoading } = useQuery({
    queryKey: ['credit_cards', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('credit_cards')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching credit cards:', error);
        throw error;
      }
      
      return data || [];
    },
    enabled: !!user,
  });

  const { data: transactions = [], isLoading: transactionsLoading } = useQuery({
    queryKey: ['transactions', user?.id],
    queryFn: async () => {
      if (!user || !accounts?.length) return [];
      
      const accountIds = accounts.map(acc => acc.id);
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .in('account_id', accountIds)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Error fetching transactions:', error);
        throw error;
      }
      
      return data || [];
    },
    enabled: !!user && !!accounts?.length,
  });

  const isLoading = accountsLoading || cardsLoading || transactionsLoading;

  // Calculate balances
  const totalBalance = accounts.reduce((sum, account) => sum + Number(account.balance), 0);
  const checkingBalance = accounts.find(acc => acc.account_type === 'checking')?.balance || 0;
  const savingsBalance = accounts.find(acc => acc.account_type === 'savings')?.balance || 0;
  const escrowBalance = accounts.find(acc => acc.account_type === 'escrow')?.balance || 0;
  const investmentBalance = accounts.find(acc => acc.account_type === 'investment')?.balance || 0;
  const creditCardBalance = creditCards.reduce((sum, card) => sum + Number(card.current_balance), 0);


  return {
    accounts: accounts as Account[],
    creditCards: creditCards as CreditCard[],
    transactions: transactions as Transaction[],
    totalBalance,
    checkingBalance,
    savingsBalance,
    escrowBalance,
    investmentBalance,
    creditCardBalance,
    isLoading,
  };
};
