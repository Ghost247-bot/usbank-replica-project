
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CreditCard, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight transform transition-all duration-700 hover:scale-105">
              Banking that puts you first
            </h1>
            <p className="text-lg mb-6 text-red-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Experience personalized banking solutions designed to help you achieve your financial goals. 
              From checking accounts to mortgages, we're here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 flex items-center space-x-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 transform transition-all duration-300 hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                <Shield className="h-10 w-10 mx-auto mb-3 text-red-200 animate-pulse" />
                <h3 className="text-base font-semibold mb-2">Secure Banking</h3>
                <p className="text-red-100 text-sm">Advanced security measures to protect your assets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center mt-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                <CreditCard className="h-10 w-10 mx-auto mb-3 text-red-200 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <h3 className="text-base font-semibold mb-2">Easy Payments</h3>
                <p className="text-red-100 text-sm">Convenient payment solutions for everyday needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center -mt-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                <TrendingUp className="h-10 w-10 mx-auto mb-3 text-red-200 animate-pulse" style={{ animationDelay: '1s' }} />
                <h3 className="text-base font-semibold mb-2">Smart Investing</h3>
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
