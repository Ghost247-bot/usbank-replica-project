
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DashboardBanner from '@/components/dashboard/DashboardBanner';
import AccountOverview from '@/components/dashboard/AccountOverview';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import SpendingAnalytics from '@/components/dashboard/SpendingAnalytics';
import MonthlySpendingTrend from '@/components/dashboard/MonthlySpendingTrend';
import QuickActions from '@/components/dashboard/QuickActions';
import EnhancedQuickActions from '@/components/dashboard/EnhancedQuickActions';
import AdvancedAnalytics from '@/components/dashboard/AdvancedAnalytics';
import NotificationCenter from '@/components/dashboard/NotificationCenter';
import BudgetTracker from '@/components/dashboard/BudgetTracker';
import FinancialGoals from '@/components/dashboard/FinancialGoals';
import UpcomingBills from '@/components/dashboard/UpcomingBills';
import AlertsNotifications from '@/components/dashboard/AlertsNotifications';
import Rewards from '@/components/dashboard/Rewards';
import Profile from '@/components/dashboard/Profile';
import { useAuth } from '@/hooks/useAuth';
import { useNotifications } from '@/hooks/useNotifications';
import { useTransactionUpdates, useBalanceUpdates, useNotificationUpdates } from '@/hooks/useRealTimeUpdates';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { logger } from '@/lib/logger';

  const UserDashboard = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    // Initialize real-time listeners (updates react-query cache)
    useTransactionUpdates(user?.id || '');
    useBalanceUpdates(user?.id || '');
    useNotificationUpdates(user?.id || '');

    const { notifications } = useNotifications();
    const unreadCount = notifications.filter(n => !n.is_read).length;


  useEffect(() => {
    // Only redirect if we're done loading and there's no user
    if (!loading && !user) {
      logger.debug('No user found after loading completed, redirecting to auth');
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  // Show loading spinner while auth is initializing
  if (loading) {
    logger.debug('Auth loading, showing spinner');
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Don't render anything if no user (will redirect)
  if (!user) {
    logger.debug('No user, will redirect');
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  logger.debug('Rendering dashboard for user:', user.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.user_metadata?.full_name || user.user_metadata?.first_name || 'Member'}!
              </h1>
              <p className="text-gray-600 mt-2">
                Here's an overview of your accounts and recent activity.
              </p>
            </div>
          <div className="flex items-center space-x-2">
            <Badge variant={unreadCount > 0 ? "destructive" : "secondary"}>
              {unreadCount} Notifications
            </Badge>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Live</span>
            </div>
          </div>
        </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="flex w-full overflow-x-auto justify-start sm:grid sm:grid-cols-5 h-auto p-1 bg-muted/50 no-scrollbar">
              <TabsTrigger value="overview" className="min-w-[100px] sm:min-w-0">Overview</TabsTrigger>
              <TabsTrigger value="analytics" className="min-w-[100px] sm:min-w-0">Analytics</TabsTrigger>
              <TabsTrigger value="notifications" className="min-w-[100px] sm:min-w-0">Notifications</TabsTrigger>
              <TabsTrigger value="transactions" className="min-w-[100px] sm:min-w-0">Transactions</TabsTrigger>
              <TabsTrigger value="settings" className="min-w-[100px] sm:min-w-0">Settings</TabsTrigger>
            </TabsList>


          <TabsContent value="overview" className="space-y-6">
            <DashboardBanner />
            
            {/* Profile Section */}
            <div className="mb-8">
              <Profile />
            </div>

            <AccountOverview />
            <MonthlySpendingTrend />
            <RecentTransactions />
            <EnhancedQuickActions />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <AdvancedAnalytics />
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <NotificationCenter />
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <RecentTransactions />
            <SpendingAnalytics />
            <BudgetTracker />
            <UpcomingBills />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <FinancialGoals />
            <AlertsNotifications />
            <Rewards />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserDashboard;
