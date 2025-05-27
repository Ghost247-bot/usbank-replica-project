
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, CreditCard, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CreditCards = () => {
  const benefits = [
    "No annual fee on select cards",
    "Competitive interest rates",
    "Fraud protection and monitoring",
    "Mobile wallet compatibility",
    "Contactless payment technology",
    "24/7 customer service"
  ];

  const cardFeatures = [
    {
      icon: Star,
      title: "Rewards program",
      description: "Earn cash back, points, or miles on every purchase you make"
    },
    {
      icon: Shield,
      title: "Security features",
      description: "Advanced fraud protection and real-time transaction alerts"
    },
    {
      icon: Smartphone,
      title: "Mobile payments",
      description: "Pay with your phone using Apple Pay, Google Pay, and Samsung Pay"
    },
    {
      icon: Users,
      title: "Credit building",
      description: "Build your credit history with responsible card usage"
    }
  ];

  const additionalBenefits = [
    {
      icon: CreditCard,
      title: "Balance transfers",
      description: "Transfer high-interest balances to save money on interest"
    },
    {
      icon: Clock,
      title: "Grace period",
      description: "Up to 25 days grace period on purchases when you pay in full"
    },
    {
      icon: DollarSign,
      title: "No foreign fees",
      description: "Use your card abroad without foreign transaction fees on select cards"
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
                  Rewarding Credit Cards
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Credit Cards That Reward You
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Choose from our selection of credit cards designed to fit your lifestyle. 
                  Earn rewards, build credit, and enjoy premium benefits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Apply for Credit Card
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Compare Cards
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Card Benefits</h3>
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
                Credit cards built for your lifestyle
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our credit cards offer competitive rates, valuable rewards, and the security 
                features you need for confident spending.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cardFeatures.map((feature, index) => (
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

        {/* Additional Benefits */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              More reasons to choose our cards
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Card Options */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Find your perfect card
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Compare our most popular credit cards
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Cash Rewards Card</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">1.5% Cash Back</div>
                <p className="text-gray-600 mb-6">Earn cash back on all purchases</p>
                <ul className="space-y-2 mb-6">
                  <li>• 1.5% cash back on all purchases</li>
                  <li>• No annual fee</li>
                  <li>• 0% intro APR for 15 months</li>
                  <li>• No foreign transaction fees</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply Now
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Travel Rewards Card</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">2X Points</div>
                <p className="text-gray-600 mb-6">Earn points on travel and dining</p>
                <ul className="space-y-2 mb-6">
                  <li>• 2X points on travel & dining</li>
                  <li>• 1X points on all other purchases</li>
                  <li>• 60,000 bonus points welcome offer</li>
                  <li>• Travel insurance included</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply Now
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Premium Card</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">3X Points</div>
                <p className="text-gray-600 mb-6">Premium rewards and benefits</p>
                <ul className="space-y-2 mb-6">
                  <li>• 3X points on select categories</li>
                  <li>• Airport lounge access</li>
                  <li>• Concierge service</li>
                  <li>• Premium travel benefits</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to earn rewards?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Apply for a credit card today and start earning rewards on every purchase 
              while building your credit history.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Apply Online
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Compare All Cards
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Credit approval required. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CreditCards;
