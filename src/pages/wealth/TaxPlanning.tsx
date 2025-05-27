
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, FileText, TrendingDown, Clock } from 'lucide-react';

const TaxPlanning = () => {
  const strategies = [
    {
      icon: Calculator,
      title: "Tax Optimization",
      description: "Minimize your tax liability through strategic planning"
    },
    {
      icon: FileText,
      title: "Deduction Planning",
      description: "Maximize available deductions and credits"
    },
    {
      icon: TrendingDown,
      title: "Tax Loss Harvesting",
      description: "Offset gains with strategic loss realization"
    },
    {
      icon: Clock,
      title: "Year-Round Planning",
      description: "Continuous tax planning throughout the year"
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
              <h1 className="text-5xl font-bold mb-6">Tax Planning</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Optimize your tax strategy with professional guidance
              </p>
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* Strategies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Tax Strategies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {strategies.map((strategy, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <strategy.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
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

export default TaxPlanning;
