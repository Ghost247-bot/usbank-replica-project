
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Award, Users } from 'lucide-react';

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Awards and Recognition */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Trusted by Millions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Best Digital Bank</h3>
              <p className="text-gray-600">Banking Innovation Awards 2024</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">4.8/5 Rating</h3>
              <p className="text-gray-600">Customer satisfaction score</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">15M+ Customers</h3>
              <p className="text-gray-600">Trust us with their finances</p>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Mobile Banking Made Simple
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Bank anywhere, anytime with our award-winning mobile app. Deposit checks, transfer money, 
              pay bills, and manage your finances with just a few taps.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Mobile check deposit
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Real-time notifications
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Biometric security
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                24/7 customer support
              </li>
            </ul>
            <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2">
              <span>Download App</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-8 lg:p-12">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">$</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Available Balance</h4>
                <p className="text-3xl font-bold text-gray-900">$12,847.50</p>
                <div className="mt-4 space-y-2">
                  <div className="bg-gray-100 rounded p-2 text-sm">
                    Recent: Coffee Shop -$4.75
                  </div>
                  <div className="bg-gray-100 rounded p-2 text-sm">
                    Deposit: Paycheck +$2,500.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8 lg:p-12">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Portfolio Performance</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Value</span>
                    <span className="font-bold text-xl">$284,592</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Today's Change</span>
                    <span className="font-bold text-green-600">+$1,247 (+0.44%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600">68% above benchmark</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Grow Your Wealth
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Start investing with as little as $1. Our expert advisors and automated investment 
              tools help you build a diversified portfolio tailored to your goals.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Professional portfolio management
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Low fees and transparent pricing
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Tax-optimized strategies
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                Retirement planning tools
              </li>
            </ul>
            <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2">
              <span>Start Investing</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
