-- Create user_roles table for admin access control
CREATE TABLE IF NOT EXISTS user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('admin', 'user', 'manager')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Users can view own roles" ON user_roles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Service role full access" ON user_roles
  FOR ALL USING (role() = 'service_role');

-- Insert admin user for development (using the test user ID)
INSERT INTO user_roles (user_id, role) 
VALUES ('00000000-0000-0000-0000-000000000001', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;

SELECT '✅ user_roles table created and admin user added' as status;
