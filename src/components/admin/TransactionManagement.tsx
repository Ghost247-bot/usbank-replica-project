
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTransactions } from './transactions/useTransactions';
import CreateTransactionDialog from './transactions/CreateTransactionDialog';
import TransactionList from './transactions/TransactionList';

const TransactionManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    transactions,
    accounts,
    loading,
    createTransaction,
    updateTransaction
  } = useTransactions();

  const filteredTransactions = transactions.filter(transaction =>
    transaction.reference_number?.includes(searchTerm) ||
    transaction.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.account_id.includes(searchTerm)
  );

  if (loading && transactions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transaction Management</CardTitle>
          <CardDescription>Loading transactions...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4 animate-pulse">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-48"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                    <div className="h-3 bg-gray-200 rounded w-64"></div>
                  </div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Transaction Management</CardTitle>
            <CardDescription>View and manage transactions ({transactions.length} total)</CardDescription>
          </div>
          <CreateTransactionDialog
            accounts={accounts}
            onCreateTransaction={createTransaction}
            loading={loading}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search transactions..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <TransactionList
          transactions={filteredTransactions}
          onUpdateTransaction={updateTransaction}
          loading={loading}
        />
      </CardContent>
    </Card>
  );
};

export default TransactionManagement;
