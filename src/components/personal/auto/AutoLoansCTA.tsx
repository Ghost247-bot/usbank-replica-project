
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AutoLoansCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to drive your new car?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Get pre-approved for an auto loan today and shop with confidence. 
          Our competitive rates and flexible terms make car buying easy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/get-started">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
              Get Pre-Approved
            </Button>
          </Link>
          <Link to="/calculate-payment">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              Calculate Payment
            </Button>
          </Link>
        </div>
        <p className="text-sm text-blue-200 mt-6">
          Subject to credit approval. Terms and conditions apply.
        </p>
      </div>
    </section>
  );
};

export default AutoLoansCTA;
