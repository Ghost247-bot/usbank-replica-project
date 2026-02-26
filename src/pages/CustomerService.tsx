
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const CustomerService = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us 24/7 for immediate assistance",
      contact: "1-800-USBANK-1",
      hours: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your questions via email",
      contact: "support@usbank.com",
      hours: "Response within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available on website",
      hours: "Mon-Fri 8AM-8PM"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Customer Service</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're here to help you with all your banking needs
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Methods</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <method.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="font-semibold text-green-700">{method.contact}</p>
                  <p className="text-sm text-gray-500">{method.hours}</p>
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

export default CustomerService;
