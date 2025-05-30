
export interface Account {
  id: string;
  account_number: string;
  account_name: string;
  account_type: 'checking' | 'savings' | 'investment' | 'escrow' | 'credit_card' | 'loan';
  balance: number;
  is_frozen: boolean;
  freeze_reason?: string;
  user_id: string;
  status: string;
  profiles?: {
    first_name?: string;
    last_name?: string;
  };
}

export interface CreditCard {
  id: string;
  card_number: string;
  card_type: string;
  credit_limit: number;
  current_balance: number;
  is_frozen: boolean;
  freeze_reason?: string;
  user_id: string;
  status: string;
  profiles?: {
    first_name?: string;
    last_name?: string;
  };
}

export type AccountTab = 'accounts' | 'cards';
