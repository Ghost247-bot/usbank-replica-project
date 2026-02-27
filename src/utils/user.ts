/**
 * User utility functions
 */

/**
 * Gets user's display name with smart fallbacks
 * @param user - The user object from Supabase auth
 * @returns User's preferred display name
 */
export const getUserDisplayName = (user: any): string => {
  // Try first_name first (but not "Admin")
  if (user?.user_metadata?.first_name && user.user_metadata.first_name !== 'Admin') {
    return user.user_metadata.first_name;
  }
  
  // Try full_name and get first part (but not "Admin User" or "Admin")
  if (user?.user_metadata?.full_name) {
    const fullName = user.user_metadata.full_name;
    if (fullName !== 'Admin User' && fullName !== 'Admin') {
      return fullName.split(' ')[0];
    }
  }
  
  // Try last_name if first_name is not available (but not "User")
  if (user?.user_metadata?.last_name && user.user_metadata.last_name !== 'User') {
    return user.user_metadata.last_name;
  }
  
  // Try email username as fallback
  if (user?.email) {
    const emailUsername = user.email.split('@')[0];
    // Clean up the email username (remove numbers, dots, etc.)
    const cleanUsername = emailUsername.replace(/[0-9._-]/g, '');
    if (cleanUsername && cleanUsername.length > 1) {
      return cleanUsername.charAt(0).toUpperCase() + cleanUsername.slice(1);
    }
  }
  
  // Final fallback - use a generic greeting
  return 'User';
};

/**
 * Gets user's full display name
 * @param user - The user object from Supabase auth
 * @returns User's full name or best alternative
 */
export const getUserFullName = (user: any): string => {
  if (user?.user_metadata?.full_name && user.user_metadata.full_name !== 'Admin User') {
    return user.user_metadata.full_name;
  }
  
  if (user?.user_metadata?.first_name && user.user_metadata.first_name !== 'Admin') {
    const firstName = user.user_metadata.first_name;
    const lastName = user?.user_metadata?.last_name && user.user_metadata.last_name !== 'User' 
      ? ` ${user.user_metadata.last_name}` 
      : '';
    return firstName + lastName;
  }
  
  if (user?.email) {
    return user.email.split('@')[0];
  }
  
  return 'User';
};
