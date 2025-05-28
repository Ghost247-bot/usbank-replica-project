
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Account, CreditCard } from './types';

export const useAccountManagement = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchAccounts();
    fetchCreditCards();
  }, []);

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
    loading,
    handleFreezeAccount,
    handleFreezeCard
  };
};
