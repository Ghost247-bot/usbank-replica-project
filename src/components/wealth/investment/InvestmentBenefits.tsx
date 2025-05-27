
import React from 'react';
import { CheckCircle, DollarSign, Target, Award } from 'lucide-react';

const InvestmentBenefits = () => {
  const benefits = [
    "Personalized investment strategies",
    "Diversified portfolio management",
    "Regular performance reviews",
    "Tax-efficient investing",
    "Estate planning integration",
    "24/7 online account access"
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Investment Management Benefits</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Our investment management services provide you with the expertise and tools needed to build long-term wealth while managing risk effectively.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <DollarSign className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold">Competitive Fees</h3>
                  <p className="text-blue-200">Transparent, asset-based pricing</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <Target className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">Goal-Based Investing</h3>
                  <p className="text-blue-200">Strategies aligned with your objectives</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-semibold">Award-Winning Service</h3>
                  <p className="text-blue-200">Recognized for investment excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBenefits;
