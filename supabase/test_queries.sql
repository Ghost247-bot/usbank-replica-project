-- Test connection and basic data retrieval
-- This query can be run in the Supabase SQL Editor to verify tables exist and have data

-- Check if tables exist
SELECT table_name, table_type 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('accounts', 'transactions', 'bills', 'transfers', 'cards', 'locations', 'appointments', 'documents', 'alerts')
ORDER BY table_name;

-- Check sample data counts
SELECT 
  'accounts' as table_name, COUNT(*) as record_count FROM accounts
UNION ALL
SELECT 
  'transactions' as table_name, COUNT(*) as record_count FROM transactions
UNION ALL
SELECT 
  'bills' as table_name, COUNT(*) as record_count FROM bills
UNION ALL
SELECT 
  'transfers' as table_name, COUNT(*) as record_count FROM transfers
UNION ALL
SELECT 
  'cards' as table_name, COUNT(*) as record_count FROM cards
UNION ALL
SELECT 
  'locations' as table_name, COUNT(*) as record_count FROM locations
UNION ALL
SELECT 
  'appointments' as table_name, COUNT(*) as record_count FROM appointments
UNION ALL
SELECT 
  'documents' as table_name, COUNT(*) as record_count FROM documents
UNION ALL
SELECT 
  'alerts' as table_name, COUNT(*) as record_count FROM alerts;

-- Sample account data
SELECT id, account_number, account_type, name, balance, status 
FROM accounts 
LIMIT 3;

-- Sample transaction data
SELECT id, account_id, amount, transaction_type, description, category, status, direction, created_at
FROM transactions 
ORDER BY created_at DESC 
LIMIT 5;

-- Sample bills data
SELECT id, bill_name, provider, amount, due_date, status, is_auto_pay
FROM bills 
ORDER BY due_date ASC 
LIMIT 3;
