
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PortfolioCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Our investment professionals are here to help you choose the right portfolio for your financial goals and risk tolerance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/schedule-consultation">
            <Button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
              Schedule Consultation
            </Button>
          </Link>
          <Link to="/wealth/portfolio-analysis">
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
              Portfolio Analysis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;
