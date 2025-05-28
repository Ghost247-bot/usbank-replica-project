
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AdminStats {
  totalCustomers: number;
  totalDeposits: number;
  activeLoans: number;
  pendingReviews: number;
  recentActivity: Array<{
    id: string;
    type: string;
    description: string;
    time: string;
  }>;
}

export const useAdminStats = () => {
  const [stats, setStats] = useState<AdminStats>({
    totalCustomers: 0,
    totalDeposits: 0,
    activeLoans: 0,
    pendingReviews: 0,
    recentActivity: []
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchStats = async () => {
    try {
      setLoading(true);

      // Fetch total customers
      const { count: customerCount } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      // Fetch total deposits (sum of all account balances)
      const { data: accounts } = await supabase
        .from('accounts')
        .select('balance');

      const totalDeposits = accounts?.reduce((sum, account) => sum + Number(account.balance), 0) || 0;

      // Fetch active loans
      const { data: loans } = await supabase
        .from('loans')
        .select('current_balance')
        .eq('status', 'active');

      const activeLoansValue = loans?.reduce((sum, loan) => sum + Number(loan.current_balance), 0) || 0;

      // Fetch pending transactions as pending reviews
      const { count: pendingCount } = await supabase
        .from('transactions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending');

      // Fetch recent activity
      const { data: recentTransactions } = await supabase
        .from('transactions')
        .select('id, transaction_type, amount, created_at, description')
        .order('created_at', { ascending: false })
        .limit(5);

      const recentActivity = recentTransactions?.map(transaction => ({
        id: transaction.id,
        type: transaction.transaction_type,
        description: transaction.description || `${transaction.transaction_type} - $${transaction.amount}`,
        time: new Date(transaction.created_at).toLocaleString()
      })) || [];

      setStats({
        totalCustomers: customerCount || 0,
        totalDeposits: totalDeposits,
        activeLoans: activeLoansValue,
        pendingReviews: pendingCount || 0,
        recentActivity
      });

    } catch (error: any) {
      console.error('Error fetching admin stats:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load dashboard statistics",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return { stats, loading, refetch: fetchStats };
};
