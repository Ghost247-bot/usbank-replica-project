
export type BannerType = 'info' | 'warning' | 'error' | 'success';

export interface Banner {
  id: string;
  title: string;
  message: string;
  banner_type: BannerType;
  target_user_id?: string;
  is_active: boolean;
  expires_at?: string;
  created_at: string;
}

export interface UserProfile {
  id: string;
  first_name?: string;
  last_name?: string;
}

export interface CreateBannerForm {
  title: string;
  message: string;
  banner_type: BannerType;
  target_user_id: string;
  expires_at: string;
}
