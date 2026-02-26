-- Add email column to profiles table
ALTER TABLE profiles 
ADD COLUMN email TEXT;

-- Create a unique index on email to ensure no duplicates
CREATE UNIQUE INDEX profiles_email_idx ON profiles(email) WHERE email IS NOT NULL;

-- Update existing profiles with email from auth.users
UPDATE profiles 
SET email = auth.users.email 
FROM auth.users 
WHERE profiles.id = auth.users.id AND auth.users.email IS NOT NULL;
