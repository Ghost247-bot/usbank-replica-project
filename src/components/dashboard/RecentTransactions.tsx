
import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useBankingData } from '@/hooks/useBankingData';

const RecentTransactions = () => {
  const { transactions, isLoading } = useBankingData();

  if (isLoading) {
    return (
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest account activity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center justify-between animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-200 p-2 rounded-full w-8 h-8"></div>
                  <div>
                    <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-16"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const getTransactionIcon = (type: string) => {
    const isIncoming = type === 'deposit' || type === 'interest';
    return isIncoming ? (
      <div className="bg-green-100 p-2 rounded-full">
        <ArrowUpRight className="h-4 w-4 text-green-600" />
      </div>
    ) : (
      <div className="bg-red-100 p-2 rounded-full">
        <ArrowDownRight className="h-4 w-4 text-red-600" />
      </div>
    );
  };

  const formatAmount = (amount: number, type: string) => {
    const isIncoming = type === 'deposit' || type === 'interest';
    const sign = isIncoming ? '+' : '-';
    const color = isIncoming ? 'text-green-600' : 'text-red-600';
    return (
      <span className={`font-semibold ${color}`}>
        {sign}${Math.abs(amount).toFixed(2)}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest account activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions?.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No transactions yet
            </div>
          ) : (
            transactions?.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getTransactionIcon(transaction.transaction_type)}
                  <div>
                    <p className="font-medium">
                      {transaction.description || transaction.transaction_type}
                    </p>
                    <p className="text-sm text-gray-600">
                      {formatDate(transaction.created_at)}
                    </p>
                  </div>
                </div>
                {formatAmount(Number(transaction.amount), transaction.transaction_type)}
              </div>
            ))
          )}
        </div>
        <Button variant="outline" className="w-full mt-4">
          View All Transactions
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
