
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { logger } from '@/lib/logger';

// Types for banking data
export interface Account {
  id: string;
  user_id: string;
  account_number: string;
  account_type: 'checking' | 'savings' | 'credit_card' | 'loan' | 'investment' | 'escrow';
  provider: string;
  name: string;
  balance: number;
  available_balance?: number;
  credit_limit?: number;
  interest_rate?: number;
  status: 'active' | 'inactive' | 'closed' | 'frozen';
  is_primary: boolean;
  routing_number?: string;
  opened_at: string;
  closed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  user_id: string;
  account_id: string;
  transaction_id?: string;
  amount: number;
  transaction_type: 'deposit' | 'withdrawal' | 'transfer' | 'payment' | 'purchase' | 'fee' | 'interest' | 'dividend';
  description: string;
  merchant_name?: string;
  category?: string;
  subcategory?: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  direction: 'credit' | 'debit';
  balance_after?: number;
  location?: string;
  tags?: string[];
  metadata?: any;
  posted_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Bill {
  id: string;
  user_id: string;
  bill_name: string;
  provider: string;
  category: string;
  amount: number;
  due_date: string;
  frequency?: 'once' | 'weekly' | 'biweekly' | 'monthly' | 'quarterly' | 'yearly';
  is_auto_pay: boolean;
  account_id?: string;
  status: 'pending' | 'paid' | 'overdue' | 'cancelled';
  last_paid_date?: string;
  next_due_date?: string;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Transfer {
  id: string;
  user_id: string;
  from_account_id: string;
  to_account_id: string;
  amount: number;
  description?: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  scheduled_for?: string;
  completed_at?: string;
  reference_number?: string;
  fees: number;
  created_at: string;
  updated_at: string;
}

export interface Card {
  id: string;
  user_id: string;
  account_id: string;
  card_number: string; // encrypted
  card_type: 'debit' | 'credit';
  brand?: 'visa' | 'mastercard' | 'amex' | 'discover';
  last_four: string;
  expiration_date: string;
  cvv: string; // encrypted
  cardholder_name: string;
  status: 'active' | 'inactive' | 'blocked' | 'expired' | 'lost' | 'stolen';
  daily_limit?: number;
  monthly_limit?: number;
  is_contactless: boolean;
  is_virtual: boolean;
  issued_at: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Location {
  id: string;
  name: string;
  type: 'branch' | 'atm' | 'partner_atm';
  address: string;
  city: string;
  state: string;
  zip_code: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  hours?: any;
  services: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useBankingData = () => {
  const { user } = useAuth();

  const { data: accounts = [], isLoading: accountsLoading } = useQuery({
    queryKey: ['accounts', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await supabase
          .from('accounts')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          logger.error('Error fetching accounts:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching accounts:', err);
        return [];
      }
    },
    enabled: !!user,
  });

  const { data: cards = [], isLoading: cardsLoading } = useQuery({
    queryKey: ['cards', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await supabase
          .from('cards')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          logger.error('Error fetching cards:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching cards:', err);
        return [];
      }
    },
    enabled: !!user,
  });

  const { data: transactions = [], isLoading: transactionsLoading } = useQuery({
    queryKey: ['transactions', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await supabase
          .from('transactions')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(50);

        if (error) {
          logger.error('Error fetching transactions:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching transactions:', err);
        return [];
      }
    },
    enabled: !!user,
  });

  const { data: bills = [], isLoading: billsLoading } = useQuery({
    queryKey: ['bills', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await supabase
          .from('bills')
          .select('*')
          .eq('user_id', user.id)
          .order('due_date', { ascending: true });

        if (error) {
          logger.error('Error fetching bills:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching bills:', err);
        return [];
      }
    },
    enabled: !!user,
  });

  const { data: transfers = [], isLoading: transfersLoading } = useQuery({
    queryKey: ['transfers', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await supabase
          .from('transfers')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          logger.error('Error fetching transfers:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching transfers:', err);
        return [];
      }
    },
    enabled: !!user,
  });

  const { data: locations = [], isLoading: locationsLoading } = useQuery({
    queryKey: ['locations'],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from('locations')
          .select('*')
          .eq('is_active', true)
          .order('name', { ascending: true });

        if (error) {
          logger.error('Error fetching locations:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching locations:', err);
        return [];
      }
    },
  });

