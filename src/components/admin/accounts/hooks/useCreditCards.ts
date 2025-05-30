
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CreditCard } from '../types';
import { fetchCreditCards, createCreditCard, updateCreditCard, freezeCreditCard, deleteCreditCard } from '../api/creditCardApi';

export const useCreditCards = () => {
  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    handleFetchCreditCards();
  }, []);

  const handleFetchCreditCards = async () => {
    try {
      setLoading(true);
      const cardsData = await fetchCreditCards();
      setCreditCards(cardsData);
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

  const handleCreateCreditCard = async (cardData: {
    user_id: string;
    card_type: string;
    credit_limit: number;
    interest_rate: number;
    current_balance: number;
  }) => {
    try {
      setLoading(true);
      await createCreditCard(cardData);
      toast({
        title: "Success",
        description: "Credit card created successfully",
      });
      handleFetchCreditCards();
      return true;
    } catch (error: any) {
      console.error('Error creating credit card:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create credit card: " + error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleEditCreditCard = async (cardId: string, cardData: {
    card_type: string;
    credit_limit: number;
    interest_rate: number;
    current_balance: number;
  }) => {
    try {
      setLoading(true);
      await updateCreditCard(cardId, cardData);
      toast({
        title: "Success",
        description: "Credit card updated successfully",
      });
      handleFetchCreditCards();
      return true;
    } catch (error: any) {
      console.error('Error updating credit card:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update credit card: " + error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleFreezeCard = async (cardId: string, freeze: boolean, freezeReason?: string) => {
    try {
      setLoading(true);
      await freezeCreditCard(cardId, freeze, freezeReason);
      toast({
        title: "Success",
        description: `Card ${freeze ? 'frozen' : 'unfrozen'} successfully`,
      });
      handleFetchCreditCards();
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

  const handleDeleteCard = async (cardId: string) => {
    try {
      setLoading(true);
      await deleteCreditCard(cardId);
      toast({
        title: "Success",
        description: "Credit card deleted successfully",
      });
      handleFetchCreditCards();
    } catch (error: any) {
      console.error('Error deleting credit card:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete credit card: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    creditCards,
    loading,
    handleCreateCreditCard,
    handleEditCreditCard,
    handleFreezeCard,
    handleDeleteCard
  };
};
