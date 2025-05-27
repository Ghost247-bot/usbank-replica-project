
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditCard, Gift, Shield, Percent } from 'lucide-react';

const CreditCards = () => {
  const features = [
    {
      icon: Percent,
      title: "0% Intro APR",
      description: "Enjoy 0% APR for the first 15 months on purchases"
    },
    {
      icon: Gift,
      title: "Rewards Program",
      description: "Earn points on every purchase and redeem for cash back"
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "Zero liability protection and real-time alerts"
    },
    {
      icon: CreditCard,
      title: "No Annual Fee",
      description: "Keep more money in your pocket with no annual fees"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Credit Cards</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Find the right card for your lifestyle with competitive rates and great rewards
              </p>
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Credit Card Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Card Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Perfect Card</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Cashback Card</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">1.5% Cash Back</div>
                <p className="text-gray-600 mb-6">Earn cash back on every purchase with no limits</p>
                <ul className="space-y-2 mb-6">
                  <li>• 1.5% cash back on all purchases</li>
                  <li>• No annual fee</li>
                  <li>• 0% intro APR for 15 months</li>
                  <li>• No foreign transaction fees</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Apply Now
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Rewards Plus Card</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">3X Points</div>
                <p className="text-gray-600 mb-6">Maximize rewards on your favorite categories</p>
                <ul className="space-y-2 mb-6">
                  <li>• 3X points on dining & travel</li>
                  <li>• 2X points on gas & groceries</li>
                  <li>• 1X points on everything else</li>
                  <li>• 50,000 bonus points after spending $3,000</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Apply Now
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Premium Travel Card</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">5X Miles</div>
                <p className="text-gray-600 mb-6">Premium perks for frequent travelers</p>
                <ul className="space-y-2 mb-6">
                  <li>• 5X miles on travel purchases</li>
                  <li>• Airport lounge access</li>
                  <li>• Global entry credit</li>
                  <li>• Travel insurance included</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CreditCards;
