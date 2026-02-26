
export interface User {
  id: string;
  user_id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  account_status?: string;
  kyc_status?: string;
  risk_level?: string;
  last_login?: string;
  created_at: string;
  updated_at?: string;
  role?: string;
  is_frozen?: boolean;
  freeze_reason?: string;
  email_confirmed_at?: string;
  last_sign_in_at?: string;
  user_status?: {
    is_frozen: boolean;
    freeze_reason?: string;
  };
}
