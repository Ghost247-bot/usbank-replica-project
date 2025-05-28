
import React, { useState, useEffect } from 'react';
import { Search, Edit, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

type TransactionStatus = "pending" | "completed" | "failed" | "cancelled";
type TransactionType = "deposit" | "withdrawal" | "transfer" | "payment" | "fee" | "interest";

interface Transaction {
  id: string;
  account_id: string;
  amount: number;
  transaction_type: TransactionType;
  description: string;
  status: TransactionStatus;
  created_at: string;
  reference_number?: string;
}

const TransactionManagement = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [editForm, setEditForm] = useState({
    amount: '',
    description: '',
    status: '' as TransactionStatus,
    transaction_type: '' as TransactionType
  });
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;
      
      // Type cast the data to ensure proper typing
      const typedTransactions = (data || []).map(transaction => ({
        ...transaction,
        status: transaction.status as TransactionStatus,
        transaction_type: transaction.transaction_type as TransactionType
      }));
      
      setTransactions(typedTransactions);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch transactions: " + error.message,
      });
    }
  };

  const handleEditTransaction = async () => {
    if (!selectedTransaction) return;

    try {
      setLoading(true);
      const { error } = await supabase
        .from('transactions')
        .update({
          amount: parseFloat(editForm.amount),
          description: editForm.description,
          status: editForm.status,
          transaction_type: editForm.transaction_type,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedTransaction.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Transaction updated successfully",
      });

      setSelectedTransaction(null);
      fetchTransactions();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const openEditDialog = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setEditForm({
      amount: transaction.amount.toString(),
      description: transaction.description || '',
      status: transaction.status,
      transaction_type: transaction.transaction_type
    });
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.reference_number?.includes(searchTerm) ||
    transaction.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.account_id.includes(searchTerm)
  );

  const getStatusColor = (status: TransactionStatus) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'failed': return 'text-red-600 bg-red-50';
      case 'cancelled': return 'text-gray-600 bg-gray-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  const getTransactionTypeColor = (type: TransactionType) => {
    switch (type) {
      case 'deposit': return 'text-green-600';
      case 'withdrawal': return 'text-red-600';
      case 'transfer': return 'text-blue-600';
      case 'payment': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Management</CardTitle>
        <CardDescription>View and edit transactions</CardDescription>
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

        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
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
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditDialog(transaction)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Transaction</DialogTitle>
                      <DialogDescription>
                        Modify transaction details
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="Amount"
                        value={editForm.amount}
                        onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
                      />
                      <Input
                        placeholder="Description"
                        value={editForm.description}
                        onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                      />
                      <Select value={editForm.transaction_type} onValueChange={(value: TransactionType) => setEditForm({ ...editForm, transaction_type: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Transaction type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="deposit">Deposit</SelectItem>
                          <SelectItem value="withdrawal">Withdrawal</SelectItem>
                          <SelectItem value="transfer">Transfer</SelectItem>
                          <SelectItem value="payment">Payment</SelectItem>
                          <SelectItem value="fee">Fee</SelectItem>
                          <SelectItem value="interest">Interest</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select value={editForm.status} onValueChange={(value: TransactionStatus) => setEditForm({ ...editForm, status: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="failed">Failed</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        onClick={handleEditTransaction}
                        disabled={loading || !editForm.amount}
                        className="w-full"
                      >
                        Update Transaction
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionManagement;
