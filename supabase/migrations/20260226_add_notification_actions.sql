-- Add action fields to notifications table
ALTER TABLE notifications 
ADD COLUMN action_label TEXT,
ADD COLUMN action_url TEXT;

-- Create index for notification queries
CREATE INDEX idx_notifications_user_read_created ON notifications(user_id, is_read, created_at DESC);
CREATE INDEX idx_notifications_user_category_created ON notifications(user_id, category, created_at DESC);

-- Add check constraint for action_url format (optional)
ALTER TABLE notifications 
ADD CONSTRAINT notifications_action_url_check 
  CHECK (
    action_url IS NULL OR 
    (action_url ~ '^https?://.*' OR action_url ~ '^/' OR action_url ~ '^#')
  );
