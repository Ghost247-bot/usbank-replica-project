
import React from 'react';

const InvestmentCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Investment Journey?</h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Schedule a consultation with one of our investment professionals to discuss your financial goals and develop a personalized investment strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
            Schedule Consultation
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
            Download Investment Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCTA;
