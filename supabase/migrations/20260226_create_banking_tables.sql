-- Create comprehensive banking tables for full functionality

-- Create accounts table (checking, savings, credit cards, loans)
CREATE TABLE accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  account_number TEXT UNIQUE NOT NULL,
  account_type TEXT NOT NULL CHECK (account_type IN ('checking', 'savings', 'credit_card', 'loan', 'investment', 'escrow')),
  provider TEXT NOT NULL DEFAULT 'US Bank',
  name TEXT NOT NULL,
  balance NUMERIC NOT NULL DEFAULT 0,
  available_balance NUMERIC,
  credit_limit NUMERIC,
  interest_rate NUMERIC,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'closed', 'frozen')),
  is_primary BOOLEAN DEFAULT false,
  routing_number TEXT,
  opened_at TIMESTAMPTZ DEFAULT NOW(),
  closed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create transactions table (enhanced)
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  account_id UUID NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  transaction_id TEXT UNIQUE,
  amount NUMERIC NOT NULL,
  transaction_type TEXT NOT NULL CHECK (transaction_type IN ('deposit', 'withdrawal', 'transfer', 'payment', 'purchase', 'fee', 'interest', 'dividend')),
  description TEXT NOT NULL,
  merchant_name TEXT,
  category TEXT,
  subcategory TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
  direction TEXT NOT NULL CHECK (direction IN ('credit', 'debit')),
  balance_after NUMERIC,
  location TEXT,
  tags TEXT[],
  metadata JSONB,
  posted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create bills table
CREATE TABLE bills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  bill_name TEXT NOT NULL,
  provider TEXT NOT NULL,
  category TEXT NOT NULL,
  amount NUMERIC NOT NULL CHECK (amount > 0),
  due_date DATE NOT NULL,
  frequency TEXT CHECK (frequency IN ('once', 'weekly', 'biweekly', 'monthly', 'quarterly', 'yearly')),
  is_auto_pay BOOLEAN DEFAULT false,
  account_id UUID REFERENCES accounts(id),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'overdue', 'cancelled')),
  last_paid_date DATE,
  next_due_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create transfers table
CREATE TABLE transfers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  from_account_id UUID NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  to_account_id UUID NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  amount NUMERIC NOT NULL CHECK (amount > 0),
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
  scheduled_for TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  reference_number TEXT,
  fees NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create cards table (debit/credit cards)
CREATE TABLE cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  account_id UUID NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  card_number TEXT NOT NULL, -- encrypted
  card_type TEXT NOT NULL CHECK (card_type IN ('debit', 'credit')),
  brand TEXT CHECK (brand IN ('visa', 'mastercard', 'amex', 'discover')),
  last_four TEXT NOT NULL,
  expiration_date DATE NOT NULL,
  cvv TEXT, -- encrypted
  cardholder_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'blocked', 'expired', 'lost', 'stolen')),
  daily_limit NUMERIC,
  monthly_limit NUMERIC,
  is_contactless BOOLEAN DEFAULT true,
  is_virtual BOOLEAN DEFAULT false,
  issued_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create locations table (branches/ATMs)
CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('branch', 'atm', 'partner_atm')),
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  latitude NUMERIC,
  longitude NUMERIC,
  phone TEXT,
  hours JSONB,
  services TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create appointments table
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  location_id UUID REFERENCES locations(id) ON DELETE SET NULL,
  appointment_type TEXT NOT NULL CHECK (appointment_type IN ('consultation', 'account_opening', 'loan_application', 'notary', 'safe_deposit', 'general')),
  subject TEXT NOT NULL,
  description TEXT,
  scheduled_at TIMESTAMPTZ NOT NULL,
  duration_minutes INTEGER NOT NULL DEFAULT 30,
  status TEXT NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'completed', 'cancelled', 'no_show')),
  staff_member TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create documents table
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  document_type TEXT NOT NULL CHECK (document_type IN ('statement', 'tax_form', 'agreement', 'receipt', 'identification', 'other')),
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_size NUMERIC,
  file_type TEXT,
  category TEXT,
  tags TEXT[],
  is_sensitive BOOLEAN DEFAULT false,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create alerts table
