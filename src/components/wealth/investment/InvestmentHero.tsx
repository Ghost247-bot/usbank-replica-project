
import React from 'react';
import { TrendingUp, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InvestmentHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Investment Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Build wealth with our comprehensive investment management services designed for every stage of your financial journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Investing Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Professional Management</h3>
              <p className="text-blue-100">Expert portfolio management tailored to your goals</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
              <p className="text-blue-100">Sophisticated strategies to protect your investments</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
              <p className="text-blue-100">Dedicated advisors committed to your success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentHero;
