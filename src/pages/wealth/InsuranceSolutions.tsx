
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Heart, Car, Home } from 'lucide-react';

const InsuranceSolutions = () => {
  const coverages = [
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Protect your family's financial future"
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Comprehensive health coverage options"
    },
    {
      icon: Car,
      title: "Auto Insurance",
      description: "Vehicle protection and liability coverage"
    },
    {
      icon: Home,
      title: "Home Insurance",
      description: "Property and homeowner's insurance"
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
              <h1 className="text-5xl font-bold mb-6">Insurance Solutions</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Comprehensive coverage options to protect what matters most
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Coverage Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coverages.map((coverage, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <coverage.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{coverage.title}</h3>
                  <p className="text-gray-600">{coverage.description}</p>
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

export default InsuranceSolutions;
