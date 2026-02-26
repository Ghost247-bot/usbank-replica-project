
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: any[];
  getAccountName: (accountId: string) => string;
}

const TransactionList = ({ transactions, getAccountName }: TransactionListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History ({transactions.length})</CardTitle>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No transactions found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                getAccountName={getAccountName}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionList;
