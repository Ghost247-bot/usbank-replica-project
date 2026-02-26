import { z } from 'zod';

// Email validation with strict rules
export const emailSchema = z.string()
  .email('Invalid email address')
  .min(5, 'Email must be at least 5 characters')
  .max(254, 'Email must be less than 254 characters')
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format');

// Password validation with strong requirements
export const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password must be less than 128 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

// Name validation
export const nameSchema = z.string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must be less than 50 characters')
  .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes')
  .transform(val => val.trim());

// Phone number validation (US format)
export const phoneSchema = z.string()
  .regex(/^\+?1?[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/, 'Invalid phone number format')
  .transform(val => val.replace(/[^\d+]/g, ''));

// SSN/IBAN validation (basic format)
export const ssnIbanSchema = z.string()
  .min(9, 'SSN/IBAN must be at least 9 characters')
  .max(34, 'SSN/IBAN must be less than 34 characters')
  .regex(/^[A-Za-z0-9\s-]+$/, 'Invalid SSN/IBAN format')
  .transform(val => val.replace(/\s/g, ''));

// PIN validation (4-6 digits)
export const pinSchema = z.string()
  .regex(/^\d{4,6}$/, 'PIN must be 4-6 digits')
  .transform(val => val.padStart(6, '0'));

// Amount validation (positive numbers with 2 decimal places)
export const amountSchema = z.string()
  .regex(/^\d+(\.\d{1,2})?$/, 'Invalid amount format')
  .transform(val => parseFloat(val))
  .refine(val => val > 0, 'Amount must be greater than 0')
  .refine(val => val <= 999999.99, 'Amount cannot exceed $999,999.99');

// Date validation (must be at least 18 years old)
export const dateOfBirthSchema = z.string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (YYYY-MM-DD)')
  .transform(val => new Date(val))
  .refine(val => val instanceof Date && !isNaN(val.getTime()), 'Invalid date')
  .refine(val => {
    const minAge = new Date();
    minAge.setFullYear(minAge.getFullYear() - 18);
    return val <= minAge;
  }, 'Must be at least 18 years old');

// Address validation
export const addressSchema = z.object({
  street: z.string().min(5, 'Street address is required').max(100),
  city: z.string().min(2, 'City is required').max(50),
  state: z.string().min(2, 'State is required').max(50),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  country: z.string().min(2, 'Country is required').max(50).default('US'),
});

// Security question answer validation
export const securityAnswerSchema = z.string()
  .min(2, 'Answer must be at least 2 characters')
  .max(100, 'Answer must be less than 100 characters')
  .transform(val => val.trim());

// Transaction validation
export const transactionSchema = z.object({
  amount: amountSchema,
  description: z.string().min(1, 'Description is required').max(200),
  recipientAccount: z.string().min(10, 'Recipient account is required'),
  recipientName: nameSchema,
  type: z.enum(['transfer', 'payment', 'deposit']),
});

// Complete user registration validation
export const userRegistrationSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  firstName: nameSchema,
  lastName: nameSchema,
  dateOfBirth: dateOfBirthSchema,
  phone: phoneSchema,
  address: addressSchema,
  ssnIban: ssnIbanSchema,
  securityQuestion1: z.string().min(1, 'Security question is required'),
  securityAnswer1: securityAnswerSchema,
  securityQuestion2: z.string().min(1, 'Security question is required'),
  securityAnswer2: securityAnswerSchema,
  pin: pinSchema,
});

// Sign in validation
export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
});

// Input sanitization utilities
export const sanitizeInput = {
  // Remove HTML tags and special characters
  text: (input: string): string => {
    return input
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/[<>]/g, '') // Remove remaining brackets
      .trim();
  },
  
  // Sanitize for display (allow basic formatting)
  display: (input: string): string => {
    return input
      .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove scripts
      .replace(/<[^>]*>/g, '') // Remove all HTML tags
      .trim();
  },
  
  // Sanitize for database (remove potential SQL injection patterns)
  database: (input: string): string => {
    return input
      .replace(/['"\\;]/g, '') // Remove SQL injection characters
      .replace(/--/g, '') // Remove SQL comments
      .replace(/\/\*.*?\*\//g, '') // Remove SQL comments
      .trim();
  },
  
  // Sanitize email (lowercase and trim)
  email: (input: string): string => {
    return input.toLowerCase().trim();
  },
  
  // Sanitize phone numbers (keep only digits and +)
  phone: (input: string): string => {
    return input.replace(/[^\d+]/g, '');
  },
};

// XSS prevention utilities
export const preventXSS = {
  // Escape HTML entities
  escapeHtml: (text: string): string => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },
  
  // Validate URLs
  isValidUrl: (url: string): boolean => {
    try {
      const parsed = new URL(url);
      return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  },
  
  // Check for suspicious patterns
  containsSuspiciousContent: (text: string): boolean => {
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(text));
  },
};

// Validation error formatter
export const formatValidationError = (error: z.ZodError): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  error.errors.forEach(err => {
    const path = err.path.join('.');
    errors[path] = err.message;
  });
  
  return errors;
};

// Comprehensive validation function
export const validateAndSanitize = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: Record<string, string> } => {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, errors: formatValidationError(error) };
    }
    return { success: false, errors: { general: 'Validation failed' } };
  }
};

// Type guard for validation result
export const isValidationSuccess = <T>(
  result: ReturnType<typeof validateAndSanitize<T>>
): result is { success: true; data: T } => {
  return result.success;
};

// Type guard for validation error
export const isValidationError = <T>(
  result: ReturnType<typeof validateAndSanitize<T>>
): result is { success: false; errors: Record<string, string> } => {
  return !result.success;
};
