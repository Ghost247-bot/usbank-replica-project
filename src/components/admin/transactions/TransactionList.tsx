
import React from 'react';
import { DollarSign } from 'lucide-react';
import { Transaction } from './types';
import { getStatusColor, getTransactionTypeColor } from './utils';
import EditTransactionDialog from './EditTransactionDialog';

interface TransactionListProps {
  transactions: Transaction[];
  onUpdateTransaction: (transactionId: string, form: any) => Promise<boolean>;
  loading: boolean;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onUpdateTransaction,
  loading
}) => {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No transactions found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="h-4 w-4" />
                <span className={`font-medium ${getTransactionTypeColor(transaction.transaction_type)}`}>
                  ${transaction.amount.toLocaleString()}
                </span>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm capitalize">{transaction.transaction_type}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                {transaction.description || 'No description'}
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>Account: {transaction.account_id.slice(0, 8)}...</span>
                {transaction.reference_number && (
                  <span>Ref: {transaction.reference_number}</span>
                )}
                <span>{new Date(transaction.created_at).toLocaleString()}</span>
              </div>
            </div>
            <EditTransactionDialog
              transaction={transaction}
              onUpdateTransaction={onUpdateTransaction}
              loading={loading}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
