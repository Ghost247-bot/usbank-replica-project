
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Smartphone, CreditCard, Bell, MapPin } from 'lucide-react';

const MobileBanking = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Full-featured banking app for iOS and Android"
    },
    {
      icon: CreditCard,
      title: "Mobile Deposit",
      description: "Deposit checks by taking a photo"
    },
    {
      icon: Bell,
      title: "Alerts & Notifications",
      description: "Stay informed with real-time account alerts"
    },
    {
      icon: MapPin,
      title: "ATM Locator",
      description: "Find nearby ATMs and branches"
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
              <h1 className="text-5xl font-bold mb-6">Mobile Banking</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Banking on the go with our award-winning mobile app
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download App
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Mobile Banking Features</h2>
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

export default MobileBanking;
