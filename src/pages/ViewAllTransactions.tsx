
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download, Calendar, TrendingUp, TrendingDown } from 'lucide-react';
import { useBankingData } from '@/hooks/useBankingData';
import { useToast } from '@/hooks/use-toast';
import TransactionFilters from '@/components/transactions/TransactionFilters';
import TransactionList from '@/components/transactions/TransactionList';
import { formatCurrency } from '@/utils/currency';

const ViewAllTransactions = () => {
  const navigate = useNavigate();
  const { transactions, accounts, isLoading } = useBankingData();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterAccount, setFilterAccount] = useState('all');

  const filteredTransactions = transactions?.filter(transaction => {
    const matchesSearch = transaction.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.reference_number?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || transaction.transaction_type === filterType;
    const matchesAccount = filterAccount === 'all' || transaction.account_id === filterAccount;
    
    return matchesSearch && matchesType && matchesAccount;
  }) || [];

  // Calculate summary statistics
  const totalDeposits = filteredTransactions
    .filter(t => t.transaction_type === 'deposit')
    .reduce((sum, t) => sum + Number(t.amount), 0);
    
  const totalWithdrawals = filteredTransactions
    .filter(t => ['withdrawal', 'payment', 'fee'].includes(t.transaction_type))
    .reduce((sum, t) => sum + Number(t.amount), 0);
    
  const netChange = totalDeposits - totalWithdrawals;

  // Export functionality
  const handleExport = () => {
    try {
      const csvContent = [
        ['Date', 'Description', 'Type', 'Account', 'Amount', 'Status', 'Reference'],
        ...filteredTransactions.map(t => [
          new Date(t.created_at).toLocaleDateString(),
          t.description || 'Transaction',
          t.transaction_type,
          getAccountName(t.account_id),
          t.amount,
          t.status,
          t.reference_number || ''
        ])
      ].map(row => row.join(',')).join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `transactions_${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);

      toast({
        title: "Export Successful",
        description: `Exported ${filteredTransactions.length} transactions to CSV`,
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Unable to export transactions. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const getAccountName = (accountId: string) => {
    const account = accounts?.find(acc => acc.id === accountId);
    return account?.account_name || 'Unknown Account';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/user-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">All Transactions</h1>
              <p className="text-gray-600 mt-2">View and manage your transaction history</p>
            </div>
            <Button onClick={handleExport} className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Deposits</CardTitle>
              <TrendingDown className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(totalDeposits)}
              </div>
              <p className="text-xs text-muted-foreground">
                From {filteredTransactions.filter(t => t.transaction_type === 'deposit').length} transactions
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Withdrawals</CardTitle>
              <TrendingUp className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {formatCurrency(totalWithdrawals)}
              </div>
              <p className="text-xs text-muted-foreground">
                From {filteredTransactions.filter(t => ['withdrawal', 'payment', 'fee'].includes(t.transaction_type)).length} transactions
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Change</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${netChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {netChange >= 0 ? '+' : ''}{formatCurrency(netChange)}
              </div>
              <p className="text-xs text-muted-foreground">
                {filteredTransactions.length} total transactions
              </p>
            </CardContent>
          </Card>
        </div>

        <TransactionFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
          filterAccount={filterAccount}
          setFilterAccount={setFilterAccount}
          accounts={accounts || []}
        />

        <TransactionList
          transactions={filteredTransactions}
          getAccountName={getAccountName}
        />
      </main>

      <Footer />
    </div>
  );
};

export default ViewAllTransactions;
