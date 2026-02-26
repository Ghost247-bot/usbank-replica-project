
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminProtectedRoute from '@/components/AdminProtectedRoute';
import UserManagement from '@/components/admin/UserManagement';
import EnhancedUserManagement from '@/components/admin/EnhancedUserManagement';
import AccountManagement from '@/components/admin/AccountManagement';
import BannerManagement from '@/components/admin/BannerManagement';
import NotificationManagement from '@/components/admin/NotificationManagement';
import TransactionManagement from '@/components/admin/TransactionManagement';
import OverviewTab from '@/components/admin/dashboard/OverviewTab';
import { Button } from '@/components/ui/button';
import { useAdminStats } from '@/hooks/useAdminStats';
import { useAdminUpdates } from '@/hooks/useRealTimeUpdates';
import { useAuth } from '@/hooks/useAuth';
import { logger } from '@/lib/logger';

const AdminDashboardContent = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { stats, loading } = useAdminStats();
  const { user } = useAuth();
  
  // Real-time updates for admin (updates react-query cache)
  useAdminUpdates();

  logger.debug('Admin dashboard rendering with stats:', stats, 'loading:', loading);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back, {user?.user_metadata?.full_name || user?.user_metadata?.first_name || 'Admin'}!
                </h1>
              <p className="text-gray-600">Moonstone Bank Administration Panel</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="flex w-full overflow-x-auto justify-start sm:grid sm:grid-cols-6 h-auto p-1 bg-muted/50 no-scrollbar">
                <TabsTrigger value="overview" className="min-w-[100px] sm:min-w-0">Overview</TabsTrigger>
                <TabsTrigger value="users" className="min-w-[100px] sm:min-w-0">Users</TabsTrigger>
                <TabsTrigger value="accounts" className="min-w-[100px] sm:min-w-0">Accounts</TabsTrigger>
                <TabsTrigger value="transactions" className="min-w-[100px] sm:min-w-0">Transactions</TabsTrigger>
                <TabsTrigger value="banners" className="min-w-[100px] sm:min-w-0">Banners</TabsTrigger>
                <TabsTrigger value="notifications" className="min-w-[100px] sm:min-w-0">Notifications</TabsTrigger>
              </TabsList>


            <TabsContent value="overview" className="space-y-8">
              <OverviewTab 
                stats={stats} 
                loading={loading} 
                onTabChange={setActiveTab}
              />
            </TabsContent>

            <TabsContent value="users">
              <EnhancedUserManagement />
            </TabsContent>

            <TabsContent value="accounts">
              <AccountManagement />
            </TabsContent>

            <TabsContent value="transactions">
              <TransactionManagement />
            </TabsContent>

            <TabsContent value="banners">
              <BannerManagement />
            </TabsContent>

            <TabsContent value="notifications">
              <NotificationManagement />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <AdminProtectedRoute>
      <AdminDashboardContent />
    </AdminProtectedRoute>
  );
};

export default AdminDashboard;
