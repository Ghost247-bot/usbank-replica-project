
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, Monitor, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const OnlineBanking = () => {
  const benefits = [
    "24/7 account access",
    "Free bill pay service",
    "Mobile check deposit",
    "Real-time alerts",
    "Advanced security features",
    "Transfer between accounts"
  ];

  const onlineFeatures = [
    {
      icon: Monitor,
      title: "Full-featured platform",
      description: "Complete banking services available online with intuitive interface"
    },
    {
      icon: Shield,
      title: "Bank-level security",
      description: "Multi-factor authentication and encryption protect your information"
    },
    {
      icon: Smartphone,
      title: "Mobile integration",
      description: "Seamless experience across desktop, tablet, and mobile devices"
    },
    {
      icon: Users,
      title: "Personal financial tools",
      description: "Budgeting, spending insights, and financial planning tools"
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
                  Digital Banking
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Banking at Your Fingertips
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Manage your money anytime, anywhere with our secure online banking platform. 
                  Access all your accounts and banking services 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Log In to Online Banking
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Enroll Now
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Online Banking Features</h3>
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
                Complete banking control online
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our online banking platform puts you in control with comprehensive 
                features, robust security, and user-friendly design.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {onlineFeatures.map((feature, index) => (
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
              Everything you need in one place
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Account Management</h3>
                <p className="text-gray-600">View balances, transaction history, and manage all your accounts in one dashboard.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bill Pay</h3>
                <p className="text-gray-600">Schedule and pay bills automatically. Set up recurring payments for hassle-free management.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Money Transfers</h3>
                <p className="text-gray-600">Transfer money between accounts, send to other banks, or use Zelle for quick payments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Start banking online today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the convenience of 24/7 banking with our secure online platform. 
              Manage your finances on your schedule, wherever you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Enroll in Online Banking
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Enrollment requires valid account and verification.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OnlineBanking;
