const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://mkhowtvnvpzvvgpjkkmh.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raG93dHZudnB6dnZncGpra21oIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQyNjM1NCwiZXhwIjoyMDY0MDAyMzU0fQ.qL1mY7mJ5X8nF2H3D9kPw1nB7vC6sT2uR8fY9zX3wKc";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function runMigration() {
  try {
    console.log('Adding email column to profiles table...');
    
    // Add email column
    const { error: alterError } = await supabase.rpc('exec_sql', {
      sql: 'ALTER TABLE profiles ADD COLUMN email TEXT;'
    });
    
    if (alterError && !alterError.message.includes('already exists')) {
      console.error('Error adding email column:', alterError);
    } else {
      console.log('Email column added successfully');
    }
    
    // Create unique index
    const { error: indexError } = await supabase.rpc('exec_sql', {
      sql: 'CREATE UNIQUE INDEX IF NOT EXISTS profiles_email_idx ON profiles(email) WHERE email IS NOT NULL;'
    });
    
    if (indexError) {
      console.error('Error creating index:', indexError);
    } else {
      console.log('Email index created successfully');
    }
    
    // Update existing profiles with email from auth.users
    const { error: updateError } = await supabase.rpc('exec_sql', {
      sql: `UPDATE profiles 
            SET email = auth.users.email 
            FROM auth.users 
            WHERE profiles.id = auth.users.id AND auth.users.email IS NOT NULL;`
    });
    
    if (updateError) {
      console.error('Error updating existing profiles:', updateError);
    } else {
      console.log('Existing profiles updated successfully');
    }
    
    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

runMigration();
