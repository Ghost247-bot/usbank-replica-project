
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Account, CreateTransactionForm, TransactionType, TransactionStatus } from './types';

interface CreateTransactionDialogProps {
  accounts: Account[];
  onCreateTransaction: (form: CreateTransactionForm) => Promise<boolean>;
  loading: boolean;
}

const CreateTransactionDialog: React.FC<CreateTransactionDialogProps> = ({
  accounts,
  onCreateTransaction,
  loading
}) => {
  const [showCreateTransaction, setShowCreateTransaction] = useState(false);
  const [createForm, setCreateForm] = useState<CreateTransactionForm>({
    account_id: '',
    amount: '',
    description: '',
    transaction_type: 'deposit',
    status: 'completed'
  });

  const handleCreateTransaction = async () => {
    const success = await onCreateTransaction(createForm);
    if (success) {
      setShowCreateTransaction(false);
      setCreateForm({
        account_id: '',
        amount: '',
        description: '',
        transaction_type: 'deposit',
        status: 'completed'
      });
    }
  };

  return (
    <Dialog open={showCreateTransaction} onOpenChange={setShowCreateTransaction}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Transaction
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Transaction</DialogTitle>
          <DialogDescription>
            Create a new transaction for a user account
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Select value={createForm.account_id} onValueChange={(value) => setCreateForm({ ...createForm, account_id: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select account" />
            </SelectTrigger>
            <SelectContent>
              {accounts.map((account) => (
                <SelectItem key={account.id} value={account.id}>
                  {account.account_name} - {account.account_number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="number"
            step="0.01"
            placeholder="Amount"
            value={createForm.amount}
            onChange={(e) => setCreateForm({ ...createForm, amount: e.target.value })}
          />
          <Input
            placeholder="Description"
            value={createForm.description}
            onChange={(e) => setCreateForm({ ...createForm, description: e.target.value })}
          />
          <Select value={createForm.transaction_type} onValueChange={(value: TransactionType) => setCreateForm({ ...createForm, transaction_type: value })}>
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
          <Select value={createForm.status} onValueChange={(value: TransactionStatus) => setCreateForm({ ...createForm, status: value })}>
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
            onClick={handleCreateTransaction}
            disabled={loading || !createForm.account_id || !createForm.amount}
            className="w-full"
          >
            Create Transaction
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTransactionDialog;
