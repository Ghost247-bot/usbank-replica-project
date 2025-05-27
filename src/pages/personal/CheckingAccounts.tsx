
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditCard, Shield, Smartphone, DollarSign } from 'lucide-react';

const CheckingAccounts = () => {
  const features = [
    {
      icon: CreditCard,
      title: "No Monthly Fees",
      description: "Enjoy banking without worrying about monthly maintenance fees"
    },
    {
      icon: Shield,
      title: "Fraud Protection",
      description: "24/7 monitoring and protection against unauthorized transactions"
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Bank anytime, anywhere with our award-winning mobile app"
    },
    {
      icon: DollarSign,
      title: "ATM Access",
      description: "Free access to over 40,000 ATMs nationwide"
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
              <h1 className="text-5xl font-bold mb-6">Checking Accounts</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Everyday banking made simple with features designed for your lifestyle
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Open Account Today
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Checking Account?</h2>
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

        {/* Account Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Account Type</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Basic Checking</h3>
                <p className="text-gray-600 mb-6">Perfect for everyday banking needs</p>
                <ul className="space-y-2 mb-6">
                  <li>• No minimum balance</li>
                  <li>• Online and mobile banking</li>
                  <li>• Debit card included</li>
                  <li>• Direct deposit</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Premium Checking</h3>
                <p className="text-gray-600 mb-6">Enhanced features for active banking</p>
                <ul className="space-y-2 mb-6">
                  <li>• All Basic features</li>
                  <li>• Free ATM withdrawals worldwide</li>
                  <li>• Interest earning</li>
                  <li>• Priority customer service</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Student Checking</h3>
                <p className="text-gray-600 mb-6">Designed for students under 25</p>
                <ul className="space-y-2 mb-6">
                  <li>• No monthly fees</li>
                  <li>• No minimum balance</li>
                  <li>• Financial education resources</li>
                  <li>• Special student offers</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CheckingAccounts;
