
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CreditCard, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-700 to-green-900 text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-12 h-12 sm:w-20 sm:h-20 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-10 h-10 sm:w-16 sm:h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight transform transition-all duration-700 hover:scale-105">
              Banking that puts you first
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-green-100 animate-fade-in max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: '0.3s' }}>
              Experience personalized banking solutions designed to help you achieve your financial goals. 
              From checking accounts to mortgages, we're here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: '0.6s' }}>
              <Link to="/get-started">
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 flex items-center space-x-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 transform transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                <Shield className="h-8 w-8 lg:h-10 lg:w-10 mx-auto mb-3 text-green-200 animate-pulse" />
                <h3 className="text-sm lg:text-base font-semibold mb-2">Secure Banking</h3>
                <p className="text-green-100 text-xs lg:text-sm">Advanced security measures to protect your assets</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center mt-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                <CreditCard className="h-8 w-8 lg:h-10 lg:w-10 mx-auto mb-3 text-green-200 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <h3 className="text-sm lg:text-base font-semibold mb-2">Easy Payments</h3>
                <p className="text-green-100 text-xs lg:text-sm">Convenient payment solutions for everyday needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center -mt-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/20">
                <TrendingUp className="h-8 w-8 lg:h-10 lg:w-10 mx-auto mb-3 text-green-200 animate-pulse" style={{ animationDelay: '1s' }} />
                <h3 className="text-sm lg:text-base font-semibold mb-2">Smart Investing</h3>
                <p className="text-green-100 text-xs lg:text-sm">Grow your wealth with expert investment guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
