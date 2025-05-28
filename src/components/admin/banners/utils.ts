
import { BannerType } from './types';

export const getBannerTypeColor = (type: BannerType) => {
  switch (type) {
    case 'success': return 'text-green-600 bg-green-50';
    case 'warning': return 'text-yellow-600 bg-yellow-50';
    case 'error': return 'text-red-600 bg-red-50';
    default: return 'text-blue-600 bg-blue-50';
  }
};

export const getUserDisplayName = (userId: string, users: Array<{ id: string; first_name?: string; last_name?: string }>) => {
  const user = users.find(u => u.id === userId);
  if (!user) return 'Unknown User';
  return `${user.first_name || ''} ${user.last_name || ''}`.trim() || 'Unnamed User';
};
