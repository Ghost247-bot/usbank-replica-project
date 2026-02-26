
import { useAccounts } from './hooks/useAccounts';
import { useCreditCards } from './hooks/useCreditCards';
import { useUsers } from './hooks/useUsers';

export const useAccountManagement = () => {
  const {
    accounts,
    loading: accountsLoading,
    handleCreateAccount,
    handleEditAccount,
    handleFreezeAccount,
    handleDeleteAccount
  } = useAccounts();

  const {
    creditCards,
    loading: cardsLoading,
    handleCreateCreditCard,
    handleEditCreditCard,
    handleFreezeCard,
    handleDeleteCard
  } = useCreditCards();

  const { users } = useUsers();

  // Combine loading states
  const loading = accountsLoading || cardsLoading;

  return {
    accounts,
    creditCards,
    users,
    loading,
    handleCreateAccount,
    handleEditAccount,
    handleCreateCreditCard,
    handleEditCreditCard,
    handleFreezeAccount,
    handleFreezeCard,
    handleDeleteAccount,
    handleDeleteCard
  };
};
