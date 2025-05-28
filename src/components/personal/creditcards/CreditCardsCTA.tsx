
import React from 'react';
import { Button } from '@/components/ui/button';

const CreditCardsCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to earn rewards?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Apply for a credit card today and start earning rewards on every purchase 
          while building your credit history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
            Apply Online
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
            Compare All Cards
          </Button>
        </div>
        <p className="text-sm text-blue-200 mt-6">
          Credit approval required. Terms and conditions apply.
        </p>
      </div>
    </section>
  );
};

export default CreditCardsCTA;
