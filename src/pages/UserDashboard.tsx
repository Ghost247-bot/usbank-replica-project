
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccountOverview from '@/components/dashboard/AccountOverview';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import SpendingAnalytics from '@/components/dashboard/SpendingAnalytics';
import BudgetTracker from '@/components/dashboard/BudgetTracker';
import FinancialGoals from '@/components/dashboard/FinancialGoals';
import UpcomingBills from '@/components/dashboard/UpcomingBills';
import Rewards from '@/components/dashboard/Rewards';
import MonthlySpendingTrend from '@/components/dashboard/MonthlySpendingTrend';
import QuickActions from '@/components/dashboard/QuickActions';
import AlertsNotifications from '@/components/dashboard/AlertsNotifications';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
            <p className="text-gray-600">Here's what's happening with your accounts today.</p>
          </div>

          <AccountOverview />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <RecentTransactions />
            <SpendingAnalytics />
          </div>

          {/* Secondary Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <BudgetTracker />
            <FinancialGoals />
            <div className="space-y-6">
              <UpcomingBills />
              <Rewards />
            </div>
          </div>

          <MonthlySpendingTrend />

          {/* Quick Actions & Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <QuickActions />
            <AlertsNotifications />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;
