
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CreditCard, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Banking that puts you first
            </h1>
            <p className="text-xl mb-8 text-red-100">
              Experience personalized banking solutions designed to help you achieve your financial goals. 
              From checking accounts to mortgages, we're here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-red-200" />
                <h3 className="text-lg font-semibold mb-2">Secure Banking</h3>
                <p className="text-red-100 text-sm">Advanced security measures to protect your assets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center mt-8">
                <CreditCard className="h-12 w-12 mx-auto mb-4 text-red-200" />
                <h3 className="text-lg font-semibold mb-2">Easy Payments</h3>
                <p className="text-red-100 text-sm">Convenient payment solutions for everyday needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center -mt-8">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-red-200" />
                <h3 className="text-lg font-semibold mb-2">Smart Investing</h3>
                <p className="text-red-100 text-sm">Grow your wealth with expert investment guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
