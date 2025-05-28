
import React from 'react';
import { DollarSign } from 'lucide-react';
import { Account } from './types';
import { getUserDisplayName } from './utils';
import FreezeDialog from './FreezeDialog';

interface AccountListProps {
  accounts: Account[];
  onFreezeAccount: (accountId: string, freeze: boolean, reason?: string) => void;
  loading: boolean;
}

const AccountList: React.FC<AccountListProps> = ({
  accounts,
  onFreezeAccount,
  loading
}) => {
  if (accounts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No accounts found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {accounts.map((account) => (
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
          <FreezeDialog
            item={account}
            onFreeze={onFreezeAccount}
            loading={loading}
            type="account"
          />
        </div>
      ))}
    </div>
  );
};

export default AccountList;
