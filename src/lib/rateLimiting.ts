// Comprehensive rate limiting system
interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  skipSuccessfulRequests?: boolean; // Skip counting successful requests
  skipFailedRequests?: boolean; // Skip counting failed requests
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
  lastRequest: number;
}

class RateLimiter {
  private store = new Map<string, RateLimitEntry>();
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
    this.cleanup(); // Start cleanup interval
  }

  // Check if request is allowed
  isAllowed(key: string, skipCheck?: boolean): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const entry = this.store.get(key);

    if (!entry) {
      // First request
      this.store.set(key, {
        count: 1,
        resetTime: now + this.config.windowMs,
        lastRequest: now,
      });
      return {
        allowed: true,
        remaining: this.config.maxRequests - 1,
        resetTime: now + this.config.windowMs,
      };
    }

    // Check if window has expired
    if (now > entry.resetTime) {
      this.store.set(key, {
        count: 1,
        resetTime: now + this.config.windowMs,
        lastRequest: now,
      });
      return {
        allowed: true,
        remaining: this.config.maxRequests - 1,
        resetTime: now + this.config.windowMs,
      };
    }

    // Check if under limit
    if (entry.count < this.config.maxRequests) {
      entry.count++;
      entry.lastRequest = now;
      return {
        allowed: true,
        remaining: this.config.maxRequests - entry.count,
        resetTime: entry.resetTime,
      };
    }

    // Rate limited
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Record successful/failed request
  recordRequest(key: string, success: boolean) {
    const entry = this.store.get(key);
    if (!entry) return;

    if (success && this.config.skipSuccessfulRequests) {
      entry.count = Math.max(0, entry.count - 1);
    } else if (!success && this.config.skipFailedRequests) {
      entry.count = Math.max(0, entry.count - 1);
    }
  }

  // Get current status
  getStatus(key: string): { count: number; remaining: number; resetTime: number } | null {
    const entry = this.store.get(key);
    if (!entry) return null;

    const now = Date.now();
    if (now > entry.resetTime) return null;

    return {
      count: entry.count,
      remaining: Math.max(0, this.config.maxRequests - entry.count),
      resetTime: entry.resetTime,
    };
  }

  // Reset rate limit for a key
  reset(key: string) {
    this.store.delete(key);
  }

  // Cleanup expired entries
  private cleanup() {
    setInterval(() => {
      const now = Date.now();
      for (const [key, entry] of this.store.entries()) {
        if (now > entry.resetTime) {
          this.store.delete(key);
        }
      }
    }, 60000); // Cleanup every minute
  }

  // Get statistics
  getStats(): { totalEntries: number; activeEntries: number } {
    const now = Date.now();
    const activeEntries = Array.from(this.store.values()).filter(
      entry => now <= entry.resetTime
    ).length;

    return {
      totalEntries: this.store.size,
      activeEntries,
    };
  }

  // Clear all rate limit entries
  clear(): void {
    this.store.clear();
  }
}

// Predefined rate limiters for different use cases
export const rateLimiters = {
  // Authentication endpoints - different limits for dev vs prod
  auth: new RateLimiter({
    windowMs: import.meta.env.DEV ? 60 * 1000 : 15 * 60 * 1000, // 1 min dev, 15 min prod
    maxRequests: import.meta.env.DEV ? 20 : 5, // 20 attempts per minute dev, 5 per 15 min prod
    skipSuccessfulRequests: false,
    skipFailedRequests: import.meta.env.DEV ? false : true, // Count failed attempts in dev
  }),

  // General API calls
  api: new RateLimiter({
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 100, // 100 requests per minute
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
  }),

  // Form submissions
  forms: new RateLimiter({
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 10, // 10 form submissions per minute
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
  }),

  // File uploads
  uploads: new RateLimiter({
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 3, // 3 uploads per minute
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
  }),

  // Search requests
  search: new RateLimiter({
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 30, // 30 searches per minute
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
  }),
};

// Hook for rate limiting in React components
export const useRateLimit = (limiter: RateLimiter, key: string) => {
  const checkRateLimit = () => {
    const result = limiter.isAllowed(key);
    return result;
  };

  const recordSuccess = () => {
    limiter.recordRequest(key, true);
  };

  const recordFailure = () => {
    limiter.recordRequest(key, false);
  };

  const getStatus = () => {
    return limiter.getStatus(key);
  };

  const reset = () => {
    limiter.reset(key);
  };

  return {
    checkRateLimit,
    recordSuccess,
    recordFailure,
    getStatus,
    reset,
  };
};

// Rate limiting middleware for API calls
export const withRateLimit = async <T>(
  limiter: RateLimiter,
  key: string,
  fn: () => Promise<T>,
  options?: {
    onSuccess?: (result: T) => void;
    onFailure?: (error: Error) => void;
    onRateLimit?: (resetTime: number) => void;
  }
): Promise<T> => {
  const rateLimitResult = limiter.isAllowed(key);
  
  if (!rateLimitResult.allowed) {
    const error = new Error('Rate limit exceeded');
    (error as any).resetTime = rateLimitResult.resetTime;
    (error as any).remaining = rateLimitResult.remaining;
    
    if (options?.onRateLimit) {
      options.onRateLimit(rateLimitResult.resetTime);
    }
    
    throw error;
  }

  try {
    const result = await fn();
    limiter.recordRequest(key, true);
    
    if (options?.onSuccess) {
      options.onSuccess(result);
    }
    
    return result;
  } catch (error) {
    limiter.recordRequest(key, false);
    
    if (options?.onFailure) {
      options.onFailure(error as Error);
    }
    
    throw error;
  }
};

// Generate unique rate limit keys
export const generateRateLimitKey = (type: string, identifier: string): string => {
  return `${type}:${identifier}`;
};

// Client-specific rate limiting (by IP, user ID, etc.)
export const getClientRateLimitKey = (
  type: string,
  clientId: string | null,
  fallbackId?: string
): string => {
  const id = clientId || fallbackId || 'anonymous';
  return generateRateLimitKey(type, id);
};

// Rate limiting error class
export class RateLimitError extends Error {
  public resetTime: number;
  public remaining: number;
  public retryAfter: number;

  constructor(resetTime: number, remaining: number) {
    super('Rate limit exceeded');
    this.name = 'RateLimitError';
    this.resetTime = resetTime;
    this.remaining = remaining;
    this.retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
  }
}

// Utility function to format retry after time
export const formatRetryAfter = (seconds: number): string => {
  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''}`;
  } else if (seconds < 3600) {
    const minutes = Math.ceil(seconds / 60);
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else {
    const hours = Math.ceil(seconds / 3600);
    return `${hours} hour${hours !== 1 ? 's' : ''}`;
  }
};

// Rate limiting monitoring
export const getRateLimitStats = () => {
  return {
    auth: rateLimiters.auth.getStats(),
    api: rateLimiters.api.getStats(),
    forms: rateLimiters.forms.getStats(),
    uploads: rateLimiters.uploads.getStats(),
    search: rateLimiters.search.getStats(),
  };
};

// Development utilities
export const resetRateLimit = (limiter: RateLimiter, key: string) => {
  limiter.reset(key);
};

// Reset all rate limits (development only)
export const resetAllRateLimits = () => {
  if (import.meta.env.DEV) {
    Object.values(rateLimiters).forEach(limiter => {
      limiter.clear();
    });
    console.log('🔄 All rate limits reset (development mode)');
  }
};

// Get rate limit status for debugging
export const getRateLimitStatus = (limiter: RateLimiter, key: string) => {
  return limiter.getStatus(key);
};
