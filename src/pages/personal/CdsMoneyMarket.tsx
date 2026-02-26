
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, TrendingUp, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CdsMoneyMarket = () => {
  const benefits = [
    "Guaranteed returns on CDs",
    "Higher yields than savings",
    "FDIC insured up to $250,000",
    "Flexible terms available",
    "No monthly maintenance fees",
    "Competitive interest rates"
  ];

  const accountFeatures = [
    {
      icon: TrendingUp,
      title: "High-yield accounts",
      description: "Earn more with our competitive rates on CDs and money market accounts"
    },
    {
      icon: Shield,
      title: "FDIC protection",
      description: "Your deposits are fully insured up to $250,000 per depositor"
    },
    {
      icon: Smartphone,
      title: "Online management",
      description: "Manage your accounts and track earnings with our digital tools"
    },
    {
      icon: Users,
      title: "Flexible options",
      description: "Choose from various terms and minimum deposits that fit your needs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Star className="h-4 w-4 mr-2" />
                  High-Yield Options
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  CDs & Money Market Accounts
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Maximize your savings with our high-yield CDs and money market accounts. 
                  Earn competitive rates while keeping your money safe and accessible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Open Account
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    View Rates
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Benefits</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Grow your savings with confidence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our CDs and money market accounts offer higher yields than traditional 
                savings with the security of FDIC insurance protection.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {accountFeatures.map((feature, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Options */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Choose your savings strategy
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Find the right account to maximize your earnings
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Certificates of Deposit</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Up to 5.25% APY</div>
                <p className="text-gray-600 mb-6">Guaranteed returns with fixed rates</p>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>3-month CD:</span>
                    <span className="font-semibold">4.25% APY</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12-month CD:</span>
                    <span className="font-semibold">4.75% APY</span>
                  </div>
                  <div className="flex justify-between">
                    <span>24-month CD:</span>
                    <span className="font-semibold">5.00% APY</span>
                  </div>
                  <div className="flex justify-between">
                    <span>60-month CD:</span>
                    <span className="font-semibold">5.25% APY</span>
                  </div>
                </div>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Open CD Account
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">High Liquidity</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Money Market Account</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">4.50% APY</div>
                <p className="text-gray-600 mb-6">High yield with check-writing privileges</p>
                <ul className="space-y-2 mb-6">
                  <li>• Tiered interest rates</li>
                  <li>• Check-writing privileges</li>
                  <li>• Debit card access</li>
                  <li>• Online and mobile banking</li>
                  <li>• $2,500 minimum opening deposit</li>
                  <li>• Up to 6 withdrawals per month</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Open Money Market
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Start earning more today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Choose from our high-yield CDs and money market accounts to maximize 
              your savings potential with competitive rates and FDIC protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Open Account
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Compare Rates
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Rates subject to change. Minimum deposits and terms apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CdsMoneyMarket;
