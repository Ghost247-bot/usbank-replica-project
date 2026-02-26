
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AutoLoansTypes = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Choose your vehicle type
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Special rates for different vehicle types
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">New Vehicles</h3>
            <div className="text-3xl font-bold text-green-700 mb-4">Starting at 4.99%</div>
            <p className="text-gray-600 mb-6">Latest models with full warranty</p>
            <ul className="space-y-2 mb-6">
              <li>• Rates as low as 4.99% APR</li>
              <li>• Terms up to 84 months</li>
              <li>• 100% financing available</li>
              <li>• New car incentives</li>
            </ul>
            <Link to="/get-started">
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                Get Pre-Approved
              </Button>
            </Link>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
            <div className="text-center mb-4">
              <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Popular Choice</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Used Vehicles</h3>
            <div className="text-3xl font-bold text-green-700 mb-4">Starting at 5.49%</div>
            <p className="text-gray-600 mb-6">Quality pre-owned vehicles</p>
            <ul className="space-y-2 mb-6">
              <li>• Rates as low as 5.49% APR</li>
              <li>• Terms up to 72 months</li>
              <li>• Vehicles up to 8 years old</li>
              <li>• Extended warranty options</li>
            </ul>
            <Link to="/get-started">
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                Get Pre-Approved
              </Button>
            </Link>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">Refinancing</h3>
            <div className="text-3xl font-bold text-green-700 mb-4">Starting at 5.25%</div>
            <p className="text-gray-600 mb-6">Lower your current payment</p>
            <ul className="space-y-2 mb-6">
              <li>• Rates as low as 5.25% APR</li>
              <li>• Lower monthly payments</li>
              <li>• Cash out refinancing</li>
              <li>• No prepayment penalties</li>
            </ul>
            <Link to="/get-started">
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                Refinance Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoLoansTypes;
