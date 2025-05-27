import React from 'react';
import { CreditCard, DollarSign, TrendingUp, Bell, Download, ArrowUpRight, ArrowDownRight, PieChart, Target, Gift, Settings, Calendar, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PieChart as RechartsPieChart, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Pie } from 'recharts';

const UserDashboard = () => {
  // Sample data for charts
  const spendingData = [
    { name: 'Groceries', value: 450, color: '#3B82F6' },
    { name: 'Gas', value: 200, color: '#EF4444' },
    { name: 'Entertainment', value: 150, color: '#10B981' },
    { name: 'Shopping', value: 300, color: '#F59E0B' },
    { name: 'Dining', value: 180, color: '#8B5CF6' },
  ];

  const monthlySpendingData = [
    { month: 'Jan', amount: 2100 },
    { month: 'Feb', amount: 1850 },
    { month: 'Mar', amount: 2300 },
    { month: 'Apr', amount: 1950 },
    { month: 'May', amount: 2400 },
    { month: 'Jun', amount: 1280 },
  ];

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

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Recent Transactions */}
            <Card className="lg:col-span-1">
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

            {/* Spending Analytics */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5" />
                  <span>Spending Analytics</span>
                </CardTitle>
                <CardDescription>Your spending breakdown for this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={spendingData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {spendingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-3">
                    {spendingData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                        <span className="text-sm font-semibold">${item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Budget Tracker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Budget Tracker</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Monthly Budget</span>
                      <span className="text-sm text-gray-600">$1,280 / $2,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '64%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Dining Out</span>
                      <span className="text-sm text-gray-600">$180 / $300</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Shopping</span>
                      <span className="text-sm text-red-600">$320 / $250</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Manage Budget
                </Button>
              </CardContent>
            </Card>

            {/* Financial Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Financial Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Emergency Fund</span>
                      <span className="text-sm text-gray-600">$5,200 / $10,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '52%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Vacation Fund</span>
                      <span className="text-sm text-gray-600">$1,800 / $5,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '36%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Car Down Payment</span>
                      <span className="text-sm text-gray-600">$3,500 / $8,000</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '44%' }}></div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Goals
                </Button>
              </CardContent>
            </Card>

            {/* Bill Reminders & Rewards */}
            <div className="space-y-6">
              {/* Bill Reminders */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Upcoming Bills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-yellow-50 border border-yellow-200 rounded-md">
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-4 w-4 text-yellow-600" />
                        <div>
                          <p className="text-sm font-medium">Credit Card</p>
                          <p className="text-xs text-gray-600">Due in 3 days</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold">$842.15</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 border border-blue-200 rounded-md">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">Internet</p>
                          <p className="text-xs text-gray-600">Due in 5 days</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold">$79.99</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Bills
                  </Button>
                </CardContent>
              </Card>

              {/* Rewards */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Gift className="h-5 w-5" />
                    <span>Rewards</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$24.50</div>
                    <p className="text-sm text-gray-600 mb-4">Available Cashback</p>
                    <Button size="sm" className="w-full">
                      Redeem Rewards
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Monthly Spending Trend */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Monthly Spending Trend</CardTitle>
              <CardDescription>Your spending patterns over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlySpendingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                    <Bar dataKey="amount" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions & Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
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
                    <Settings className="h-5 w-5" />
                    <span className="text-sm">Account Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Alerts & Notifications */}
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
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm font-medium text-yellow-800">Budget Alert</p>
                    <p className="text-sm text-yellow-600">You've exceeded your shopping budget</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Manage Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;
