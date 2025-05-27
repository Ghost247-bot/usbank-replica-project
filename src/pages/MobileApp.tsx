
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Smartphone, Download, Shield, Bell } from 'lucide-react';

const MobileApp = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Full banking functionality on your mobile device"
    },
    {
      icon: Download,
      title: "Easy Download",
      description: "Available on iOS and Android app stores"
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Biometric login and advanced security features"
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Real-time alerts for account activity"
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
              <h1 className="text-5xl font-bold mb-6">Mobile Banking App</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Download our banking app for convenient mobile banking
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download Now
              </button>
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">App Features</h2>
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

export default MobileApp;
