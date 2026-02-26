-- Create profiles table for user management
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  date_of_birth DATE,
  address TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  country TEXT DEFAULT 'USA',
  occupation TEXT,
  annual_income NUMERIC,
  credit_score INTEGER,
  account_status TEXT NOT NULL DEFAULT 'active' CHECK (account_status IN ('active', 'inactive', 'suspended', 'pending')),
  kyc_status TEXT NOT NULL DEFAULT 'pending' CHECK (kyc_status IN ('pending', 'verified', 'rejected')),
  risk_level TEXT NOT NULL DEFAULT 'low' CHECK (risk_level IN ('low', 'medium', 'high')),
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create indexes
CREATE INDEX idx_profiles_user ON profiles(user_id);
CREATE INDEX idx_profiles_email ON profiles(email);
CREATE INDEX idx_profiles_status ON profiles(account_status);
CREATE INDEX idx_profiles_kyc ON profiles(kyc_status);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Service role full access" ON profiles
  FOR ALL USING (role() = 'service_role');

-- Insert sample profile data for test user
INSERT INTO profiles (
  user_id, first_name, last_name, email, phone, date_of_birth, 
  address, city, state, zip_code, occupation, annual_income, 
  credit_score, account_status, kyc_status, risk_level
) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'John',
  'Doe',
  'john.doe@example.com',
  '+1-555-0123',
  '1985-06-15',
  '123 Main Street',
  'Anytown',
  'CA',
  '90210',
  'Software Engineer',
  85000,
  750,
  'active',
  'verified',
  'low'
) ON CONFLICT (user_id) DO UPDATE SET
  updated_at = NOW();

SELECT '✅ profiles table created and sample data inserted' as status;
