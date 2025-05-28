
import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AutoLoansHero = () => {
  const benefits = [
    "Competitive auto loan rates",
    "New and used car financing",
    "Quick pre-approval process",
    "Flexible payment terms",
    "No application fees",
    "Online account management"
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Vehicle Financing
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Drive Your Dreams Home
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Whether you're buying new or used, we have competitive auto loan rates 
              and flexible terms to get you behind the wheel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  Get Pre-Approved
                </Button>
              </Link>
              <Link to="/compare-rates">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  View Rates
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Auto Loan Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoLoansHero;
