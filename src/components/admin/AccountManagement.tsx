
import React, { useState, useEffect } from 'react';
import { Search, CreditCard, Ban, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Account {
  id: string;
  account_number: string;
  account_name: string;
  account_type: string;
  balance: number;
  is_frozen: boolean;
  freeze_reason?: string;
  user_id: string;
}

interface CreditCard {
  id: string;
  card_number: string;
  card_type: string;
  credit_limit: number;
  current_balance: number;
  is_frozen: boolean;
  freeze_reason?: string;
  user_id: string;
}

const AccountManagement = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [selectedCard, setSelectedCard] = useState<CreditCard | null>(null);
  const [freezeReason, setFreezeReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'accounts' | 'cards'>('accounts');

  const { toast } = useToast();

  useEffect(() => {
    fetchAccounts();
    fetchCreditCards();
  }, []);

  const fetchAccounts = async () => {
    try {
      const { data, error } = await supabase
        .from('accounts')
        .select('*');

      if (error) throw error;
      setAccounts(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch accounts: " + error.message,
      });
    }
  };

  const fetchCreditCards = async () => {
    try {
      const { data, error } = await supabase
        .from('credit_cards')
        .select('*');

      if (error) throw error;
      setCreditCards(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch credit cards: " + error.message,
      });
    }
  };

  const handleFreezeAccount = async (accountId: string, freeze: boolean) => {
    try {
      setLoading(true);
      const { error } = await supabase.rpc('toggle_account_freeze', {
        account_id: accountId,
        freeze_status: freeze,
        reason: freeze ? freezeReason : null
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: `Account ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });

      setFreezeReason('');
      setSelectedAccount(null);
      fetchAccounts();
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

  const handleFreezeCard = async (cardId: string, freeze: boolean) => {
    try {
      setLoading(true);
      const { error } = await supabase.rpc('toggle_card_freeze', {
        card_id: cardId,
        freeze_status: freeze,
        reason: freeze ? freezeReason : null
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: `Card ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });

      setFreezeReason('');
      setSelectedCard(null);
      fetchCreditCards();
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

  const filteredAccounts = accounts.filter(account =>
    account.account_number.includes(searchTerm) ||
    account.account_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCards = creditCards.filter(card =>
    card.card_number.includes(searchTerm) ||
    card.card_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account & Card Management</CardTitle>
        <CardDescription>Manage accounts and credit cards</CardDescription>
        <div className="flex space-x-2 mt-4">
          <Button
            variant={activeTab === 'accounts' ? 'default' : 'outline'}
            onClick={() => setActiveTab('accounts')}
          >
            Accounts
          </Button>
          <Button
            variant={activeTab === 'cards' ? 'default' : 'outline'}
            onClick={() => setActiveTab('cards')}
          >
            Credit Cards
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {activeTab === 'accounts' ? (
          <div className="space-y-4">
            {filteredAccounts.map((account) => (
              <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{account.account_name}</h3>
                  <p className="text-sm text-gray-600">
                    {account.account_number} • {account.account_type}
                  </p>
                  <p className="text-sm">Balance: ${account.balance.toLocaleString()}</p>
                  {account.is_frozen && (
                    <p className="text-sm text-red-600">
                      Frozen: {account.freeze_reason}
                    </p>
                  )}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant={account.is_frozen ? "default" : "destructive"}
                      size="sm"
                      onClick={() => setSelectedAccount(account)}
                    >
                      {account.is_frozen ? (
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
                        {account.is_frozen ? 'Unfreeze' : 'Freeze'} Account
                      </DialogTitle>
                      <DialogDescription>
                        {account.is_frozen 
                          ? 'Unfreeze this account' 
                          : 'Freeze this account and provide a reason'
                        }
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      {!account.is_frozen && (
                        <Textarea
                          placeholder="Reason for freezing..."
                          value={freezeReason}
                          onChange={(e) => setFreezeReason(e.target.value)}
                        />
                      )}
                      <Button
                        onClick={() => handleFreezeAccount(account.id, !account.is_frozen)}
                        disabled={loading || (!account.is_frozen && !freezeReason)}
                        className="w-full"
                        variant={account.is_frozen ? "default" : "destructive"}
                      >
                        {account.is_frozen ? 'Unfreeze Account' : 'Freeze Account'}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCards.map((card) => (
              <div key={card.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium flex items-center">
                    <CreditCard className="h-4 w-4 mr-2" />
                    {card.card_type}
                  </h3>
                  <p className="text-sm text-gray-600">
                    **** **** **** {card.card_number.slice(-4)}
                  </p>
                  <p className="text-sm">
                    Balance: ${card.current_balance.toLocaleString()} / ${card.credit_limit.toLocaleString()}
                  </p>
                  {card.is_frozen && (
                    <p className="text-sm text-red-600">
                      Frozen: {card.freeze_reason}
                    </p>
                  )}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant={card.is_frozen ? "default" : "destructive"}
                      size="sm"
                      onClick={() => setSelectedCard(card)}
                    >
                      {card.is_frozen ? (
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
                        {card.is_frozen ? 'Unfreeze' : 'Freeze'} Card
                      </DialogTitle>
                      <DialogDescription>
                        {card.is_frozen 
                          ? 'Unfreeze this credit card' 
                          : 'Freeze this credit card and provide a reason'
                        }
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      {!card.is_frozen && (
                        <Textarea
                          placeholder="Reason for freezing..."
                          value={freezeReason}
                          onChange={(e) => setFreezeReason(e.target.value)}
                        />
                      )}
                      <Button
                        onClick={() => handleFreezeCard(card.id, !card.is_frozen)}
                        disabled={loading || (!card.is_frozen && !freezeReason)}
                        className="w-full"
                        variant={card.is_frozen ? "default" : "destructive"}
                      >
                        {card.is_frozen ? 'Unfreeze Card' : 'Freeze Card'}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AccountManagement;
