
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, DollarSign, Users, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const OverdraftProtection = () => {
  const benefits = [
    "Avoid costly overdraft fees",
    "Multiple protection options",
    "Automatic coverage activation",
    "Real-time balance alerts",
    "Easy online management",
    "Peace of mind protection"
  ];

  const protectionFeatures = [
    {
      icon: Shield,
      title: "Overdraft transfer",
      description: "Automatically transfer funds from your savings to cover overdrafts"
    },
    {
      icon: DollarSign,
      title: "Line of credit",
      description: "Use a pre-approved line of credit to cover overdraft situations"
    },
    {
      icon: Smartphone,
      title: "Account alerts",
      description: "Get instant notifications when your balance is running low"
    },
    {
      icon: Users,
      title: "Custom settings",
      description: "Choose your protection preferences and coverage limits"
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
                  Financial Protection
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Overdraft Protection Services
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Protect yourself from costly overdraft fees with our flexible overdraft 
                  protection options. Choose the coverage that works best for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Protection Benefits</h3>
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
                Stay protected from overdrafts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our overdraft protection services help you avoid fees and maintain 
                financial confidence with multiple coverage options.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {protectionFeatures.map((feature, index) => (
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

        {/* Protection Options */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Choose your protection level
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Select the overdraft protection option that fits your needs
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Savings Transfer</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">$10 per transfer</div>
                <p className="text-gray-600 mb-6">Automatic transfer from savings account</p>
                <ul className="space-y-2 mb-6">
                  <li>• Transfer from linked savings account</li>
                  <li>• $10 fee per transfer</li>
                  <li>• Covers the exact overdraft amount</li>
                  <li>• No daily limit on transfers</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Enroll in Savings Transfer
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Line of Credit</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Interest only</div>
                <p className="text-gray-600 mb-6">Pre-approved credit line for overdrafts</p>
                <ul className="space-y-2 mb-6">
                  <li>• Credit line up to $1,000</li>
                  <li>• Pay interest only on amount used</li>
                  <li>• No transfer fees</li>
                  <li>• Automatic repayment options</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for Line of Credit
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Balance Alerts</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Free</div>
                <p className="text-gray-600 mb-6">Stay informed with balance notifications</p>
                <ul className="space-y-2 mb-6">
                  <li>• Text and email alerts</li>
                  <li>• Custom balance thresholds</li>
                  <li>• Daily balance summaries</li>
                  <li>• Transaction notifications</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Set Up Alerts
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Get protected today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't let overdraft fees catch you off guard. Enroll in overdraft protection 
              and choose the coverage option that gives you peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Enroll Online
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Compare Options
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Overdraft protection subject to approval. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OverdraftProtection;
