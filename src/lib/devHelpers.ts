// Development helper utilities
import { resetAllRateLimits, getRateLimitStats } from '@/lib/rateLimiting';

// Development-only utilities
export const devHelpers = {
  // Reset all rate limits
  resetRateLimits: () => {
    if (import.meta.env.DEV) {
      resetAllRateLimits();
      return '✅ All rate limits reset';
    }
    return '❌ Only available in development';
  },

  // Get rate limit statistics
  getRateLimitStats: () => {
    if (import.meta.env.DEV) {
      return getRateLimitStats();
    }
    return '❌ Only available in development';
  },

  // Log current environment info
  logEnvInfo: () => {
    if (import.meta.env.DEV) {
      console.log('🔧 Development Environment Info:');
      console.log('- Mode:', import.meta.env.MODE);
      console.log('- Dev:', import.meta.env.DEV);
      console.log('- Prod:', import.meta.env.PROD);
      console.log('- Base URL:', import.meta.env.BASE_URL);
      return '✅ Environment info logged';
    }
    return '❌ Only available in development';
  },

  // Test signup with sample data
  testSignup: async () => {
    if (import.meta.env.DEV) {
      try {
        const timestamp = Date.now();
        const email = `test${timestamp}@example.com`;
        const password = 'TestPassword123!';
        
        console.log('🧪 Testing signup with:', { email, password: '***' });
        
        // This would need to be imported properly in a real scenario
        // For now, just log the test data
        console.log('📝 Test data ready - use the signup form with:');
        console.log('- Email:', email);
        console.log('- Password:', password);
        console.log('- First Name: Test');
        console.log('- Last Name: User');
        
        return { email, password, firstName: 'Test', lastName: 'User' };
      } catch (error) {
        console.error('❌ Test signup failed:', error);
        return error;
      }
    }
    return '❌ Only available in development';
  },

  // Clear all console logs (development helper)
  clearConsole: () => {
    if (import.meta.env.DEV) {
      console.clear();
      console.log('🧹 Console cleared');
      return '✅ Console cleared';
    }
    return '❌ Only available in development';
  },
};

// Make helpers available globally in development
if (import.meta.env.DEV) {
  (window as any).devHelpers = devHelpers;
  console.log('🛠️ Development helpers available at window.devHelpers');
  console.log('   - window.devHelpers.resetRateLimits()');
  console.log('   - window.devHelpers.getRateLimitStats()');
  console.log('   - window.devHelpers.logEnvInfo()');
  console.log('   - window.devHelpers.testSignup()');
  console.log('   - window.devHelpers.clearConsole()');
}
