
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  user_id: string;
  is_read: boolean;
  created_at: string;
}

export interface NotificationFormData {
  title: string;
  message: string;
  type: string;
  target_user_id: string;
  send_to_all: boolean;
}

export interface User {
  id: string;
  name: string;
}
