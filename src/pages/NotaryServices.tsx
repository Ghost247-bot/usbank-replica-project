
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, CheckCircle, Clock, Users } from 'lucide-react';

const NotaryServices = () => {
  const services = [
    {
      icon: FileText,
      title: "Document Notarization",
      description: "Notarize legal documents and contracts"
    },
    {
      icon: CheckCircle,
      title: "Identity Verification",
      description: "Verify identity for important transactions"
    },
    {
      icon: Clock,
      title: "Convenient Hours",
      description: "Available during regular banking hours"
    },
    {
      icon: Users,
      title: "Professional Service",
      description: "Certified notary public services"
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
              <h1 className="text-5xl font-bold mb-6">Notary Services</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Professional document authentication and notarization
              </p>
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Service
              </button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Notary Services</h2>
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

export default NotaryServices;
