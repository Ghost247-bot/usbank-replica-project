
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, Send, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WireTransfers = () => {
  const benefits = [
    "Same-day domestic transfers",
    "International wire services",
    "Secure encrypted transfers",
    "Competitive exchange rates",
    "Expert support staff",
    "Online and in-branch options"
  ];

  const wireFeatures = [
    {
      icon: Send,
      title: "Fast transfers",
      description: "Send money domestically and internationally with speed and reliability"
    },
    {
      icon: Shield,
      title: "Secure processing",
      description: "Bank-level security and encryption protect your wire transfers"
    },
    {
      icon: Smartphone,
      title: "Multiple channels",
      description: "Initiate wire transfers online, by phone, or at any branch location"
    },
    {
      icon: Users,
      title: "Expert assistance",
      description: "Our wire transfer specialists help ensure accurate delivery"
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
                  Fast & Secure
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Wire Transfer Services
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Send money quickly and securely anywhere in the world with our reliable 
                  wire transfer services. Fast, secure, and expertly processed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Send Wire Transfer
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    View Rates
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Wire Transfer Benefits</h3>
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
                Reliable money transfers worldwide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're sending money across town or around the world, our wire 
                transfer services provide the speed and security you need.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {wireFeatures.map((feature, index) => (
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

        {/* Transfer Options */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Wire transfer options
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Choose the right transfer option for your needs
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Domestic Wire Transfers</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Same Day</div>
                <p className="text-gray-600 mb-6">Fast transfers within the United States</p>
                <ul className="space-y-2 mb-6">
                  <li>• Same-day processing</li>
                  <li>• Cutoff time: 3:00 PM EST</li>
                  <li>• $25 sending fee</li>
                  <li>• No receiving fee</li>
                  <li>• Online and branch options</li>
                  <li>• Secure delivery confirmation</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Send Domestic Wire
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Global Reach</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">International Wire Transfers</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">1-2 Days</div>
                <p className="text-gray-600 mb-6">Send money anywhere in the world</p>
                <ul className="space-y-2 mb-6">
                  <li>• 1-2 business day delivery</li>
                  <li>• Competitive exchange rates</li>
                  <li>• $45 sending fee</li>
                  <li>• Track transfer status</li>
                  <li>• Expert assistance available</li>
                  <li>• Compliant with all regulations</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Send International Wire
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Additional transfer services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recurring Wires</h3>
                <p className="text-gray-600">Set up automatic recurring wire transfers for regular payments and transfers.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Future-Dated Wires</h3>
                <p className="text-gray-600">Schedule wire transfers for future dates to meet specific payment deadlines.</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Solutions</h3>
                <p className="text-gray-600">Special wire transfer solutions for businesses with volume discounts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Send money with confidence</h2>
            <p className="text-xl text-blue-100 mb-8">
              Trust our secure wire transfer services for your domestic and international 
              money transfer needs. Fast, reliable, and expertly processed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Send Wire Transfer
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Contact Wire Specialist
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Wire transfer fees and exchange rates apply. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WireTransfers;
