
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { format } from 'date-fns';

interface TransactionItemProps {
  transaction: any;
  getAccountName: (accountId: string) => string;
}

const TransactionItem = ({ transaction, getAccountName }: TransactionItemProps) => {
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <ArrowDownLeft className="h-4 w-4 text-green-600" />;
      case 'withdrawal':
      case 'payment':
      case 'fee':
        return <ArrowUpRight className="h-4 w-4 text-red-600" />;
      default:
        return <ArrowUpRight className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="border rounded-lg p-4 hover:bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {getTransactionIcon(transaction.transaction_type)}
          <div>
            <h3 className="font-semibold">
              {transaction.description || 'Transaction'}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{getAccountName(transaction.account_id)}</span>
              <span>•</span>
              <span>{format(new Date(transaction.created_at), 'MMM dd, yyyy HH:mm')}</span>
              {transaction.reference_number && (
                <>
                  <span>•</span>
                  <span>Ref: {transaction.reference_number}</span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-lg font-semibold ${
            transaction.transaction_type === 'deposit'
              ? 'text-green-600' : 'text-red-600'
          }`}>
            {transaction.transaction_type === 'deposit' ? '+' : '-'}
            ${Number(transaction.amount).toFixed(2)}
          </div>
          <Badge className={getStatusColor(transaction.status)}>
            {transaction.status}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
