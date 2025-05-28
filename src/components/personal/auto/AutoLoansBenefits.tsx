
import React from 'react';
import { DollarSign, Clock, Star } from 'lucide-react';

const AutoLoansBenefits = () => {
  const additionalBenefits = [
    {
      icon: DollarSign,
      title: "No down payment",
      description: "Finance up to 100% of the vehicle's value with approved credit"
    },
    {
      icon: Clock,
      title: "Fast approval",
      description: "Get approved in minutes and drive away today"
    },
    {
      icon: Star,
      title: "Rate discounts",
      description: "Get additional rate discounts for automatic payments"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          More advantages for car buyers
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {additionalBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoLoansBenefits;
