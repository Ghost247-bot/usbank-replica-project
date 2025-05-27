
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Send, Shield, Clock, Globe } from 'lucide-react';

const WireTransfers = () => {
  const features = [
    {
      icon: Send,
      title: "Fast Transfers",
      description: "Send money quickly and securely worldwide"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level security for all wire transfers"
    },
    {
      icon: Clock,
      title: "Same Day Processing",
      description: "Most transfers processed the same business day"
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Send money to banks worldwide"
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
              <h1 className="text-5xl font-bold mb-6">Wire Transfers</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Send money securely anywhere in the world
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Wire
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Wire Transfer Features</h2>
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

export default WireTransfers;
