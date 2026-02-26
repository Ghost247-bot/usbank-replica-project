
import React, { useState } from 'react';
import { Ban, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Account, CreditCard } from './types';

interface FreezeDialogProps {
  item: Account | CreditCard;
  onFreeze: (id: string, freeze: boolean, reason?: string) => void;
  loading: boolean;
  type: 'account' | 'card';
}

const FreezeDialog: React.FC<FreezeDialogProps> = ({
  item,
  onFreeze,
  loading,
  type
}) => {
  const [freezeReason, setFreezeReason] = useState('');
  const [open, setOpen] = useState(false);

  const handleFreeze = () => {
    onFreeze(item.id, !item.is_frozen, item.is_frozen ? undefined : freezeReason);
    setFreezeReason('');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={item.is_frozen ? "default" : "destructive"}
          size="sm"
        >
          {item.is_frozen ? (
            <>
              <CheckCircle className="h-4 w-4 mr-2" />
              Unfreeze
            </>
          ) : (
            <>
              <Ban className="h-4 w-4 mr-2" />
              Freeze
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {item.is_frozen ? 'Unfreeze' : 'Freeze'} {type === 'account' ? 'Account' : 'Card'}
          </DialogTitle>
          <DialogDescription>
            {item.is_frozen 
              ? `Unfreeze this ${type}` 
              : `Freeze this ${type} and provide a reason`
            }
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {!item.is_frozen && (
            <Textarea
              placeholder="Reason for freezing..."
              value={freezeReason}
              onChange={(e) => setFreezeReason(e.target.value)}
            />
          )}
          <Button
            onClick={handleFreeze}
            disabled={loading || (!item.is_frozen && !freezeReason)}
            className="w-full"
            variant={item.is_frozen ? "default" : "destructive"}
          >
            {item.is_frozen ? `Unfreeze ${type === 'account' ? 'Account' : 'Card'}` : `Freeze ${type === 'account' ? 'Account' : 'Card'}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FreezeDialog;
