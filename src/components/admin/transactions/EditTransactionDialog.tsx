
import React, { useState, useEffect } from 'react';
import { Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Transaction, EditTransactionForm, TransactionType, TransactionStatus } from './types';

interface EditTransactionDialogProps {
  transaction: Transaction;
  onUpdateTransaction: (transactionId: string, form: EditTransactionForm) => Promise<boolean>;
  loading: boolean;
}

const EditTransactionDialog: React.FC<EditTransactionDialogProps> = ({
  transaction,
  onUpdateTransaction,
  loading
}) => {
  const [editForm, setEditForm] = useState<EditTransactionForm>({
    amount: transaction.amount.toString(),
    description: transaction.description || '',
    status: transaction.status,
    transaction_type: transaction.transaction_type
  });

  useEffect(() => {
    setEditForm({
      amount: transaction.amount.toString(),
      description: transaction.description || '',
      status: transaction.status,
      transaction_type: transaction.transaction_type
    });
  }, [transaction]);

  const handleEditTransaction = async () => {
    const success = await onUpdateTransaction(transaction.id, editForm);
    if (success) {
      // Dialog will close automatically
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
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
  );
};

export default EditTransactionDialog;
