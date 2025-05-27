
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart, DollarSign, Clock, Shield } from 'lucide-react';

const TreasuryManagement = () => {
  const features = [
    {
      icon: BarChart,
      title: "Cash Flow Analysis",
      description: "Monitor and optimize your cash flow in real-time"
    },
    {
      icon: DollarSign,
      title: "Investment Options",
      description: "Maximize returns on excess cash"
    },
    {
      icon: Clock,
      title: "Automated Transfers",
      description: "Schedule and automate fund movements"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Protect against fraud and financial risks"
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
              <h1 className="text-5xl font-bold mb-6">Treasury Management</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Optimize your cash flow and financial operations with our advanced treasury solutions
              </p>
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Treasury Solutions</h2>
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
      </main>

      <Footer />
    </div>
  );
};

export default TreasuryManagement;
