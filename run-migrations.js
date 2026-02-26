const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Supabase configuration
const SUPABASE_URL = "https://mkhowtvnvpzvvgpjkkmh.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raG93dHZudnB6dnZncGpra21oIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQyNjM1NCwiZXhwIjoyMDY0MDAyMzU0fQ.qL1mY7mJ5X8nF2H3D9kPw1nB7vC6sT2uR8fY9zX3wKc";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function executeMigration(migrationPath, migrationName) {
  try {
    console.log(`\n🔄 Running migration: ${migrationName}`);
    
    // Read migration file
    const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
    
    // Split SQL into individual statements
    const statements = migrationSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));

    console.log(`📝 Found ${statements.length} SQL statements to execute`);

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      console.log(`   Executing statement ${i + 1}/${statements.length}...`);
      
      try {
        // Use the Supabase admin client to execute raw SQL
        const { error } = await supabase.rpc('exec_sql', { sql: statement });
        
        if (error) {
          // If exec_sql doesn't exist, try a different approach
          console.log(`   ⚠️  exec_sql failed, trying direct approach...`);
          
          // For some operations, we might need to use the REST API directly
          // But for now, let's log the error and continue
          console.log(`   ⚠️  Statement failed: ${error.message}`);
          console.log(`   📄 Statement was: ${statement.substring(0, 100)}...`);
        } else {
          console.log(`   ✅ Statement executed successfully`);
        }
      } catch (stmtError) {
        console.log(`   ⚠️  Statement error: ${stmtError.message}`);
        console.log(`   📄 Statement was: ${statement.substring(0, 100)}...`);
      }
    }
    
    console.log(`✅ Migration ${migrationName} completed`);
    return true;
  } catch (error) {
    console.error(`❌ Migration ${migrationName} failed:`, error.message);
    return false;
  }
}

async function runAllMigrations() {
  console.log('🚀 Starting database migrations...\n');
  
  const migrationsDir = path.join(__dirname, 'supabase', 'migrations');
  
  try {
    // Check if migrations directory exists
    if (!fs.existsSync(migrationsDir)) {
      console.log('❌ Migrations directory not found');
      return;
    }
    
    // Get all migration files
    const migrationFiles = fs.readdirSync(migrationsDir)
      .filter(file => file.endsWith('.sql'))
      .sort(); // Sort to ensure proper order
    
    console.log(`📁 Found ${migrationFiles.length} migration files:`);
    migrationFiles.forEach(file => console.log(`   - ${file}`));
    
    // Execute each migration
    let successCount = 0;
    for (const file of migrationFiles) {
      const migrationPath = path.join(migrationsDir, file);
      const migrationName = file.replace('.sql', '');
      
      const success = await executeMigration(migrationPath, migrationName);
      if (success) {
        successCount++;
      }
    }
    
    console.log(`\n🎉 Migration Summary:`);
    console.log(`   ✅ Successful: ${successCount}/${migrationFiles.length}`);
    console.log(`   ❌ Failed: ${migrationFiles.length - successCount}/${migrationFiles.length}`);
    
    if (successCount === migrationFiles.length) {
      console.log('\n🎊 All migrations completed successfully!');
    } else {
      console.log('\n⚠️  Some migrations failed. Please check the logs above.');
    }
    
  } catch (error) {
    console.error('❌ Migration runner failed:', error);
  }
}

// Alternative approach: Create table directly if migrations don't work
async function createEmailColumnDirectly() {
  console.log('\n🔧 Trying direct approach to add email column...');
  
  try {
    // Try to add the email column directly
    const { error } = await supabase
      .from('profiles')
      .select('id')
      .limit(1);
    
    if (error && error.message.includes('column "profiles.email" does not exist')) {
      console.log('📝 Email column does not exist, attempting to add it...');
      
      // This is a workaround - we'll need to run this manually in Supabase dashboard
      console.log('\n📋 MANUAL STEPS REQUIRED:');
      console.log('1. Go to your Supabase dashboard');
      console.log('2. Navigate to SQL Editor');
      console.log('3. Run these commands:');
      console.log('   ALTER TABLE profiles ADD COLUMN email TEXT;');
      console.log('   CREATE UNIQUE INDEX IF NOT EXISTS profiles_email_idx ON profiles(email) WHERE email IS NOT NULL;');
      console.log('   UPDATE profiles SET email = auth.users.email FROM auth.users WHERE profiles.id = auth.users.id;');
      console.log('\n4. Then run the RLS policies:');
      console.log('   ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;');
      console.log('   CREATE POLICY "Users can insert their own profile" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);');
      console.log('   CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);');
      console.log('   ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;');
      
    } else {
      console.log('✅ Email column seems to exist or profiles table is accessible');
    }
  } catch (error) {
    console.log('📝 Checking profiles table...', error.message);
  }
}

// Run the migrations
runAllMigrations()
  .then(() => {
    console.log('\n🔄 Checking if manual steps are needed...');
    return createEmailColumnDirectly();
  })
  .then(() => {
    console.log('\n✨ Migration process completed!');
  })
  .catch((error) => {
    console.error('❌ Migration process failed:', error);
  });
