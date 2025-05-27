
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, BarChart, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TreasuryManagement = () => {
  const benefits = [
    "Cash flow optimization",
    "Automated reporting",
    "Risk management tools",
    "Investment solutions",
    "Multi-bank connectivity",
    "Real-time visibility"
  ];

  const treasuryFeatures = [
    {
      icon: BarChart,
      title: "Cash management",
      description: "Optimize cash flow with advanced forecasting and positioning tools"
    },
    {
      icon: Shield,
      title: "Risk mitigation",
      description: "Manage interest rate, currency, and liquidity risks effectively"
    },
    {
      icon: Smartphone,
      title: "Digital platform",
      description: "Access treasury functions through our comprehensive online platform"
    },
    {
      icon: Users,
      title: "Expert support",
      description: "Dedicated treasury specialists provide ongoing guidance and support"
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
                  Enterprise Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Treasury Management Solutions
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Streamline your corporate treasury operations with our comprehensive 
                  cash management, risk mitigation, and investment solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Contact Treasury Team
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    View Solutions
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Treasury Benefits</h3>
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
                Comprehensive treasury solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our treasury management services help optimize cash flow, manage risk, 
                and improve operational efficiency for businesses of all sizes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {treasuryFeatures.map((feature, index) => (
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

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Full spectrum of treasury services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cash Concentration</h3>
                <p className="text-gray-600">Centralize cash from multiple accounts to optimize liquidity and reduce banking costs.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Services</h3>
                <p className="text-gray-600">Maximize returns on excess cash with a range of investment options and portfolio management.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fraud Prevention</h3>
                <p className="text-gray-600">Protect your business with advanced fraud detection and positive pay services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Optimize your treasury operations</h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with our treasury management experts to streamline operations, 
              improve cash flow, and mitigate financial risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Contact Treasury Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Request Consultation
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Treasury solutions customized for your business needs.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TreasuryManagement;
