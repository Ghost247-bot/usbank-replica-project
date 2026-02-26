
import React from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CreditCardsHero = () => {
  const benefits = [
    "No annual fee on select cards",
    "Competitive interest rates",
    "Fraud protection and monitoring",
    "Mobile wallet compatibility",
    "Contactless payment technology",
    "24/7 customer service"
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4 mr-2" />
              Rewarding Credit Cards
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Credit Cards That Reward You
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Choose from our selection of credit cards designed to fit your lifestyle. 
              Earn rewards, build credit, and enjoy premium benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                Apply for Credit Card
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Compare Cards
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Card Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardsHero;
