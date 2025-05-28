
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface Bill {
  id: string;
  bill_name: string;
  amount: number;
  due_date: string;
  frequency: string;
  category: string | null;
  is_paid: boolean;
  created_at: string;
  updated_at: string;
}

export const useBills = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchBills = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('bills')
        .select('*')
        .eq('user_id', user.id)
        .order('due_date');

      if (error) throw error;
      setBills(data || []);
    } catch (error: any) {
      console.error('Error fetching bills:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load bills",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBills();
  }, [user]);

  return { bills, loading, refetch: fetchBills };
};
