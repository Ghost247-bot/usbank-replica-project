
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, DollarSign, Building, Clock } from 'lucide-react';

const BusinessLoans = () => {
  const loanTypes = [
    {
      icon: TrendingUp,
      title: "Term Loans",
      description: "Fixed-rate loans for expansion and equipment"
    },
    {
      icon: DollarSign,
      title: "SBA Loans",
      description: "Government-backed loans with favorable terms"
    },
    {
      icon: Building,
      title: "Commercial Real Estate",
      description: "Financing for property purchases and development"
    },
    {
      icon: Clock,
      title: "Equipment Financing",
      description: "Quick funding for business equipment needs"
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
              <h1 className="text-5xl font-bold mb-6">Business Loans</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Fuel your business growth with flexible financing solutions tailored to your needs
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply for Business Loan
              </button>
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Business Loan Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {loanTypes.map((loan, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <loan.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{loan.title}</h3>
                  <p className="text-gray-600">{loan.description}</p>
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

export default BusinessLoans;
