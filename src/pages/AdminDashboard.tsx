
import React, { useState } from 'react';
import { Users, DollarSign, TrendingUp, AlertTriangle, Settings } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminProtectedRoute from '@/components/AdminProtectedRoute';
import UserManagement from '@/components/admin/UserManagement';
import AccountManagement from '@/components/admin/AccountManagement';
import BannerManagement from '@/components/admin/BannerManagement';
import NotificationManagement from '@/components/admin/NotificationManagement';
import TransactionManagement from '@/components/admin/TransactionManagement';
import StatsCard from '@/components/admin/StatsCard';
import RecentActivityCard from '@/components/admin/RecentActivityCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAdminStats } from '@/hooks/useAdminStats';

const AdminDashboardContent = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { stats, loading } = useAdminStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Moonstone Bank Administration Panel</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </Button>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="banners">Banners</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Key Metrics */}
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

              {/* Recent Activity and Admin Tools */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <RecentActivityCard activities={stats.recentActivity} loading={loading} />

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Admin Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Button
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center space-y-2"
                          onClick={() => setActiveTab('users')}
                        >
                          <Users className="h-5 w-5" />
                          <span className="text-sm">Manage Users</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center space-y-2"
                          onClick={() => setActiveTab('accounts')}
                        >
                          <DollarSign className="h-5 w-5" />
                          <span className="text-sm">Manage Accounts</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center space-y-2"
                          onClick={() => setActiveTab('banners')}
                        >
                          <AlertTriangle className="h-5 w-5" />
                          <span className="text-sm">Manage Banners</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="h-20 flex flex-col items-center justify-center space-y-2"
                          onClick={() => setActiveTab('notifications')}
                        >
                          <Settings className="h-5 w-5" />
                          <span className="text-sm">Send Notifications</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <span>System Alerts</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                          <p className="text-sm font-medium text-red-800">Security Alert</p>
                          <p className="text-sm text-red-600">Multiple failed login attempts detected</p>
                        </div>
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                          <p className="text-sm font-medium text-yellow-800">System Maintenance</p>
                          <p className="text-sm text-yellow-600">Scheduled maintenance tomorrow at 2 AM</p>
                        </div>
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                          <p className="text-sm font-medium text-blue-800">Compliance Report</p>
                          <p className="text-sm text-blue-600">Monthly compliance report ready for review</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Branch Performance Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Branch Performance Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4">Branch</th>
                          <th className="text-left p-4">Customers</th>
                          <th className="text-left p-4">Deposits</th>
                          <th className="text-left p-4">Loans</th>
                          <th className="text-left p-4">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4 font-medium">Downtown</td>
                          <td className="p-4">3,247</td>
                          <td className="p-4">$12.4M</td>
                          <td className="p-4">$8.2M</td>
                          <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4 font-medium">Westside</td>
                          <td className="p-4">2,891</td>
                          <td className="p-4">$9.8M</td>
                          <td className="p-4">$6.1M</td>
                          <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-4 font-medium">Northgate</td>
                          <td className="p-4">2,156</td>
                          <td className="p-4">$7.3M</td>
                          <td className="p-4">$4.8M</td>
                          <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Maintenance</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users">
              <UserManagement />
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
