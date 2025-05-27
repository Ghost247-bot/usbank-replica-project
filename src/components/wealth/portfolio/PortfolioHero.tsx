
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PortfolioHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Portfolio Options
          </h1>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Explore our range of professionally managed investment portfolios designed to meet different risk tolerances and financial objectives.
          </p>
          <Link to="/contact-us">
            <Button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
