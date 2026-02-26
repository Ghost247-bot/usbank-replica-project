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
