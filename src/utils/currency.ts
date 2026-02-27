/**
 * Currency formatting utilities
 */

/**
 * Formats a number as USD currency with proper thousand separators
 * @param amount - The amount to format
 * @returns Formatted currency string (e.g., "$18,090,900.15")
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Formats a number as USD currency without the dollar sign
 * @param amount - The amount to format
 * @returns Formatted currency string without $ (e.g., "18,090,900.15")
 */
export const formatCurrencyWithoutSymbol = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

/**
 * Formats a number as compact currency (e.g., $18.1M for large amounts)
 * @param amount - The amount to format
 * @returns Compact formatted currency string
 */
export const formatCompactCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1
  }).format(amount);
};
