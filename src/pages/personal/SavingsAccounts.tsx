
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Target, PiggyBank, Calculator } from 'lucide-react';

const SavingsAccounts = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Earn more with our high-yield savings accounts"
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set and track your savings goals with our tools"
    },
    {
      icon: PiggyBank,
      title: "Automatic Savings",
      description: "Round up purchases and save the spare change"
    },
    {
      icon: Calculator,
      title: "Savings Calculator",
      description: "Plan your financial future with our calculators"
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
              <h1 className="text-5xl font-bold mb-6">Savings Accounts</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Grow your money with competitive rates and flexible savings options
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Saving Today
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Smart Ways to Save</h2>
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

        {/* Savings Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Find Your Perfect Savings Account</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">High-Yield Savings</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">2.50% APY*</div>
                <p className="text-gray-600 mb-6">Maximize your earnings with our competitive interest rate</p>
                <ul className="space-y-2 mb-6">
                  <li>• No monthly maintenance fees</li>
                  <li>• $100 minimum to open</li>
                  <li>• Online and mobile access</li>
                  <li>• FDIC insured up to $250,000</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Open Account
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-700">Certificate of Deposit</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">3.25% APY*</div>
                <p className="text-gray-600 mb-6">Lock in a guaranteed rate for your long-term savings</p>
                <ul className="space-y-2 mb-6">
                  <li>• Terms from 6 months to 5 years</li>
                  <li>• $1,000 minimum deposit</li>
                  <li>• Guaranteed returns</li>
                  <li>• Automatic renewal options</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  View Rates
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Saving?</h2>
            <p className="text-xl mb-8">Open your savings account today and watch your money grow</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Open Account Online
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
                Visit a Branch
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SavingsAccounts;
