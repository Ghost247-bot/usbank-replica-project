
import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Account, CreditCard } from './types';

interface DeleteDialogProps {
  item: Account | CreditCard;
  onDelete: (id: string) => void;
  loading: boolean;
  type: 'account' | 'card';
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  item,
  onDelete,
  loading,
  type
}) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    onDelete(item.id);
    setOpen(false);
  };

  const getItemDisplayName = () => {
    if (type === 'account') {
      const account = item as Account;
      return `${account.account_name} (${account.account_number})`;
    } else {
      const card = item as CreditCard;
      return `${card.card_type} (**** ${card.card_number.slice(-4)})`;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          size="sm"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete {type === 'account' ? 'Account' : 'Credit Card'}</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this {type}? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-gray-600">
            <strong>{type === 'account' ? 'Account' : 'Card'}:</strong> {getItemDisplayName()}
          </p>
          {type === 'account' && (
            <p className="text-sm text-gray-600 mt-2">
              <strong>Balance:</strong> ${Number((item as Account).balance).toLocaleString()}
            </p>
          )}
          {type === 'card' && (
            <p className="text-sm text-gray-600 mt-2">
              <strong>Balance:</strong> ${Number((item as CreditCard).current_balance).toLocaleString()}
            </p>
          )}
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
