
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lock, Shield, Key, Clock } from 'lucide-react';

const SafeDepositBoxes = () => {
  const features = [
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Bank-grade security for your valuable items"
    },
    {
      icon: Shield,
      title: "Insurance Protection",
      description: "Additional insurance options available"
    },
    {
      icon: Key,
      title: "Private Access",
      description: "Only you have access to your safe deposit box"
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Access during extended banking hours"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Safe Deposit Boxes</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Secure storage solutions for your most valuable items
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Rent a Box
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Security Features</h2>
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

export default SafeDepositBoxes;