  const { data: appointments = [], isLoading: appointmentsLoading } = useQuery({
    queryKey: ['appointments', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await supabase
          .from('appointments')
          .select('*')
          .eq('user_id', user.id)
          .order('scheduled_at', { ascending: true });

        if (error) {
          logger.error('Error fetching appointments:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching appointments:', err);
        return [];
      }
    },
    enabled: !!user,
  });

  const { data: documents = [], isLoading: documentsLoading } = useQuery({
    queryKey: ['documents', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await supabase
          .from('documents')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          logger.error('Error fetching documents:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching documents:', err);
        return [];
      }
    },
    enabled: !!user,
  });

  const { data: alerts = [], isLoading: alertsLoading } = useQuery({
    queryKey: ['alerts', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await supabase
          .from('alerts')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          logger.error('Error fetching alerts:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching alerts:', err);
        return [];
      }
    },
    enabled: !!user,
  });

  // Calculate total balance
  const totalBalance = accounts?.reduce((sum, account) => sum + Number(account.balance), 0) || 0;
  
  // Calculate balances by type
  const balancesByType = accounts?.reduce((acc, account) => {
    acc[account.account_type] = (acc[account.account_type] || 0) + Number(account.balance);
    return acc;
  }, {} as Record<string, number>) || {};

  const isLoading = accountsLoading || cardsLoading || transactionsLoading || 
                   billsLoading || transfersLoading || locationsLoading || 
                   appointmentsLoading || documentsLoading || alertsLoading;

  return {
    accounts,
    cards,
    transactions,
    bills,
    transfers,
    locations,
    appointments,
    documents,
    alerts,
    totalBalance,
    balancesByType,
    isLoading,
  };
};

// Individual hooks for specific data types
export const useAccounts = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['accounts', user?.id],
    queryFn: async () => {
      if (!user) return [];

      try {
        const { data, error } = await supabase
          .from('accounts')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          logger.error('Error fetching accounts:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching accounts:', err);
        return [];
      }
    },
    enabled: !!user,
  });
};

export const useTransactions = (accountId?: string, limit = 50) => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['transactions', user?.id, accountId, limit],
    queryFn: async () => {
      if (!user) return [];

      try {
        let query = supabase
          .from('transactions')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(limit);

        if (accountId) {
          query = query.eq('account_id', accountId);
        }

        const { data, error } = await query;

        if (error) {
          logger.error('Error fetching transactions:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching transactions:', err);
        return [];
      }
    },
    enabled: !!user,
  });
};

export const useBills = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['bills', user?.id],
    queryFn: async () => {
      if (!user) return [];

      try {
        const { data, error } = await supabase
          .from('bills')
          .select('*')
          .eq('user_id', user.id)
          .order('due_date', { ascending: true });

        if (error) {
          logger.error('Error fetching bills:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching bills:', err);
        return [];
      }
    },
    enabled: !!user,
  });
};

export const useLocations = (type?: 'branch' | 'atm' | 'partner_atm') => {
  return useQuery({
    queryKey: ['locations', type],
    queryFn: async () => {
      try {
        let query = supabase
          .from('locations')
          .select('*')
          .eq('is_active', true)
          .order('name', { ascending: true });

        if (type) {
          query = query.eq('type', type);
        }

        const { data, error } = await query;

        if (error) {
          logger.error('Error fetching locations:', error.message);
          return [];
        }

        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching locations:', err);
        return [];
      }
    },
  });
};
