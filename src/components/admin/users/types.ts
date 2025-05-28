
export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  is_frozen: boolean;
  freeze_reason?: string;
  created_at: string;
  email_confirmed_at?: string;
  last_sign_in_at?: string;
}
