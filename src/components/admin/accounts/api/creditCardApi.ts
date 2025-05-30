
import { supabase } from '@/integrations/supabase/client';
import { CreditCard } from '../types';

export const fetchCreditCards = async (): Promise<CreditCard[]> => {
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
  return data || [];
};

export const createCreditCard = async (cardData: {
  user_id: string;
  card_type: string;
  credit_limit: number;
  interest_rate: number;
  current_balance: number;
}): Promise<void> => {
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
};

export const updateCreditCard = async (cardId: string, cardData: {
  card_type: string;
  credit_limit: number;
  interest_rate: number;
  current_balance: number;
}): Promise<void> => {
  const { error } = await supabase
    .from('credit_cards')
    .update({
      card_type: cardData.card_type,
      credit_limit: cardData.credit_limit,
      interest_rate: cardData.interest_rate,
      current_balance: cardData.current_balance,
      updated_at: new Date().toISOString()
    })
    .eq('id', cardId);

  if (error) throw error;
};

export const freezeCreditCard = async (cardId: string, freeze: boolean, freezeReason?: string): Promise<void> => {
  const { error } = await supabase.rpc('toggle_card_freeze', {
    card_id: cardId,
    freeze_status: freeze,
    reason: freeze ? freezeReason : null
  });

  if (error) throw error;
};

export const deleteCreditCard = async (cardId: string): Promise<void> => {
  const { error } = await supabase
    .from('credit_cards')
    .delete()
    .eq('id', cardId);

  if (error) throw error;
};
