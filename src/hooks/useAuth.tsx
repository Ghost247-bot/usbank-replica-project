
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { supabaseAdmin, adminOperation } from '@/integrations/supabase/admin';
import { logger } from '@/lib/logger';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, firstName: string, lastName: string, userData?: any) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

    // Function to ensure user has a profile
    const ensureProfileExists = async (userId: string, email?: string) => {
      try {
        const { data: existingProfile } = await supabase
          .from('profiles')
          .select('id, user_id, email')
          .or(`id.eq.${userId},user_id.eq.${userId}`)
          .maybeSingle();

        if (!existingProfile) {
          // Create profile if it doesn't exist
          const profileData: any = {
            user_id: userId,
            email: email || null,
            first_name: user?.user_metadata?.first_name || null,
            last_name: user?.user_metadata?.last_name || null,
            account_status: 'active',
            kyc_status: 'pending',
            risk_level: 'low',
          };

          // Also set id to userId to be safe if some components expect id to be userId
          profileData.id = userId;

          const { error: profileError } = await adminOperation(
            async (client) => client.from('profiles').insert(profileData)
          );

          if (profileError) {
            console.error('Error creating missing profile:', profileError);
          } else {
            console.log('Created missing profile for user:', userId);
          }
        } else if (email && !existingProfile.email) {
          // Update email if it's missing in profiles table but available in auth
          await adminOperation(
            async (client) => client.from('profiles').update({ email }).eq('user_id', userId)
          );
          console.log('Updated missing email in profile for user:', userId);
        }
      } catch (error) {
        console.error('Error checking profile existence:', error);
      }
    };

  useEffect(() => {
    // Check for existing session first
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
        } else {
          setSession(session);
          setUser(session?.user ?? null);
          
            // Ensure profile exists for logged in users (don't await to prevent blocking auth loading)
            if (session?.user) {
              ensureProfileExists(session.user.id, session.user.email || undefined)
                .catch(err => console.error('Failed to ensure profile:', err));
            }

        }
      } catch (error) {
        console.error('Error in getSession:', error);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        
        // Ensure profile exists when user signs in
        if (event === 'SIGNED_IN' && session?.user) {
          await ensureProfileExists(session.user.id, session.user.email || undefined);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signUp = async (email: string, password: string, firstName: string, lastName: string, userData?: any) => {
    try {
      // Add delay to prevent rapid successive requests
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // First create the user in Supabase auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            ...userData,
          },
        },
      });

      if (authError) {
        // Handle rate limit errors specifically
        if (authError.status === 429) {
          return { 
            error: { 
              message: "Too many signup attempts. Please wait a few minutes before trying again.",
              code: 'RATE_LIMIT_EXCEEDED'
            } 
          };
        }
        return { error: authError };
      }

      // If auth signup was successful, create a profile record
      if (authData.user) {
        console.log('✅ User created successfully');
        console.log('📝 User ID:', authData.user.id);
        console.log('📧 User email:', authData.user.email);
        
        // Create profile record with admin client
        const profileData = {
          id: authData.user.id,
          first_name: firstName,
          last_name: lastName,
          email: authData.user.email,
        };

        try {
          const { error: profileError } = await adminOperation(
            async (client) => client.from('profiles').insert(profileData)
          );

          if (profileError) {
            console.error('Profile creation error:', profileError);
            // User can still use basic functionality even if profile creation fails
          } else {
            console.log('✅ Profile created successfully');
          }
        } catch (adminError) {
          console.error('Admin operation failed:', adminError);
          // User can still use basic functionality even if profile creation fails
        }
      }

      return { error: null };
    } catch (error: any) {
      console.error('Signup error:', error);
      console.error('Error details:', {
        message: error?.message,
        status: error?.status,
        code: error?.code,
        name: error?.name,
        stack: error?.stack,
        toString: error?.toString?.(),
        json: JSON.stringify(error, null, 2)
      });
      
      // Handle network errors or other exceptions
      if (error?.status === 429) {
        return { 
          error: { 
            message: "Too many signup attempts. Please wait a few minutes before trying again.",
            code: 'RATE_LIMIT_EXCEEDED'
          } 
        };
      }

      // Handle other errors
      return { 
        error: { 
          message: error?.message || 'An unexpected error occurred during signup',
          code: error?.code || 'SIGNUP_ERROR',
          details: error
        } 
      };
    }
  };

const signOut = async () => {
  await supabase.auth.signOut();
};

const value = {
  user,
  session,
  signIn,
  signUp,
  signOut,
  loading,
};

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
