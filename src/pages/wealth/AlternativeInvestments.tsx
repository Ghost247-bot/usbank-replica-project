
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Building, Coins, Globe } from 'lucide-react';

const AlternativeInvestments = () => {
  const options = [
    {
      icon: TrendingUp,
      title: "Private Equity",
      description: "Access to private equity investment opportunities"
    },
    {
      icon: Building,
      title: "Real Estate",
      description: "Commercial and residential real estate investments"
    },
    {
      icon: Coins,
      title: "Commodities",
      description: "Precious metals and commodity investments"
    },
    {
      icon: Globe,
      title: "International Markets",
      description: "Global investment opportunities and diversification"
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
              <h1 className="text-5xl font-bold mb-6">Alternative Investments</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Diversify your portfolio with alternative investment options
              </p>
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Options
              </button>
            </div>
          </div>
        </section>

        {/* Investment Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Investment Options</h2>
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

export default AlternativeInvestments;
