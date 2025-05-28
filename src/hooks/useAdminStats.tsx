
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
      console.log('Fetching admin dashboard stats...');

      // Fetch total customers
      const { count: customerCount, error: customerError } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });

      if (customerError) {
        console.error('Error fetching customer count:', customerError);
        throw customerError;
      }

      console.log('Customer count:', customerCount);

      // Fetch total deposits (sum of all account balances)
      const { data: accounts, error: accountsError } = await supabase
        .from('accounts')
        .select('balance');

      if (accountsError) {
        console.error('Error fetching accounts:', accountsError);
        throw accountsError;
      }

      const totalDeposits = accounts?.reduce((sum, account) => sum + Number(account.balance || 0), 0) || 0;
      console.log('Total deposits:', totalDeposits);

      // Fetch active loans
      const { data: loans, error: loansError } = await supabase
        .from('loans')
        .select('current_balance')
        .eq('status', 'active');

      if (loansError) {
        console.error('Error fetching loans:', loansError);
        throw loansError;
      }

      const activeLoansValue = loans?.reduce((sum, loan) => sum + Number(loan.current_balance || 0), 0) || 0;
      console.log('Active loans value:', activeLoansValue);

      // Fetch pending transactions as pending reviews
      const { count: pendingCount, error: pendingError } = await supabase
        .from('transactions')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending');

      if (pendingError) {
        console.error('Error fetching pending transactions:', pendingError);
        throw pendingError;
      }

      console.log('Pending reviews count:', pendingCount);

      // Fetch recent activity
      const { data: recentTransactions, error: activityError } = await supabase
        .from('transactions')
        .select('id, transaction_type, amount, created_at, description')
        .order('created_at', { ascending: false })
        .limit(5);

      if (activityError) {
        console.error('Error fetching recent activity:', activityError);
        throw activityError;
      }

      const recentActivity = recentTransactions?.map(transaction => ({
        id: transaction.id,
        type: transaction.transaction_type,
        description: transaction.description || `${transaction.transaction_type} - $${transaction.amount}`,
        time: new Date(transaction.created_at).toLocaleString()
      })) || [];

      console.log('Recent activity:', recentActivity);

      setStats({
        totalCustomers: customerCount || 0,
        totalDeposits: Math.round(totalDeposits * 100) / 100,
        activeLoans: Math.round(activeLoansValue * 100) / 100,
        pendingReviews: pendingCount || 0,
        recentActivity
      });

      console.log('Admin stats updated successfully');

    } catch (error: any) {
      console.error('Error fetching admin stats:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load dashboard statistics: " + error.message,
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
