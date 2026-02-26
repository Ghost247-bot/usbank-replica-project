-- Quick Database Setup Script
-- Run this in your Supabase SQL Editor to set up all tables and data

-- Step 1: Create all banking tables
-- (Copy contents from: supabase/migrations/20260226_create_banking_tables.sql)

-- Step 2: Insert sample data  
-- (Copy contents from: supabase/migrations/20260226_seed_banking_data.sql)

-- Step 3: Verify setup
SELECT 'Setup Complete!' as status;

-- Expected results after setup:
-- accounts: 6 records
-- transactions: 10 records  
-- bills: 6 records
-- transfers: 5 records
-- cards: 3 records
-- locations: 5 records
-- appointments: 4 records
-- documents: 5 records
-- alerts: 5 records

-- Quick verification query:
SELECT 
  'accounts' as table_name, COUNT(*) as count FROM accounts
UNION ALL SELECT 'transactions', COUNT(*) FROM transactions
UNION ALL SELECT 'bills', COUNT(*) FROM bills
UNION ALL SELECT 'transfers', COUNT(*) FROM transfers
UNION ALL SELECT 'cards', COUNT(*) FROM cards
UNION ALL SELECT 'locations', COUNT(*) FROM locations
UNION ALL SELECT 'appointments', COUNT(*) FROM appointments
UNION ALL SELECT 'documents', COUNT(*) FROM documents
UNION ALL SELECT 'alerts', COUNT(*) FROM alerts
ORDER BY table_name;
