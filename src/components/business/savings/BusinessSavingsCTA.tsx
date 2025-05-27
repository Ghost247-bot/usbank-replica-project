
import React from 'react';

const BusinessSavingsCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Saving?</h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Open a business savings account today and start earning competitive interest on your business funds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
            Open Account Now
          </button>
          <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-lg">
            Compare Account Options
          </button>
        </div>
      </div>
    </section>
  );
};

export default BusinessSavingsCTA;
