import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { logger } from '@/lib/logger';

interface AnalyticsSummary {
  total_balance: number;
  monthly_income: number;
  monthly_expenses: number;
  savings_rate: number;
  budget_utilization: number;
}

interface SpendingByCategory {
  category: string;
  amount: number;
  percentage: number;
}

interface MonthlyTrend {
  month: string;
  income: number;
  expenses: number;
  savings: number;
}

interface PortfolioSummary {
  asset_class: string;
  market_value: number;
  percentage: number;
  pct_change: number;
}

export const useAnalytics = (period: 'month' | 'quarter' | 'year' = 'month') => {
  const { user } = useAuth();
  
  const getPeriodDates = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return { start, end };
  };

  const { start, end } = getPeriodDates();

  const { data: summary, isLoading: summaryLoading } = useQuery({
    queryKey: ['analytics-summary', user?.id, period],
    queryFn: async () => {
      if (!user) return null;
      
      try {
        logger.debug('Fetching analytics summary for user:', user.id);
        
        const { data, error } = await (supabase as any)
          .rpc('rpc_get_analytics_summary', {
            p_user_id: user.id,
            p_period_start: start.toISOString(),
            p_period_end: end.toISOString()
          });

        if (error) {
          logger.error('Error fetching analytics summary:', error.message);
          return null; // Return null instead of throwing
        }
        
        return data?.[0] || null;
      } catch (err) {
        logger.error('Unexpected error fetching analytics summary:', err);
        return null; // Return null for any error
      }
    },
    enabled: !!user,
  });

  const { data: spendingByCategory, isLoading: spendingLoading } = useQuery({
    queryKey: ['spending-by-category', user?.id, period],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await (supabase as any)
          .rpc('rpc_get_spending_by_category', {
            p_user_id: user.id,
            p_period_start: start.toISOString(),
            p_period_end: end.toISOString()
          });

        if (error) {
          logger.error('Error fetching spending by category:', error.message);
          return []; // Return empty array instead of throwing
        }
        
        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching spending by category:', err);
        return []; // Return empty array for any error
      }
    },
    enabled: !!user,
  });

  const { data: monthlyTrends, isLoading: trendsLoading } = useQuery({
    queryKey: ['monthly-trends', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await (supabase as any)
          .rpc('rpc_get_monthly_trends', {
            p_user_id: user.id,
            p_months_back: 6
          });

        if (error) {
          logger.error('Error fetching monthly trends:', error.message);
          return []; // Return empty array instead of throwing
        }
        
        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching monthly trends:', err);
        return []; // Return empty array for any error
      }
    },
    enabled: !!user,
  });

  const { data: portfolioSummary, isLoading: portfolioLoading } = useQuery({
    queryKey: ['portfolio-summary', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await (supabase as any)
          .rpc('rpc_get_portfolio_summary', {
            p_user_id: user.id
          });

        if (error) {
          logger.error('Error fetching portfolio summary:', error.message);
          return []; // Return empty array instead of throwing
        }
        
        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching portfolio summary:', err);
        return []; // Return empty array for any error
      }
    },
    enabled: !!user,
  });

  const { data: budgetUtilization, isLoading: budgetLoading } = useQuery({
    queryKey: ['budget-utilization', user?.id, period],
    queryFn: async () => {
      if (!user) return [];
      
      try {
        const { data, error } = await (supabase as any)
          .rpc('rpc_get_budget_utilization', {
            p_user_id: user.id,
            p_period_start: start.toISOString(),
            p_period_end: end.toISOString()
          });

        if (error) {
          logger.error('Error fetching budget utilization:', error.message);
          return []; // Return empty array instead of throwing
        }
        
        return data || [];
      } catch (err) {
        logger.error('Unexpected error fetching budget utilization:', err);
        return []; // Return empty array for any error
      }
    },
    enabled: !!user,
  });

  const isLoading = summaryLoading || spendingLoading || trendsLoading || portfolioLoading || budgetLoading;

  return {
    summary: summary as AnalyticsSummary | null,
    spendingByCategory: spendingByCategory as SpendingByCategory[],
    monthlyTrends: monthlyTrends as MonthlyTrend[],
    portfolioSummary: portfolioSummary as PortfolioSummary[],
    budgetUtilization: budgetUtilization as any[],
    isLoading,
    refetch: () => {
      // React Query will handle refetching
    }
  };
};
