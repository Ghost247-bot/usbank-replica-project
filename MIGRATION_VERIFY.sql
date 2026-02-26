-- MIGRATION VERIFICATION
-- Run this after completing both migration steps to verify success

-- Check if all tables exist and have data
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
  'alerts' as table_name, COUNT(*) as record_count FROM alerts
ORDER BY table_name;

-- Sample data preview
SELECT '=== SAMPLE ACCOUNTS ===' as info;
SELECT id, account_number, account_type, name, balance, status 
FROM accounts 
LIMIT 3;

SELECT '=== SAMPLE TRANSACTIONS ===' as info;
SELECT id, account_id, amount, transaction_type, description, category, status, direction, created_at
FROM transactions 
ORDER BY created_at DESC 
LIMIT 5;

SELECT '=== SAMPLE BILLS ===' as info;
SELECT id, bill_name, provider, amount, due_date, status, is_auto_pay
FROM bills 
ORDER BY due_date ASC 
LIMIT 3;

SELECT '=== MIGRATION COMPLETE ===' as status;
