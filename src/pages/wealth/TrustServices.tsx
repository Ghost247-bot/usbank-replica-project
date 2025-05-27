
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Users, FileText, Award } from 'lucide-react';

const TrustServices = () => {
  const services = [
    {
      icon: Shield,
      title: "Trust Administration",
      description: "Professional management of trust assets and distributions"
    },
    {
      icon: Users,
      title: "Estate Planning",
      description: "Comprehensive planning to protect and transfer wealth"
    },
    {
      icon: FileText,
      title: "Will & Testament",
      description: "Legal documentation to ensure your wishes are carried out"
    },
    {
      icon: Award,
      title: "Fiduciary Services",
      description: "Acting in your best interest as a trusted fiduciary"
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
              <h1 className="text-5xl font-bold mb-6">Trust Services</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Protect and transfer your wealth with our comprehensive trust services
              </p>
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Trust & Estate Services</h2>
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

export default TrustServices;
