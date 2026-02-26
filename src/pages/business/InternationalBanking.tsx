
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Globe, CreditCard, TrendingUp, Shield, DollarSign, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InternationalBanking = () => {
  const benefits = [
    "Global wire transfer network",
    "Multi-currency account options",
    "Foreign exchange services",
    "International trade financing",
    "Expert relationship managers",
    "24/7 international support"
  ];

  const services = [
    {
      icon: Globe,
      title: "Wire transfers",
      description: "Fast and secure international money transfers to over 200 countries"
    },
    {
      icon: CreditCard,
      title: "Foreign exchange",
      description: "Competitive currency exchange rates and hedging solutions"
    },
    {
      icon: TrendingUp,
      title: "Trade finance",
      description: "Letters of credit, trade financing, and documentary collections"
    },
    {
      icon: Shield,
      title: "Risk management",
      description: "Currency hedging and international business risk mitigation"
    }
  ];

  const additionalServices = [
    {
      icon: DollarSign,
      title: "Multi-currency accounts",
      description: "Hold and manage funds in multiple currencies with one account"
    },
    {
      icon: Clock,
      title: "24/7 support",
      description: "Round-the-clock support for international banking needs"
    },
    {
      icon: Users,
      title: "Relationship managers",
      description: "Dedicated specialists for complex international banking requirements"
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
                  Global Banking Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  International Banking
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Global business solutions for international operations. 
                  Expand your business worldwide with our comprehensive international banking services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Learn More
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Contact Specialist
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Services</h3>
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

        {/* Services Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                International banking services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive global banking solutions to support your international 
                business operations and expansion plans.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Wire Transfer Services */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              International wire transfer services
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Outgoing Wire Transfers</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Send Money Globally</div>
                <p className="text-gray-600 mb-6">Fast, secure transfers to over 200 countries and territories</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Processing time:</strong>
                      <span className="text-gray-600 ml-2">Same day or next business day</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Transfer limits:</strong>
                      <span className="text-gray-600 ml-2">No maximum limits for business accounts</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Security:</strong>
                      <span className="text-gray-600 ml-2">Bank-grade encryption and monitoring</span>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Send Wire Transfer
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Incoming Wire Transfers</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Receive Money Securely</div>
                <p className="text-gray-600 mb-6">Receive international payments with tracking and notifications</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Availability:</strong>
                      <span className="text-gray-600 ml-2">Funds available same day when received</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Notifications:</strong>
                      <span className="text-gray-600 ml-2">Instant alerts when funds arrive</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Tracking:</strong>
                      <span className="text-gray-600 ml-2">Real-time transfer status updates</span>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Setup Wire Instructions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Foreign Exchange */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Foreign exchange services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Manage currency risk and optimize foreign exchange costs with our comprehensive FX solutions.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Spot Foreign Exchange</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Competitive exchange rates for immediate currency conversion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Over 20 major currencies available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Real-time rate quotes and execution</span>
                  </li>
                </ul>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Forward Contracts</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Lock in exchange rates for future transactions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Hedge against currency fluctuations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Flexible contract terms up to 12 months</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Currency Exchange Rates</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">EUR/USD</span>
                    <span className="text-green-700 font-bold">1.0892</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">GBP/USD</span>
                    <span className="text-green-700 font-bold">1.2734</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">USD/JPY</span>
                    <span className="text-green-700 font-bold">148.92</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">USD/CAD</span>
                    <span className="text-green-700 font-bold">1.3541</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Rates shown are indicative. Contact us for live rates and trading.
                </p>
                <Button className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white py-3">
                  Get Live Rates
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Additional international services
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to expand globally?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our international banking specialists help you navigate the complexities 
              of global business and find the right solutions for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Contact Specialist
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Services subject to approval and availability. International regulations may apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InternationalBanking;
