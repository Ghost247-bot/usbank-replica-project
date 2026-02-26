-- Create income_events table for income tracking
CREATE TABLE income_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount NUMERIC NOT NULL CHECK (amount > 0),
  source TEXT NOT NULL CHECK (source IN ('payroll', 'interest', 'dividend', 'refund', 'other')),
  description TEXT,
  received_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_income_events_user_date ON income_events(user_id, received_at DESC);
CREATE INDEX idx_income_events_user_source ON income_events(user_id, source);

-- Enable RLS
ALTER TABLE income_events ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Users can view own income events" ON income_events
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own income events" ON income_events
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own income events" ON income_events
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own income events" ON income_events
  FOR DELETE
  USING (auth.uid() = user_id);

-- Service role policy for system operations
CREATE POLICY "Service role can manage all income events" ON income_events
  FOR ALL
  USING (role() = 'service_role')
  WITH CHECK (role() = 'service_role');
