
import React from 'react';
import { PiggyBank, TrendingUp, Shield, Calculator } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BusinessSavingsFeatures = () => {
  const keyFeatures = [
    {
      icon: PiggyBank,
      title: "High-Yield Savings",
      description: "Competitive interest rates to help your business funds grow while maintaining liquidity."
    },
    {
      icon: TrendingUp,
      title: "Tiered Interest Rates",
      description: "Higher balances earn better rates with our tiered interest structure."
    },
    {
      icon: Shield,
      title: "FDIC Insured",
      description: "Your business deposits are protected up to the maximum allowed by law."
    },
    {
      icon: Calculator,
      title: "No Monthly Fees",
      description: "Maintain your account without worrying about monthly maintenance fees."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Savings Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our business savings accounts offer the perfect combination of competitive rates and convenient access to your funds.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSavingsFeatures;
