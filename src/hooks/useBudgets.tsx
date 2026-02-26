
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { logger } from '@/lib/logger';

interface Budget {
  id: string;
  category: string;
  monthly_limit: number;
  current_spent: number;
  created_at: string;
  updated_at: string;
}

export const useBudgets = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchBudgets = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('budgets')
        .select('*')
        .eq('user_id', user.id)
        .order('category');

      if (error) throw error;
      setBudgets(data || []);
    } catch (error: any) {
      logger.error('Error fetching budgets:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load budgets",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, [user]);

  return { budgets, loading, refetch: fetchBudgets };
};
