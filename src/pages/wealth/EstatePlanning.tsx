
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Users, Shield, TrendingUp } from 'lucide-react';

const EstatePlanning = () => {
  const services = [
    {
      icon: FileText,
      title: "Will & Testament",
      description: "Ensure your assets are distributed according to your wishes"
    },
    {
      icon: Users,
      title: "Beneficiary Planning",
      description: "Designate and manage beneficiaries for all accounts"
    },
    {
      icon: Shield,
      title: "Asset Protection",
      description: "Protect your wealth from creditors and legal claims"
    },
    {
      icon: TrendingUp,
      title: "Tax Optimization",
      description: "Minimize estate taxes and maximize inheritance"
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
              <h1 className="text-5xl font-bold mb-6">Estate Planning</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Plan for the future and protect your legacy
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Planning
              </button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Estate Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <service.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
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

export default EstatePlanning;
