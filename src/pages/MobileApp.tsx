
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, Camera, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MobileApp = () => {
  const benefits = [
    "Award-winning mobile app",
    "Biometric login security",
    "Mobile check deposit",
    "Real-time notifications",
    "Digital wallet integration",
    "24/7 account access"
  ];

  const appFeatures = [
    {
      icon: Camera,
      title: "Check deposit",
      description: "Deposit checks instantly by taking a photo with your smartphone camera"
    },
    {
      icon: Shield,
      title: "Advanced security",
      description: "Fingerprint and face ID login with real-time fraud monitoring"
    },
    {
      icon: Smartphone,
      title: "Mobile payments",
      description: "Pay with Apple Pay, Google Pay, or Samsung Pay anywhere"
    },
    {
      icon: Users,
      title: "Money transfers",
      description: "Send money to friends and family instantly with Zelle"
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
                  #1 Rated Banking App
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Banking in the Palm of Your Hand
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Experience next-generation mobile banking with our award-winning app. 
                  Manage your finances securely and conveniently wherever you go.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Download for iPhone
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Download for Android
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">App Features</h3>
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
                Everything you need in one app
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our mobile app puts the power of full-service banking in your pocket 
                with intuitive design and industry-leading security features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {appFeatures.map((feature, index) => (
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

        {/* Additional Features */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              More features to love
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Spending Insights</h3>
                <p className="text-gray-600">Track spending by category and get personalized insights to improve your budget.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bill Pay & Alerts</h3>
                <p className="text-gray-600">Schedule payments and get notifications for due dates and low balances.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Support</h3>
                <p className="text-gray-600">Chat with customer service or schedule appointments directly through the app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Download our app today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join millions of customers who trust our mobile app for secure, 
              convenient banking on the go. Available for iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                App Store
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Google Play
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Requires iOS 14.0+ or Android 8.0+. Message and data rates may apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileApp;
