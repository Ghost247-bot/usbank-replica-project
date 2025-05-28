
import React, { useState, useEffect } from 'react';
import { Search, CreditCard, Ban, CheckCircle, DollarSign } from 'lucide-react';
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
  status: string;
  profiles?: {
    first_name?: string;
    last_name?: string;
  };
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
  status: string;
  profiles?: {
    first_name?: string;
    last_name?: string;
  };
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
      setLoading(true);
      const { data, error } = await supabase
        .from('accounts')
        .select(`
          *,
          profiles (
            first_name,
            last_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      console.log('Fetched accounts:', data);
      setAccounts(data || []);
    } catch (error: any) {
      console.error('Error fetching accounts:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch accounts: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchCreditCards = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('credit_cards')
        .select(`
          *,
          profiles (
            first_name,
            last_name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      console.log('Fetched credit cards:', data);
      setCreditCards(data || []);
    } catch (error: any) {
      console.error('Error fetching credit cards:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch credit cards: " + error.message,
      });
    } finally {
      setLoading(false);
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

  const getUserDisplayName = (account: Account | CreditCard) => {
    if (account.profiles) {
      const { first_name, last_name } = account.profiles;
      return `${first_name || ''} ${last_name || ''}`.trim() || 'Unknown User';
    }
    return 'Unknown User';
  };

  const filteredAccounts = accounts.filter(account =>
    account.account_number.includes(searchTerm) ||
    account.account_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getUserDisplayName(account).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCards = creditCards.filter(card =>
    card.card_number.includes(searchTerm) ||
    card.card_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getUserDisplayName(card).toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && accounts.length === 0 && creditCards.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Account & Card Management</CardTitle>
          <CardDescription>Loading...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg animate-pulse">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-3 bg-gray-200 rounded w-48"></div>
                </div>
                <div className="h-8 bg-gray-200 rounded w-16"></div>
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
        <CardTitle>Account & Card Management</CardTitle>
        <CardDescription>Manage accounts and credit cards ({accounts.length} accounts, {creditCards.length} cards)</CardDescription>
        <div className="flex space-x-2 mt-4">
          <Button
            variant={activeTab === 'accounts' ? 'default' : 'outline'}
            onClick={() => setActiveTab('accounts')}
          >
            Accounts ({accounts.length})
          </Button>
          <Button
            variant={activeTab === 'cards' ? 'default' : 'outline'}
            onClick={() => setActiveTab('cards')}
          >
            Credit Cards ({creditCards.length})
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
            {filteredAccounts.length > 0 ? (
              filteredAccounts.map((account) => (
                <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <DollarSign className="h-4 w-4" />
                      <h3 className="font-medium">{account.account_name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        account.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                        {account.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {account.account_number} • {account.account_type} • {getUserDisplayName(account)}
                    </p>
                    <p className="text-sm font-medium">Balance: ${Number(account.balance).toLocaleString()}</p>
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
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No accounts found</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCards.length > 0 ? (
              filteredCards.map((card) => (
                <div key={card.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <CreditCard className="h-4 w-4" />
                      <h3 className="font-medium">{card.card_type}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        card.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                        {card.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      **** **** **** {card.card_number.slice(-4)} • {getUserDisplayName(card)}
                    </p>
                    <p className="text-sm">
                      Balance: ${Number(card.current_balance).toLocaleString()} / ${Number(card.credit_limit).toLocaleString()}
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
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No credit cards found</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AccountManagement;
