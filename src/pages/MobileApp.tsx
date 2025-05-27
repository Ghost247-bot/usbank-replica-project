
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Smartphone, Download, Shield, Bell, CreditCard, MapPin, Camera, Fingerprint, QrCode, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MobileApp = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('ios');

  const features = [
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Full banking functionality on your mobile device"
    },
    {
      icon: Download,
      title: "Easy Download",
      description: "Available on iOS and Android app stores"
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Biometric login and advanced security features"
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Real-time alerts for account activity"
    }
  ];

  const appFeatures = [
    {
      icon: CreditCard,
      title: "Account Management",
      description: "View balances, transaction history, and account details",
      category: "Banking"
    },
    {
      icon: Camera,
      title: "Mobile Deposit",
      description: "Deposit checks by taking a photo",
      category: "Banking"
    },
    {
      icon: MapPin,
      title: "Branch & ATM Locator",
      description: "Find the nearest locations and check hours",
      category: "Tools"
    },
    {
      icon: Bell,
      title: "Account Alerts",
      description: "Customizable notifications for transactions and balances",
      category: "Security"
    },
    {
      icon: Fingerprint,
      title: "Biometric Login",
      description: "Secure access with fingerprint or face recognition",
      category: "Security"
    },
    {
      icon: QrCode,
      title: "Quick Pay",
      description: "Send money using QR codes or contact list",
      category: "Payments"
    },
    {
      icon: Settings,
      title: "Account Settings",
      description: "Manage preferences, limits, and security settings",
      category: "Tools"
    },
    {
      icon: CreditCard,
      title: "Card Controls",
      description: "Lock/unlock cards, set spending limits, and view PINs",
      category: "Security"
    }
  ];

  const securityFeatures = [
    "256-bit encryption",
    "Biometric authentication",
    "Multi-factor authentication",
    "Device registration",
    "Automatic logout",
    "Transaction monitoring"
  ];

  const requirements = {
    ios: {
      version: "iOS 13.0 or later",
      compatibility: "iPhone 6s and newer",
      size: "45.2 MB"
    },
    android: {
      version: "Android 7.0 (API level 24)",
      compatibility: "Most Android devices",
      size: "38.7 MB"
    }
  };

  const screenshots = [
    { title: "Dashboard", description: "Overview of all your accounts" },
    { title: "Mobile Deposit", description: "Deposit checks in seconds" },
    { title: "Transfer Money", description: "Quick and easy transfers" },
    { title: "Account Alerts", description: "Stay informed with notifications" }
  ];

  const faqs = [
    {
      question: "Is mobile banking safe?",
      answer: "Yes, our mobile app uses bank-level security including 256-bit encryption, biometric authentication, and multi-factor security to protect your information."
    },
    {
      question: "Can I deposit checks using the app?",
      answer: "Yes, you can deposit checks up to $5,000 per day using our mobile deposit feature. Simply take a photo of the front and back of your check."
    },
    {
      question: "What if I lose my phone?",
      answer: "Contact us immediately to temporarily disable mobile access. You can also remotely log out of all devices through our website."
    },
    {
      question: "Are there fees for using the mobile app?",
      answer: "The mobile app is free to download and use. Standard data charges from your carrier may apply."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">Mobile Banking App</h1>
                <p className="text-xl mb-8">
                  Download our award-winning banking app for convenient, secure mobile banking anywhere, anytime
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-green-700 hover:bg-gray-100"
                    onClick={() => setSelectedPlatform('ios')}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download for iOS
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-green-700"
                    onClick={() => setSelectedPlatform('android')}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download for Android
                  </Button>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <Badge variant="secondary">★ 4.8 Rating</Badge>
                  <Badge variant="secondary">500K+ Downloads</Badge>
                  <Badge variant="secondary">Award Winner</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-96 bg-gray-900 rounded-3xl p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-24 w-24 text-green-600 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium">Banking App</p>
                      <p className="text-sm text-gray-500">Demo Interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Powerful Features at Your Fingertips</h2>
              <p className="text-gray-600">Everything you need for complete mobile banking</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <feature.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto">
                      {feature.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Details */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={selectedPlatform} onValueChange={setSelectedPlatform} className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="ios">iOS App</TabsTrigger>
                <TabsTrigger value="android">Android App</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ios" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smartphone className="h-6 w-6 mr-2" />
                      iOS Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm">Minimum Version</h4>
                        <p className="text-gray-600">{requirements.ios.version}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Compatibility</h4>
                        <p className="text-gray-600">{requirements.ios.compatibility}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Download Size</h4>
                        <p className="text-gray-600">{requirements.ios.size}</p>
                      </div>
                    </div>
                    <Button className="w-full">Download from App Store</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="android" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smartphone className="h-6 w-6 mr-2" />
                      Android Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm">Minimum Version</h4>
                        <p className="text-gray-600">{requirements.android.version}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Compatibility</h4>
                        <p className="text-gray-600">{requirements.android.compatibility}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Download Size</h4>
                        <p className="text-gray-600">{requirements.android.size}</p>
                      </div>
                    </div>
                    <Button className="w-full">Download from Google Play</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Bank-Level Security</h2>
              <p className="text-gray-600">Your security is our top priority</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Advanced Security Measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-green-600 border-green-600">✓</Badge>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* App Screenshots */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">See It in Action</h2>
              <p className="text-gray-600">Get a preview of our intuitive interface</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {screenshots.map((screenshot, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <Smartphone className="h-16 w-16 text-green-600" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{screenshot.title}</h3>
                    <p className="text-sm text-gray-600">{screenshot.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-16 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Bank on the Go?</h2>
            <p className="text-gray-600 mb-8">Download our mobile app today and experience convenient banking at your fingertips</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">
                <Download className="h-5 w-5 mr-2" />
                Download Now
              </Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileApp;
