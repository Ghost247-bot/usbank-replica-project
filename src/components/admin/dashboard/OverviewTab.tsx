
import React from 'react';
import KeyMetrics from './KeyMetrics';
import QuickActions from './QuickActions';
import SystemAlerts from './SystemAlerts';
import BranchPerformance from './BranchPerformance';
import RecentActivityCard from '@/components/admin/RecentActivityCard';

interface OverviewTabProps {
  stats: {
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
  };
  loading: boolean;
  onTabChange: (tab: string) => void;
}

const OverviewTab: React.FC<OverviewTabProps> = ({ stats, loading, onTabChange }) => {
  return (
    <div className="space-y-8">
      {/* Key Metrics */}
      <KeyMetrics stats={stats} loading={loading} />

      {/* Recent Activity and Admin Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivityCard activities={stats.recentActivity} loading={loading} />

        <div className="space-y-6">
          <QuickActions onTabChange={onTabChange} />
          <SystemAlerts />
        </div>
      </div>

      {/* Branch Performance Overview */}
      <BranchPerformance />
    </div>
  );
};

export default OverviewTab;
