-- Create user_roles table for admin access control
CREATE TABLE IF NOT EXISTS user_roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'moderator', 'user')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role ON user_roles(role);

-- RLS Policies
-- Users can view their own roles
CREATE POLICY "Users can view own roles" ON user_roles
  FOR SELECT USING (auth.uid() = user_id);

-- Service role can manage all roles
CREATE POLICY "Service role can manage all roles" ON user_roles
  FOR ALL USING (auth.jwt()->>'role' = 'service_role');

-- Insert admin user (replace with actual admin user ID)
INSERT INTO user_roles (user_id, role)
VALUES ('00000000-0000-0000-0000-000000000000', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;

-- Grant permissions
GRANT SELECT, INSERT, UPDATE, DELETE ON user_roles TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON user_roles TO service_role;
GRANT USAGE ON user_roles TO authenticated;
GRANT USAGE ON user_roles TO service_role;
