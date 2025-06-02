
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
  console.log('Creating credit card with data:', cardData);
  
  // Generate a valid card number (16 digits starting with appropriate prefix)
  const cardPrefixes: { [key: string]: string } = {
    'Visa': '4',
    'Mastercard': '5',
    'American Express': '3',
    'Discover': '6'
  };
  
  const prefix = cardPrefixes[cardData.card_type] || '4';
  const remainingDigits = 16 - prefix.length;
  const randomDigits = Array.from({ length: remainingDigits }, () => Math.floor(Math.random() * 10)).join('');
  const cardNumber = prefix + randomDigits;
  
  // Generate expiry date (3 years from now) in YYYY-MM-DD format
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 3);
  // Ensure we use the last day of the expiry month
  const year = expiryDate.getFullYear();
  const month = expiryDate.getMonth() + 1; // getMonth() returns 0-11
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  const expiryString = `${year}-${month.toString().padStart(2, '0')}-${lastDayOfMonth.toString().padStart(2, '0')}`;

  console.log('Generated card number:', cardNumber);
  console.log('Generated expiry date:', expiryString);

  const insertData = {
    user_id: cardData.user_id,
    card_type: cardData.card_type,
    card_number: cardNumber,
    credit_limit: Number(cardData.credit_limit),
    interest_rate: Number(cardData.interest_rate),
    current_balance: Number(cardData.current_balance),
    expiry_date: expiryString,
    status: 'active' as const
  };

  console.log('Insert data:', insertData);

  const { data, error } = await supabase
    .from('credit_cards')
    .insert(insertData)
    .select()
    .single();

  if (error) {
    console.error('Supabase error:', error);
    throw error;
  }
  
  console.log('Successfully created credit card:', data);
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
      credit_limit: Number(cardData.credit_limit),
      interest_rate: Number(cardData.interest_rate),
      current_balance: Number(cardData.current_balance),
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
