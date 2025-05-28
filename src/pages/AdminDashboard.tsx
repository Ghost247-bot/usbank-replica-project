import React from 'react';
import { Users, DollarSign, TrendingUp, AlertTriangle, Eye, Settings, FileText, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminProtectedRoute from '@/components/AdminProtectedRoute';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AdminDashboardContent = () => {
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

          {/* ... keep existing code (Key Metrics section) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,847</div>
                <p className="text-xs text-muted-foreground">
                  +5.2% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Deposits</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45.2M</div>
                <p className="text-xs text-muted-foreground">
                  +12.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$23.8M</div>
                <p className="text-xs text-muted-foreground">
                  +8.7% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">
                  Requires attention
                </p>
              </CardContent>
            </Card>
          </div>

          {/* ... keep existing code (rest of the dashboard sections) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Customer Activity</CardTitle>
                <CardDescription>Latest account openings and transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-md">
                    <div>
                      <p className="font-medium">New Account Opened</p>
                      <p className="text-sm text-gray-600">Sarah Johnson - Checking Account</p>
                    </div>
                    <span className="text-sm text-gray-500">2 min ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-md">
                    <div>
                      <p className="font-medium">Loan Application</p>
                      <p className="text-sm text-gray-600">Michael Smith - $50,000 Business Loan</p>
                    </div>
                    <span className="text-sm text-gray-500">15 min ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-md">
                    <div>
                      <p className="font-medium">Large Transaction</p>
                      <p className="text-sm text-gray-600">Emma Davis - $25,000 Wire Transfer</p>
                    </div>
                    <span className="text-sm text-gray-500">1 hour ago</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-md">
                    <div>
                      <p className="font-medium">Credit Card Application</p>
                      <p className="text-sm text-gray-600">Robert Wilson - Platinum Card</p>
                    </div>
                    <span className="text-sm text-gray-500">2 hours ago</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Activity
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Administrative Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                      <Users className="h-5 w-5" />
                      <span className="text-sm">Manage Users</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                      <FileText className="h-5 w-5" />
                      <span className="text-sm">Generate Reports</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                      <Eye className="h-5 w-5" />
                      <span className="text-sm">Transaction Monitor</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                      <BarChart3 className="h-5 w-5" />
                      <span className="text-sm">Analytics</span>
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

          {/* Quick Stats Table */}
          <Card className="mt-8">
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
