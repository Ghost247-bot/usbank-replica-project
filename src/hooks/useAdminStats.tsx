
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/lib/logger';
import { useEffect } from 'react';

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
  const queryClient = useQueryClient();

  const { data: stats, isLoading: loading, refetch } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async (): Promise<AdminStats> => {
      logger.debug('Fetching admin dashboard stats...', 'admin-stats');

      // Use a slightly longer timeout for the whole batch
      const fetchPromise = async () => {
        const [profilesCount, accountsData, pendingCount, recentData] = await Promise.all([
          supabase.from('profiles').select('*', { count: 'estimated', head: true }),
          supabase.from('accounts').select('balance, account_type, status'),
          supabase.from('transactions').select('*', { count: 'estimated', head: true }).eq('status', 'pending'),
          supabase.from('transactions').select('id, transaction_type, amount, created_at, description').order('created_at', { ascending: false }).limit(5)
        ]);

        const deposits = accountsData.data?.reduce((sum, account) => sum + Number(account.balance || 0), 0) || 0;
        const loans = accountsData.data?.filter(acc => acc.account_type === 'loan' && acc.status === 'active')
                                         .reduce((sum, acc) => sum + Math.abs(Number(acc.balance || 0)), 0) || 0;

        return {
          totalCustomers: profilesCount.count || 0,
          totalDeposits: Math.round(deposits * 100) / 100,
          activeLoans: Math.round(loans * 100) / 100,
          pendingReviews: pendingCount.count || 0,
          recentActivity: recentData.data?.map(t => ({
            id: t.id,
            type: t.transaction_type,
            description: t.description || `${t.transaction_type} - $${t.amount}`,
            time: new Date(t.created_at).toLocaleString()
          })) || []
        };
      };

      // Fallback to admin client if public client fails
      try {
        return await fetchPromise();
      } catch (err) {
        logger.warn('Public stats fetch failed, trying admin client...', 'admin-stats', err);
        const { adminOperation } = await import('@/integrations/supabase/admin');
        
        const result = await adminOperation(async (client) => {
          if (!client) throw new Error('Admin client not available');
          const [p, a, t, r] = await Promise.all([
            client.from('profiles').select('*', { count: 'estimated', head: true }),
            client.from('accounts').select('balance, account_type, status'),
            client.from('transactions').select('*', { count: 'estimated', head: true }).eq('status', 'pending'),
            client.from('transactions').select('id, transaction_type, amount, created_at, description').order('created_at', { ascending: false }).limit(5)
          ]);
          return { p, a, t, r };
        });

        const deposits = result.a.data?.reduce((sum: number, acc: any) => sum + Number(acc.balance || 0), 0) || 0;
        const loans = result.a.data?.filter((acc: any) => acc.account_type === 'loan' && acc.status === 'active')
                                     .reduce((sum: number, acc: any) => sum + Math.abs(Number(acc.balance || 0)), 0) || 0;

        return {
          totalCustomers: result.p.count || 0,
          totalDeposits: Math.round(deposits * 100) / 100,
          activeLoans: Math.round(loans * 100) / 100,
          pendingReviews: result.t.count || 0,
          recentActivity: result.r.data?.map((t: any) => ({
            id: t.id,
            type: t.transaction_type,
            description: t.description || `${t.transaction_type} - $${t.amount}`,
            time: new Date(t.created_at).toLocaleString()
          })) || []
        };
      }
    },
    staleTime: 30000, // 30 seconds
  });

  // Set up realtime listeners for admin stats
  useEffect(() => {
    const channel = supabase
      .channel('admin-stats-updates')
      .on('postgres_changes', { event: '*', table: 'profiles' }, () => queryClient.invalidateQueries({ queryKey: ['admin-stats'] }))
      .on('postgres_changes', { event: '*', table: 'accounts' }, () => queryClient.invalidateQueries({ queryKey: ['admin-stats'] }))
      .on('postgres_changes', { event: '*', table: 'transactions' }, () => queryClient.invalidateQueries({ queryKey: ['admin-stats'] }))
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  return { 
    stats: stats || {
      totalCustomers: 0,
      totalDeposits: 0,
      activeLoans: 0,
      pendingReviews: 0,
      recentActivity: []
    }, 
    loading, 
    refetch 
  };
};
