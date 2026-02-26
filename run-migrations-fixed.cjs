const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Supabase configuration
const SUPABASE_URL = "https://mkhowtvnvpzvvgpjkkmh.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raG93dHZudnB6dnZncGpra21oIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQyNjM1NCwiZXhwIjoyMDY0MDAyMzU0fQ.qL1mY7mJ5X8nF2H3D9kPw1nB7vC6sT2uR8fY9zX3wKc";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function executeSQLDirectly(sql) {
  try {
    // Since we can't use exec_sql, let's create a manual SQL runner
    console.log('📋 MANUAL SQL EXECUTION REQUIRED:');
    console.log('Please run the following SQL in your Supabase dashboard SQL Editor:\n');
    console.log(sql);
    console.log('\n' + '='.repeat(80));
    return true;
  } catch (error) {
    console.error('❌ SQL execution failed:', error.message);
    return false;
  }
}

async function runEmailMigration() {
  console.log('🔄 Running email column migration...');
  
  const emailSQL = `
-- Add email column to profiles table
ALTER TABLE profiles 
ADD COLUMN email TEXT;

-- Create a unique index on email to ensure no duplicates
CREATE UNIQUE INDEX IF NOT EXISTS profiles_email_idx ON profiles(email) WHERE email IS NOT NULL;

-- Update existing profiles with email from auth.users
UPDATE profiles 
SET email = auth.users.email 
FROM auth.users 
WHERE profiles.id = auth.users.id AND auth.users.email IS NOT NULL;
`;

  return await executeSQLDirectly(emailSQL);
}

async function runRLSMigration() {
  console.log('🔄 Running RLS policies migration...');
  
  const rlsSQL = `
-- Fix RLS policies for profiles table

-- First, disable RLS temporarily to create policies
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;

-- Create policy to allow users to insert their own profile
CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create policy to allow users to view their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Create policy to allow users to update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Create policy to allow users to delete their own profile
CREATE POLICY "Users can delete own profile" ON profiles
  FOR DELETE
  USING (auth.uid() = id);

-- Re-enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Allow service role to bypass RLS for admin operations
CREATE POLICY "Service role can manage all profiles" ON profiles
  FOR ALL
  USING (role() = 'service_role')
  WITH CHECK (role() = 'service_role');
`;

  return await executeSQLDirectly(rlsSQL);
}

async function checkCurrentState() {
  console.log('🔍 Checking current database state...');
  
  try {
    // Test if we can access the profiles table
    const { data, error } = await supabase
      .from('profiles')
      .select('id, first_name, last_name')
      .limit(1);
    
    if (error) {
      console.log('❌ Cannot access profiles table:', error.message);
      return false;
    } else {
      console.log('✅ Profiles table is accessible');
      console.log(`📊 Found ${data.length} profile(s) in the table`);
      return true;
    }
  } catch (error) {
    console.log('❌ Error checking profiles table:', error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Database Migration Runner\n');
  
  // Check current state
  const isAccessible = await checkCurrentState();
  
  if (!isAccessible) {
    console.log('\n❌ Cannot proceed with migrations - profiles table not accessible');
    return;
  }
  
  console.log('\n📋 MIGRATIONS TO RUN MANUALLY:');
  console.log('='.repeat(80));
  
  // Run email migration
  await runEmailMigration();
  
  console.log('\n');
  
  // Run RLS migration  
  await runRLSMigration();
  
  console.log('\n📋 NEXT STEPS:');
  console.log('1. Copy the SQL statements above');
  console.log('2. Go to your Supabase dashboard');
  console.log('3. Navigate to SQL Editor');
  console.log('4. Paste and execute the SQL statements');
  console.log('5. After running migrations, update the auth code to include email field');
  
  console.log('\n📝 TO UPDATE AUTH CODE AFTER MIGRATIONS:');
  console.log('1. Uncomment the email field in useAuth.tsx');
  console.log('2. Remove the "TODO: Add email back after running the migration" comments');
  console.log('3. Test signup to ensure email is saved in profiles table');
  
  console.log('\n✨ Migration runner completed!');
}

main().catch(error => {
  console.error('❌ Migration runner failed:', error);
});
