
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Download, Shield, CreditCard, Bell, Camera, Clock } from 'lucide-react';

const DownloadApp = () => {
  const appFeatures = [
    {
      icon: CreditCard,
      title: "Mobile Payments",
      description: "Send money, pay bills, and make purchases instantly from your phone"
    },
    {
      icon: Bell,
      title: "Real-time Alerts",
      description: "Get instant notifications for all account activities and transactions"
    },
    {
      icon: Camera,
      title: "Mobile Check Deposit",
      description: "Deposit checks by simply taking a photo with your smartphone"
    },
    {
      icon: Shield,
      title: "Biometric Security",
      description: "Secure login with fingerprint and face recognition technology"
    },
    {
      icon: Clock,
      title: "24/7 Account Access",
      description: "Check balances, view transactions, and manage accounts anytime"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Banking Made Mobile</h1>
              <p className="text-xl mb-8 text-green-100">
                Download our award-winning mobile app and take your banking with you wherever you go. 
                Secure, fast, and feature-rich banking at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-semibold">
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-64 h-96 bg-gray-900 rounded-3xl mx-auto shadow-2xl">
                  <div className="p-6 h-full flex flex-col">
                    <div className="w-16 h-1 bg-gray-600 rounded-full mx-auto mb-6"></div>
                    <div className="flex-1 bg-green-600 rounded-2xl p-4 text-white">
                      <div className="text-center mb-6">
                        <Smartphone className="h-12 w-12 mx-auto mb-2" />
                        <h3 className="font-bold">Mobile Banking</h3>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="bg-white/20 rounded-lg p-2">Account Balance: $2,485.32</div>
                        <div className="bg-white/20 rounded-lg p-2">Recent Transaction: -$24.50</div>
                        <div className="bg-white/20 rounded-lg p-2">Available Credit: $5,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features in Your Pocket</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your finances on the go</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bank-Level Security</h2>
            <p className="text-xl text-gray-600 mb-8">Your security is our top priority</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">256-bit Encryption</h3>
              <p className="text-gray-600">All data is protected with the same encryption used by major banks</p>
            </div>
            <div>
              <Camera className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Biometric Login</h3>
              <p className="text-gray-600">Secure access with fingerprint and facial recognition</p>
            </div>
            <div>
              <Bell className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fraud Monitoring</h3>
              <p className="text-gray-600">24/7 monitoring and instant alerts for suspicious activity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Go Mobile?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Join over 2 million customers who trust our mobile banking app for their daily financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download for iPhone
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-10 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Available on iOS 14+ and Android 8.0+
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DownloadApp;
