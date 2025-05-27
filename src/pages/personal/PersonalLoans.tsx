
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DollarSign, Clock, Shield, CheckCircle } from 'lucide-react';

const PersonalLoans = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Starting as low as 5.99% APR for qualified borrowers"
    },
    {
      icon: Clock,
      title: "Fast Approval",
      description: "Get approved in minutes with same-day funding available"
    },
    {
      icon: Shield,
      title: "No Collateral",
      description: "Unsecured loans with no collateral required"
    },
    {
      icon: CheckCircle,
      title: "Fixed Payments",
      description: "Predictable monthly payments for better budgeting"
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
              <h1 className="text-5xl font-bold mb-6">Personal Loans</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get the funding you need for life's important moments with competitive rates and flexible terms
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Today
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Personal Loans?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <benefit.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Details */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Loan Details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold">Loan Amount:</span>
                    <span>$2,000 - $50,000</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold">APR Range:</span>
                    <span>5.99% - 24.99%*</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold">Loan Terms:</span>
                    <span>2 - 7 years</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold">Origination Fee:</span>
                    <span>None</span>
                  </div>
                  <div className="flex justify-between py-3 border-b">
                    <span className="font-semibold">Prepayment Penalty:</span>
                    <span>None</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Popular Uses</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-3" />
                    Debt consolidation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-3" />
                    Home improvements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-3" />
                    Medical expenses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-3" />
                    Wedding expenses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-3" />
                    Vacation funding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-3" />
                    Emergency expenses
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Quick & Easy Application</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
                <p className="text-gray-600">Complete our simple online application in just 5 minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
                <p className="text-gray-600">Receive an instant decision on your loan application</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Get Funded</h3>
                <p className="text-gray-600">Funds deposited directly into your account as soon as today</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Apply for your personal loan today and get the funds you need</p>
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PersonalLoans;
