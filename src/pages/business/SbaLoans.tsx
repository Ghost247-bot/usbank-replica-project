
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, Building, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SbaLoans = () => {
  const benefits = [
    "Lower down payments",
    "Competitive interest rates",
    "Longer repayment terms",
    "Government backing",
    "Flexible use of funds",
    "Expert SBA guidance"
  ];

  const sbaFeatures = [
    {
      icon: Building,
      title: "Business expansion",
      description: "Fund growth, equipment purchases, and working capital needs"
    },
    {
      icon: Shield,
      title: "Government guaranteed",
      description: "SBA backing provides lenders confidence and borrowers better terms"
    },
    {
      icon: Smartphone,
      title: "Streamlined process",
      description: "Simplified application process with dedicated SBA specialists"
    },
    {
      icon: Users,
      title: "Expert support",
      description: "Experienced SBA loan officers guide you through every step"
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
                  Government Backed
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  SBA Loans for Small Business
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Access government-backed financing with favorable terms for small business 
                  growth, equipment purchases, and working capital needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Apply for SBA Loan
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Learn About SBA
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">SBA Loan Benefits</h3>
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
                SBA financing advantages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                SBA loans offer small businesses access to capital with government backing, 
                providing better terms and more flexible requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sbaFeatures.map((feature, index) => (
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

        {/* SBA Loan Types */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              SBA loan programs
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Choose from various SBA loan programs designed for different business needs
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">SBA 7(a) Loans</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Up to $5M</div>
                <p className="text-gray-600 mb-6">Most popular SBA loan program</p>
                <ul className="space-y-2 mb-6">
                  <li>• Working capital</li>
                  <li>• Equipment purchases</li>
                  <li>• Business acquisitions</li>
                  <li>• Real estate purchases</li>
                  <li>• Debt refinancing</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for 7(a) Loan
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Fast Track</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">SBA Express</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Up to $500K</div>
                <p className="text-gray-600 mb-6">Faster approval process</p>
                <ul className="space-y-2 mb-6">
                  <li>• 36-hour approval decision</li>
                  <li>• Less paperwork required</li>
                  <li>• Revolving credit options</li>
                  <li>• Lines of credit available</li>
                  <li>• Lower SBA guarantee</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for Express
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">SBA 504 Loans</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Up to $5.5M</div>
                <p className="text-gray-600 mb-6">Long-term real estate financing</p>
                <ul className="space-y-2 mb-6">
                  <li>• Commercial real estate</li>
                  <li>• Fixed-rate financing</li>
                  <li>• Lower down payments</li>
                  <li>• Long-term repayment</li>
                  <li>• Job creation requirements</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for 504 Loan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to grow with SBA financing?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Take advantage of government-backed SBA loans with competitive rates 
              and favorable terms to fuel your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Talk to SBA Specialist
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              SBA approval required. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SbaLoans;
