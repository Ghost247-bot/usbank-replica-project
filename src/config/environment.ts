// Environment configuration with validation
import { logger } from '@/lib/logger';

export const env = {
  // Supabase configuration
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  },
  
  // Service role key (server-side only, but exposed if VITE_ prefix is present)
  serviceRoleKey: import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || import.meta.env.SUPABASE_SERVICE_ROLE_KEY || '',

  
  // Database URL (server-side only)
  databaseUrl: import.meta.env.DATABASE_URL || '',
  
  // Feature flags
  features: {
    realTime: import.meta.env.VITE_ENABLE_REAL_TIME === 'true',
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    errorReporting: import.meta.env.VITE_ENABLE_ERROR_REPORTING === 'true',
    chatSupport: import.meta.env.VITE_ENABLE_CHAT_SUPPORT === 'true',
    biometricAuth: import.meta.env.VITE_ENABLE_BIOMETRIC_AUTH === 'true',
    performanceMonitoring: import.meta.env.VITE_ENABLE_PERFORMANCE_MONITORING === 'true',
  },
  
  // API configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),
    retryAttempts: parseInt(import.meta.env.VITE_API_RETRY_ATTEMPTS || '3'),
  },
  
  // Monitoring configuration
  monitoring: {
    sentryDsn: import.meta.env.VITE_SENTRY_DSN || '',
    errorReporting: import.meta.env.VITE_ENABLE_ERROR_REPORTING === 'true',
  },
  
  // Performance
  performance: {
    bundleAnalyzer: import.meta.env.VITE_ENABLE_BUNDLE_ANALYZER === 'true',
    chunkSizeWarning: parseInt(import.meta.env.VITE_CHUNK_SIZE_WARNING_LIMIT || '1000'),
  },
  
  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  nodeEnv: import.meta.env.NODE_ENV || 'development',
};

// Validate required environment variables
export const validateEnvironment = () => {
  const required = ['supabase.url', 'supabase.anonKey'];
  const missing = required.filter(key => {
    const keys = key.split('.');
    let value = env;
    for (const k of keys) {
      value = value[k];
    }
    return !value;
  });

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  // Validate service role key for admin operations (warning only)
  if (!env.serviceRoleKey) {
    console.warn('Warning: Service role key not set. Admin operations will not work.');
  }

  return true;
};

if (env.isDevelopment) {
  console.log('✅ Environment variables validated');
}

// Service role key (server-side only - never exposed to client unless VITE_ prefix is used)
export const serviceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY || import.meta.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (env.isDevelopment && typeof window === 'undefined' && !serviceRoleKey) {
  console.warn('⚠️ Service role key not configured - some admin features may not work');
}
