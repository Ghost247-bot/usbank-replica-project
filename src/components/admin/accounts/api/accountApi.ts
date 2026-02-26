
import { supabase } from '@/integrations/supabase/client';
import { Account } from '../types';
import { logger } from '@/lib/logger';

export const fetchAccounts = async (): Promise<Account[]> => {
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
  logger.debug('Fetched accounts:', data);
  return data || [];
};

export const createAccount = async (accountData: {
  user_id: string;
  account_name: string;
  account_type: 'checking' | 'savings' | 'investment' | 'escrow';
  balance: number;
}): Promise<void> => {
  // Generate account number
  const { data: accountNumber, error: genError } = await supabase.rpc('generate_account_number');
  
  if (genError) {
    logger.error('Error generating account number:', genError);
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
};

export const updateAccount = async (accountId: string, accountData: {
  account_name: string;
  account_type: 'checking' | 'savings' | 'investment' | 'escrow';
  balance: number;
}): Promise<void> => {
  const { error } = await supabase
    .from('accounts')
    .update({
      account_name: accountData.account_name,
      account_type: accountData.account_type,
      balance: accountData.balance,
      updated_at: new Date().toISOString()
    })
    .eq('id', accountId);

  if (error) throw error;
};

export const freezeAccount = async (accountId: string, freeze: boolean, freezeReason?: string): Promise<void> => {
  const { error } = await supabase.rpc('toggle_account_freeze', {
    account_id: accountId,
    freeze_status: freeze,
    reason: freeze ? freezeReason : null
  });

  if (error) throw error;
};

export const deleteAccount = async (accountId: string): Promise<void> => {
  const { error } = await supabase
    .from('accounts')
    .delete()
    .eq('id', accountId);

  if (error) throw error;
};
