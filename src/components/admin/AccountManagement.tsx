
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAccountManagement } from './accounts/useAccountManagement';
import { filterAccounts, filterCards } from './accounts/utils';
import { AccountTab } from './accounts/types';
import AccountList from './accounts/AccountList';
import CreditCardList from './accounts/CreditCardList';
import LoadingSkeleton from './accounts/LoadingSkeleton';

const AccountManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<AccountTab>('accounts');

  const {
    accounts,
    creditCards,
    loading,
    handleFreezeAccount,
    handleFreezeCard
  } = useAccountManagement();

  const filteredAccounts = filterAccounts(accounts, searchTerm);
  const filteredCards = filterCards(creditCards, searchTerm);

  if (loading && accounts.length === 0 && creditCards.length === 0) {
    return <LoadingSkeleton />;
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
          <AccountList
            accounts={filteredAccounts}
            onFreezeAccount={handleFreezeAccount}
            loading={loading}
          />
        ) : (
          <CreditCardList
            cards={filteredCards}
            onFreezeCard={handleFreezeCard}
            loading={loading}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default AccountManagement;
