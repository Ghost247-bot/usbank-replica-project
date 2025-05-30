
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
  is_frozen: boolean;
  freeze_reason?: string;
  user_id: string;
  status: string;
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

  const isLoading = accountsLoading || cardsLoading;

  // Calculate balances
  const totalBalance = accounts.reduce((sum, account) => sum + Number(account.balance), 0);
  const checkingBalance = accounts.find(acc => acc.account_type === 'checking')?.balance || 0;
  const savingsBalance = accounts.find(acc => acc.account_type === 'savings')?.balance || 0;
  const creditCardBalance = creditCards.reduce((sum, card) => sum + Number(card.current_balance), 0);

  return {
    accounts: accounts as Account[],
    creditCards: creditCards as CreditCard[],
    totalBalance,
    checkingBalance,
    savingsBalance,
    creditCardBalance,
    isLoading,
  };
};
