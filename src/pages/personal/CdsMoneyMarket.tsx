
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PiggyBank, TrendingUp, Shield, Clock } from 'lucide-react';

const CdsMoneyMarket = () => {
  const options = [
    {
      icon: PiggyBank,
      title: "Certificates of Deposit",
      description: "Guaranteed returns with fixed terms and rates"
    },
    {
      icon: TrendingUp,
      title: "Money Market Accounts",
      description: "Higher yields with easy access to your funds"
    },
    {
      icon: Shield,
      title: "FDIC Insured",
      description: "Your deposits are protected up to $250,000"
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Choose terms that match your financial goals"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">CDs & Money Market</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Secure savings options with competitive rates and guaranteed returns
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Open Account
              </button>
            </div>
          </div>
        </section>

        {/* Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Savings Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {options.map((option, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <option.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CdsMoneyMarket;
