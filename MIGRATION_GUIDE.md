# Database Migration Guide

## 🚀 Step-by-Step Migration Process

### 1. Access Your Supabase Dashboard
1. Go to: https://mkhowtvnvpzvvgpjkkmh.supabase.co
2. Click on "SQL Editor" in the left sidebar
3. Click "New query" to open the SQL editor

### 2. Run Migration #1: Create Tables
Copy and paste the entire contents of `supabase/migrations/20260226_create_banking_tables.sql` into the SQL editor and click "Run".

This will create:
- ✅ accounts table
- ✅ transactions table  
- ✅ bills table
- ✅ transfers table
- ✅ cards table
- ✅ locations table
- ✅ appointments table
- ✅ documents table
- ✅ alerts table
- ✅ All indexes and RLS policies

### 3. Run Migration #2: Seed Data
Copy and paste the entire contents of `supabase/migrations/20260226_seed_banking_data.sql` into the SQL editor and click "Run".

This will insert:
- ✅ 6 sample accounts
- ✅ 10 sample transactions
- ✅ 6 sample bills
- ✅ 5 sample transfers
- ✅ 3 sample cards
- ✅ 5 sample locations
- ✅ 4 sample appointments
- ✅ 5 sample documents
- ✅ 5 sample alerts

### 4. Verify Migration Success
Run this verification query:

```sql
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
```

Expected results:
- accounts: 6
- transactions: 10
- bills: 6
- transfers: 5
- cards: 3
- locations: 5
- appointments: 4
- documents: 5
- alerts: 5

## 🔧 Migration Scripts Ready

The migration files are prepared and ready to execute:

1. **Table Creation**: `supabase/migrations/20260226_create_banking_tables.sql`
2. **Data Seeding**: `supabase/migrations/20260226_seed_banking_data.sql`

## ⚠️ Important Notes

- Run migrations in order (tables first, then data)
- Each migration should be executed completely before starting the next
- If you get errors, check the SQL syntax and table dependencies
- The migrations include RLS policies for security

## 🎯 After Migration

Once complete, your dashboard will display real banking data!
