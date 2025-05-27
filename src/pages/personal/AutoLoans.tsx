
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Car, Calculator, Shield, Award } from 'lucide-react';

const AutoLoans = () => {
  const features = [
    {
      icon: Car,
      title: "New & Used Cars",
      description: "Financing available for both new and pre-owned vehicles"
    },
    {
      icon: Calculator,
      title: "Payment Calculator",
      description: "Estimate your monthly payments before you shop"
    },
    {
      icon: Shield,
      title: "GAP Insurance",
      description: "Protect yourself from depreciation with optional coverage"
    },
    {
      icon: Award,
      title: "Dealer Network",
      description: "Special rates through our certified dealer partners"
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
              <h1 className="text-5xl font-bold mb-6">Auto Loans</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Drive your dream car today with competitive rates and flexible financing options
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Pre-Approved
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors">
                  Calculate Payment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Auto Loan Features</h2>
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

        {/* Loan Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Auto Loan Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">New Car Loans</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 4.99% APR*</div>
                <p className="text-gray-600 mb-6">Finance your brand new vehicle with great rates</p>
                <ul className="space-y-2 mb-6">
                  <li>• Terms up to 84 months</li>
                  <li>• Finance up to 100% of MSRP</li>
                  <li>• No down payment required</li>
                  <li>• Extended warranty options</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Apply Now
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Used Car Loans</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 5.49% APR*</div>
                <p className="text-gray-600 mb-6">Great rates on quality pre-owned vehicles</p>
                <ul className="space-y-2 mb-6">
                  <li>• Terms up to 72 months</li>
                  <li>• Vehicles up to 10 years old</li>
                  <li>• Refinancing available</li>
                  <li>• Private party purchases welcome</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Auto Loans?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Competitive Rates</h4>
                      <p className="text-gray-600">Low interest rates that save you money</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Fast Pre-Approval</h4>
                      <p className="text-gray-600">Get pre-approved in minutes online</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Flexible Terms</h4>
                      <p className="text-gray-600">Choose payment terms that fit your budget</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">No Prepayment Penalty</h4>
                      <p className="text-gray-600">Pay off your loan early without fees</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Auto Loan Calculator</h3>
                <p className="text-gray-600 mb-6">Estimate your monthly payment before you shop</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Price</label>
                    <input type="number" placeholder="$25,000" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment</label>
                    <input type="number" placeholder="$5,000" className="w-full p-3 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (months)</label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>36 months</option>
                      <option>48 months</option>
                      <option>60 months</option>
                      <option>72 months</option>
                    </select>
                  </div>
                  <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                    Calculate Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AutoLoans;
