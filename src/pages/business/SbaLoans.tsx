
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building, CheckCircle, DollarSign, Clock } from 'lucide-react';

const SbaLoans = () => {
  const benefits = [
    {
      icon: Building,
      title: "Government Backed",
      description: "SBA guaranteed loans with favorable terms"
    },
    {
      icon: CheckCircle,
      title: "Lower Down Payments",
      description: "Reduced down payment requirements"
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Below-market interest rates"
    },
    {
      icon: Clock,
      title: "Longer Terms",
      description: "Extended repayment periods"
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
              <h1 className="text-5xl font-bold mb-6">SBA Loans</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Government-backed lending solutions for small businesses
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Today
              </button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">SBA Loan Benefits</h2>
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
      </main>

      <Footer />
    </div>
  );
};

export default SbaLoans;
