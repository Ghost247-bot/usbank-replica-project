
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditCard, TrendingUp, Shield, Users } from 'lucide-react';

const BusinessCreditCards = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Expense Management",
      description: "Track and categorize business expenses effortlessly"
    },
    {
      icon: TrendingUp,
      title: "Rewards Program",
      description: "Earn rewards on business purchases and travel"
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "Advanced security features for business accounts"
    },
    {
      icon: Users,
      title: "Employee Cards",
      description: "Issue cards to employees with spending controls"
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
              <h1 className="text-5xl font-bold mb-6">Business Credit Cards</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Flexible payment solutions designed to help your business grow and succeed
              </p>
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply for Business Card
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Business Card Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <benefit.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Card Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Business Card Options</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Business Cash Card</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">2% Cash Back</div>
                <p className="text-gray-600 mb-6">Earn cash back on all business purchases</p>
                <ul className="space-y-2 mb-6">
                  <li>• 2% cash back on all purchases</li>
                  <li>• No annual fee</li>
                  <li>• 0% intro APR for 12 months</li>
                  <li>• Expense tracking tools</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Apply Now
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Recommended</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Business Rewards Card</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">3X Points</div>
                <p className="text-gray-600 mb-6">Maximize rewards on business categories</p>
                <ul className="space-y-2 mb-6">
                  <li>• 3X points on office supplies & telecom</li>
                  <li>• 2X points on gas & restaurants</li>
                  <li>• 1X points on everything else</li>
                  <li>• 60,000 bonus points after $5,000 spend</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Apply Now
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Business Travel Card</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">5X Miles</div>
                <p className="text-gray-600 mb-6">Premium benefits for business travelers</p>
                <ul className="space-y-2 mb-6">
                  <li>• 5X miles on travel & hotels</li>
                  <li>• Airport lounge access</li>
                  <li>• Travel insurance coverage</li>
                  <li>• No foreign transaction fees</li>
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

export default BusinessCreditCards;
