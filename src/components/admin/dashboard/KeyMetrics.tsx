
import React from 'react';
import { Users, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';
import StatsCard from '@/components/admin/StatsCard';

interface KeyMetricsProps {
  stats: {
    totalCustomers: number;
    totalDeposits: number;
    activeLoans: number;
    pendingReviews: number;
  };
  loading: boolean;
}

const KeyMetrics: React.FC<KeyMetricsProps> = ({ stats, loading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatsCard
        title="Total Customers"
        value={stats.totalCustomers}
        change="+5.2% from last month"
        icon={Users}
        loading={loading}
      />
      <StatsCard
        title="Total Deposits"
        value={Math.round(stats.totalDeposits / 1000000 * 10) / 10}
        change="+12.1% from last month"
        icon={DollarSign}
        loading={loading}
      />
      <StatsCard
        title="Active Loans"
        value={Math.round(stats.activeLoans / 1000000 * 10) / 10}
        change="+8.7% from last month"
        icon={TrendingUp}
        loading={loading}
      />
      <StatsCard
        title="Pending Reviews"
        value={stats.pendingReviews}
        change="Requires attention"
        icon={AlertTriangle}
        loading={loading}
      />
    </div>
  );
};

export default KeyMetrics;
