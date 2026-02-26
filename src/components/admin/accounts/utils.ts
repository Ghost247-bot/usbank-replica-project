
import { Account, CreditCard } from './types';

export const getUserDisplayName = (account: Account | CreditCard) => {
  if (account.profiles) {
    const { first_name, last_name } = account.profiles;
    return `${first_name || ''} ${last_name || ''}`.trim() || 'Unknown User';
  }
  return 'Unknown User';
};

export const filterAccounts = (accounts: Account[], searchTerm: string) => {
  return accounts.filter(account =>
    account.account_number.includes(searchTerm) ||
    account.account_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getUserDisplayName(account).toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const filterCards = (cards: CreditCard[], searchTerm: string) => {
  return cards.filter(card =>
    card.card_number.includes(searchTerm) ||
    card.card_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    getUserDisplayName(card).toLowerCase().includes(searchTerm.toLowerCase())
  );
};
