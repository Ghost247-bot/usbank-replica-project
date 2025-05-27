
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Calculator, FileText, Users } from 'lucide-react';

const Mortgages = () => {
  const services = [
    {
      icon: Home,
      title: "Purchase Loans",
      description: "Get pre-approved and find your dream home"
    },
    {
      icon: Calculator,
      title: "Refinancing",
      description: "Lower your rate or tap into your home's equity"
    },
    {
      icon: FileText,
      title: "Jumbo Loans",
      description: "Financing for luxury and high-value properties"
    },
    {
      icon: Users,
      title: "First-Time Buyers",
      description: "Special programs for first-time homebuyers"
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
              <h1 className="text-5xl font-bold mb-6">Home Mortgages</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Turn your homeownership dreams into reality with competitive rates and expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Pre-Approved
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
                  Calculate Payment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Mortgage Solutions</h2>
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

        {/* Loan Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Loan Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Conventional Loans</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 6.5% APR*</div>
                <p className="text-gray-600 mb-6">Traditional financing with flexible terms</p>
                <ul className="space-y-2 mb-6">
                  <li>• Down payment as low as 3%</li>
                  <li>• 15 or 30-year terms</li>
                  <li>• Fixed or adjustable rates</li>
                  <li>• No mortgage insurance with 20% down</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">FHA Loans</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 6.25% APR*</div>
                <p className="text-gray-600 mb-6">Government-backed loans for qualified buyers</p>
                <ul className="space-y-2 mb-6">
                  <li>• Down payment as low as 3.5%</li>
                  <li>• Lower credit score requirements</li>
                  <li>• Fixed-rate options</li>
                  <li>• Gift funds allowed for down payment</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Simple Application Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
                <p className="text-gray-600">Complete your application in minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Get Pre-Approved</h3>
                <p className="text-gray-600">Receive your pre-approval letter</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Find Your Home</h3>
                <p className="text-gray-600">Shop with confidence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Close</h3>
                <p className="text-gray-600">Get your keys and move in</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Mortgages;
