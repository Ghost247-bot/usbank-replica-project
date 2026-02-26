# Database Migration Commands

## 🚀 Required SQL Commands

Please run these commands in your Supabase Dashboard → SQL Editor:

### 1. Add Email Column to Profiles Table

```sql
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
```

### 2. Fix RLS Policies for Profiles Table

```sql
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
```

## 📋 Steps to Execute

1. **Go to Supabase Dashboard**
   - Navigate to https://supabase.com/dashboard
   - Select your project: `mkhowtvnvpzvvgpjkkmh`

2. **Open SQL Editor**
   - In the left sidebar, click on "SQL Editor"
   - Click "New query"

3. **Run the Commands**
   - Copy and paste the first SQL block (email column)
   - Click "Run" to execute
   - Copy and paste the second SQL block (RLS policies)
   - Click "Run" to execute

4. **Verify Success**
   - Check that both commands executed without errors
   - You should see "Success" messages for each command

## 📝 After Running Migrations

Once you've run the SQL commands, update the auth code to include the email field:

### Update useAuth.tsx

In `src/hooks/useAuth.tsx`, find these lines and uncomment the email field:

```typescript
// In the signUp function, around line 165:
// Remove this line:
// TODO: Add email back after running the migration

// And add this:
profileData.email = email;
```

### Update ensureProfileExists function

Similarly, in the `ensureProfileExists` function, add the email field:

```typescript
// Around line 55, add:
if (email) {
  profileData.email = email;
}
```

## 🧪 Testing After Migrations

1. **Test Signup**
   - Go to http://localhost:8081
   - Try creating a new account
   - Check console for "Full profile created successfully"

2. **Verify Email in Database**
   - In Supabase dashboard, go to "Table Editor"
   - Select the "profiles" table
   - Verify that new profiles have email addresses

3. **Test Sign In**
   - Try signing in with the new account
   - Should work without any errors

## 🔧 Troubleshooting

If you get errors:

1. **"column 'email' already exists"** - Skip the email column migration
2. **"policy already exists"** - Skip the RLS policy migration  
3. **"permission denied"** - Make sure you're using the service role key
4. **Network errors** - Check your internet connection and try again

## ✅ Success Indicators

You'll know it worked when:

- ✅ No SQL errors in the dashboard
- ✅ New signups create profiles with email addresses
- ✅ No more RLS policy violations in console
- ✅ Users can sign up and sign in successfully