CREATE TABLE alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  alert_type TEXT NOT NULL CHECK (alert_type IN ('balance_low', 'large_transaction', 'duplicate_charge', 'bill_due', 'card_usage', 'login_attempt', 'fraud_alert')),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  severity TEXT NOT NULL DEFAULT 'medium' CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  is_read BOOLEAN DEFAULT false,
  action_required BOOLEAN DEFAULT false,
  action_url TEXT,
  related_entity_type TEXT,
  related_entity_id UUID,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_accounts_user ON accounts(user_id);
CREATE INDEX idx_accounts_type ON accounts(account_type);
CREATE INDEX idx_transactions_user ON transactions(user_id);
CREATE INDEX idx_transactions_account ON transactions(account_id);
CREATE INDEX idx_transactions_category ON transactions(category);
CREATE INDEX idx_transactions_date ON transactions(created_at);
CREATE INDEX idx_bills_user ON bills(user_id);
CREATE INDEX idx_bills_due_date ON bills(due_date);
CREATE INDEX idx_transfers_user ON transfers(user_id);
CREATE INDEX idx_cards_user ON cards(user_id);
CREATE INDEX idx_cards_account ON cards(account_id);
CREATE INDEX idx_locations_type ON locations(type);
CREATE INDEX idx_locations_active ON locations(is_active);
CREATE INDEX idx_appointments_user ON appointments(user_id);
CREATE INDEX idx_appointments_scheduled ON appointments(scheduled_at);
CREATE INDEX idx_documents_user ON documents(user_id);
CREATE INDEX idx_documents_type ON documents(document_type);
CREATE INDEX idx_alerts_user ON alerts(user_id);
CREATE INDEX idx_alerts_read ON alerts(is_read);

-- Enable RLS
ALTER TABLE accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE bills ENABLE ROW LEVEL SECURITY;
ALTER TABLE transfers ENABLE ROW LEVEL SECURITY;
ALTER TABLE cards ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;
-- locations table is public (no RLS)

-- RLS policies for accounts
CREATE POLICY "Users can view own accounts" ON accounts
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own accounts" ON accounts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own accounts" ON accounts
  FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own accounts" ON accounts
  FOR DELETE USING (auth.uid() = user_id);

-- RLS policies for transactions
CREATE POLICY "Users can view own transactions" ON transactions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions" ON transactions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own transactions" ON transactions
  FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- RLS policies for bills
CREATE POLICY "Users can manage own bills" ON bills
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- RLS policies for transfers
CREATE POLICY "Users can manage own transfers" ON transfers
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- RLS policies for cards
CREATE POLICY "Users can manage own cards" ON cards
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- RLS policies for appointments
CREATE POLICY "Users can manage own appointments" ON appointments
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- RLS policies for documents
CREATE POLICY "Users can manage own documents" ON documents
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- RLS policies for alerts
CREATE POLICY "Users can manage own alerts" ON alerts
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Service role policies for all tables
CREATE POLICY "Service role full access" ON accounts FOR ALL USING (role() = 'service_role');
CREATE POLICY "Service role full access" ON transactions FOR ALL USING (role() = 'service_role');
CREATE POLICY "Service role full access" ON bills FOR ALL USING (role() = 'service_role');
CREATE POLICY "Service role full access" ON transfers FOR ALL USING (role() = 'service_role');
CREATE POLICY "Service role full access" ON cards FOR ALL USING (role() = 'service_role');
CREATE POLICY "Service role full access" ON appointments FOR ALL USING (role() = 'service_role');
CREATE POLICY "Service role full access" ON documents FOR ALL USING (role() = 'service_role');
CREATE POLICY "Service role full access" ON alerts FOR ALL USING (role() = 'service_role');
