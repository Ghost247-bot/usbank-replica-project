-- Add category and direction to transactions table for analytics
ALTER TABLE transactions 
ADD COLUMN category TEXT,
ADD COLUMN direction TEXT NOT NULL DEFAULT 'debit';

-- Add check constraints
ALTER TABLE transactions 
ADD CONSTRAINT transactions_direction_check 
  CHECK (direction IN ('debit', 'credit'));

-- Create index for analytics queries
CREATE INDEX idx_transactions_user_category_date ON transactions(user_id, category, created_at);
CREATE INDEX idx_transactions_user_direction_date ON transactions(user_id, direction, created_at);

-- Update existing transactions to have direction based on transaction_type
UPDATE transactions 
SET direction = CASE 
  WHEN transaction_type IN ('deposit', 'refund') THEN 'credit'
  ELSE 'debit'
END;

-- Set default categories for existing transactions (optional, can be NULL)
UPDATE transactions 
SET category = CASE 
  WHEN transaction_type = 'deposit' THEN 'Income'
  WHEN transaction_type IN ('withdrawal', 'payment') THEN 'Banking'
  WHEN transaction_type = 'fee' THEN 'Fees'
  ELSE 'Other'
END
WHERE category IS NULL;
