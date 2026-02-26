
import { TransactionStatus, TransactionType } from './types';

export const getStatusColor = (status: TransactionStatus) => {
  switch (status) {
    case 'completed': return 'text-green-600 bg-green-50';
    case 'pending': return 'text-yellow-600 bg-yellow-50';
    case 'failed': return 'text-red-600 bg-red-50';
    case 'cancelled': return 'text-gray-600 bg-gray-50';
    default: return 'text-blue-600 bg-blue-50';
  }
};

export const getTransactionTypeColor = (type: TransactionType) => {
  switch (type) {
    case 'deposit': return 'text-green-600';
    case 'withdrawal': return 'text-red-600';
    case 'transfer': return 'text-blue-600';
    case 'payment': return 'text-purple-600';
    default: return 'text-gray-600';
  }
};
