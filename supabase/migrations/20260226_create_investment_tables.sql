-- Create investment_accounts table
CREATE TABLE investment_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  provider TEXT NOT NULL,
  name TEXT NOT NULL,
  account_number TEXT,
  total_value NUMERIC NOT NULL DEFAULT 0 CHECK (total_value >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create investment_positions table
CREATE TABLE investment_positions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  investment_account_id UUID NOT NULL REFERENCES investment_accounts(id) ON DELETE CASCADE,
  asset_class TEXT NOT NULL CHECK (asset_class IN ('stocks', 'bonds', 'real_estate', 'crypto', 'cash', 'commodities', 'other')),
  symbol TEXT,
  quantity NUMERIC NOT NULL DEFAULT 0,
  current_price NUMERIC NOT NULL DEFAULT 0 CHECK (current_price >= 0),
  market_value NUMERIC GENERATED ALWAYS AS (quantity * current_price) STORED,
  pct_change NUMERIC,
  last_updated TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_investment_accounts_user ON investment_accounts(user_id);
CREATE INDEX idx_investment_positions_account ON investment_positions(investment_account_id);
CREATE INDEX idx_investment_positions_asset_class ON investment_positions(asset_class);

-- Enable RLS
ALTER TABLE investment_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE investment_positions ENABLE ROW LEVEL SECURITY;

-- RLS policies for investment_accounts
CREATE POLICY "Users can view own investment accounts" ON investment_accounts
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own investment accounts" ON investment_accounts
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own investment accounts" ON investment_accounts
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own investment accounts" ON investment_accounts
  FOR DELETE
  USING (auth.uid() = user_id);

-- RLS policies for investment_positions (cascade through account)
CREATE POLICY "Users can view own investment positions" ON investment_positions
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM investment_accounts 
      WHERE investment_accounts.id = investment_positions.investment_account_id 
      AND investment_accounts.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert own investment positions" ON investment_positions
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM investment_accounts 
      WHERE investment_accounts.id = investment_positions.investment_account_id 
      AND investment_accounts.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update own investment positions" ON investment_positions
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM investment_accounts 
      WHERE investment_accounts.id = investment_positions.investment_account_id 
      AND investment_accounts.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM investment_accounts 
      WHERE investment_accounts.id = investment_positions.investment_account_id 
      AND investment_accounts.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete own investment positions" ON investment_positions
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM investment_accounts 
      WHERE investment_accounts.id = investment_positions.investment_account_id 
      AND investment_accounts.user_id = auth.uid()
    )
  );

-- Service role policies
CREATE POLICY "Service role can manage all investment accounts" ON investment_accounts
  FOR ALL
  USING (role() = 'service_role')
  WITH CHECK (role() = 'service_role');

CREATE POLICY "Service role can manage all investment positions" ON investment_positions
  FOR ALL
  USING (role() = 'service_role')
  WITH CHECK (role() = 'service_role');
