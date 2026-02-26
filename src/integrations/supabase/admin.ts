// Admin client with service role key - for server-side operations only
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { env } from '@/config/environment';

// Check if service role key is available
const serviceRoleKey = env.serviceRoleKey;

// Only create admin client if service role key is available
export const supabaseAdmin = serviceRoleKey 
  ? createClient<Database>(
      env.supabase.url, 
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
  : null;

// Helper function to check if admin operations are available
export const isAdminAvailable = () => {
  return !!supabaseAdmin;
};

// Wrapper for admin operations with error handling
export const adminOperation = async <T>(
  operation: (client: typeof supabaseAdmin) => Promise<T>
): Promise<T> => {
  if (!isAdminAvailable()) {
    throw new Error('Admin operations not available - service role key not configured');
  }
  
  return operation(supabaseAdmin);
};
