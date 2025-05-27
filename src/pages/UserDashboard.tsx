
import React from 'react';
import { CreditCard, DollarSign, TrendingUp, Bell, Download, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

          {/* Account Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,543.28</div>
                <p className="text-xs text-muted-foreground">
                  +2.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Checking Account</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3,247.85</div>
                <p className="text-xs text-muted-foreground">
                  Available balance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Savings Account</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$9,295.43</div>
                <p className="text-xs text-muted-foreground">
                  1.5% APY earning
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Credit Card</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$842.15</div>
                <p className="text-xs text-muted-foreground">
                  Current balance
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest account activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Grocery Store</p>
                        <p className="text-sm text-gray-600">Yesterday</p>
                      </div>
                    </div>
                    <span className="text-red-600 font-semibold">-$87.32</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <ArrowUpRight className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Salary Deposit</p>
                        <p className="text-sm text-gray-600">2 days ago</p>
                      </div>
                    </div>
                    <span className="text-green-600 font-semibold">+$3,200.00</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Electric Bill</p>
                        <p className="text-sm text-gray-600">3 days ago</p>
                      </div>
                    </div>
                    <span className="text-red-600 font-semibold">-$142.68</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <ArrowDownRight className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium">Online Purchase</p>
                        <p className="text-sm text-gray-600">4 days ago</p>
                      </div>
                    </div>
                    <span className="text-red-600 font-semibold">-$59.99</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Transactions
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions & Alerts */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-20 flex flex-col items-center justify-center space-y-2">
                      <ArrowUpRight className="h-5 w-5" />
                      <span className="text-sm">Transfer Money</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                      <Download className="h-5 w-5" />
                      <span className="text-sm">Pay Bills</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                      <CreditCard className="h-5 w-5" />
                      <span className="text-sm">Deposit Check</span>
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                      <Download className="h-5 w-5" />
                      <span className="text-sm">Download Statement</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Alerts & Notifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                      <p className="text-sm font-medium text-blue-800">Payment Reminder</p>
                      <p className="text-sm text-blue-600">Credit card payment due in 3 days</p>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-sm font-medium text-green-800">Direct Deposit</p>
                      <p className="text-sm text-green-600">Salary deposited successfully</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;
