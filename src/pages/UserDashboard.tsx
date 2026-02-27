
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
import BudgetTracker from '@/components/dashboard/BudgetTracker';
import FinancialGoals from '@/components/dashboard/FinancialGoals';
import UpcomingBills from '@/components/dashboard/UpcomingBills';
import AlertsNotifications from '@/components/dashboard/AlertsNotifications';
import Rewards from '@/components/dashboard/Rewards';
import Profile from '@/components/dashboard/Profile';
import WelcomeDropdown from '@/components/dashboard/WelcomeDropdown';
import { useAuth } from '@/hooks/useAuth';

const UserDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if we're done loading and there's no user
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  // Show loading spinner while auth is initializing
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Don't render anything if no user (will redirect)
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <WelcomeDropdown user={user} />
          <p className="text-gray-600 mt-2">
            Here's an overview of your accounts and recent activity.
          </p>
        </div>

        <DashboardBanner />
        
        {/* Profile Section */}
        <div className="mb-8">
          <Profile />
        </div>

        <AccountOverview />
        <MonthlySpendingTrend />
        
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <RecentTransactions />
          <SpendingAnalytics />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickActions />
          <BudgetTracker />
          <FinancialGoals />
          <UpcomingBills />
          <AlertsNotifications />
          <Rewards />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;
