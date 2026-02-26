
import React from 'react';
import { CheckCircle, DollarSign, Clock, Award } from 'lucide-react';

const BusinessSavingsBenefits = () => {
  const benefits = [
    "Competitive interest rates",
    "No monthly maintenance fees",
    "FDIC insurance protection",
    "Online and mobile banking",
    "24/7 account access",
    "Business support services"
  ];

  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Business Savings Benefits</h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Maximize your business earnings with our competitive savings solutions designed for growing businesses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <DollarSign className="h-8 w-8 text-green-400" />
                <div>
                  <h3 className="text-xl font-semibold">Competitive Rates</h3>
                  <p className="text-green-200">Earn more on your business funds</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="h-8 w-8 text-blue-400" />
                <div>
                  <h3 className="text-xl font-semibold">24/7 Access</h3>
                  <p className="text-green-200">Manage your account anytime</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="h-8 w-8 text-yellow-400" />
                <div>
                  <h3 className="text-xl font-semibold">Expert Support</h3>
                  <p className="text-green-200">Dedicated business banking team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSavingsBenefits;
