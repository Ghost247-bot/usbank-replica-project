
import React from 'react';
import { CreditCard, Clock, DollarSign } from 'lucide-react';

const CreditCardsBenefits = () => {
  const additionalBenefits = [
    {
      icon: CreditCard,
      title: "Balance transfers",
      description: "Transfer high-interest balances to save money on interest"
    },
    {
      icon: Clock,
      title: "Grace period",
      description: "Up to 25 days grace period on purchases when you pay in full"
    },
    {
      icon: DollarSign,
      title: "No foreign fees",
      description: "Use your card abroad without foreign transaction fees on select cards"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          More reasons to choose our cards
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

export default CreditCardsBenefits;
