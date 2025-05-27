
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InvestmentHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Professional Investment Management
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Let our experienced investment professionals help you build and manage a diversified portfolio designed to meet your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact-us">
                <Button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/wealth/investment-management">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                  View Portfolio Options
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Our Investment Management?</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Personalized investment strategies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Professional portfolio management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Comprehensive risk management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <span>Regular performance monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentHero;
