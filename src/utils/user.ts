/**
 * User utility functions
 */

/**
 * Gets user's display name with smart fallbacks
 * @param user - The user object from Supabase auth
 * @returns User's preferred display name
 */
export const getUserDisplayName = (user: any): string => {
  // Try first_name first
  if (user.user_metadata?.first_name) {
    return user.user_metadata.first_name;
  }
  
  // Try full_name and get first part
  if (user.user_metadata?.full_name) {
    const fullName = user.user_metadata.full_name;
    if (fullName !== 'Admin User') {
      return fullName.split(' ')[0];
    }
  }
  
  // Try last_name if first_name is not available
  if (user.user_metadata?.last_name && user.user_metadata.last_name !== 'User') {
    return user.user_metadata.last_name;
  }
  
  // Final fallback - use a generic greeting instead of email
  return 'User';
};

/**
 * Gets user's full display name
 * @param user - The user object from Supabase auth
 * @returns User's full name or best alternative
 */
export const getUserFullName = (user: any): string => {
  if (user.user_metadata?.full_name && user.user_metadata?.full_name !== 'Admin User') {
    return user.user_metadata.full_name;
  }
  
  if (user.user_metadata?.first_name && user.user_metadata?.first_name !== 'Admin') {
    const firstName = user.user_metadata.first_name;
    const lastName = user.user_metadata?.last_name && user.user_metadata?.last_name !== 'User' 
      ? ` ${user.user_metadata.last_name}` 
      : '';
    return firstName + lastName;
  }
  
  if (user.email) {
    return user.email.split('@')[0];
  }
  
  return 'User';
};
