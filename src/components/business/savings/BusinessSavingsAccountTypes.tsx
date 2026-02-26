
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BusinessSavingsAccountTypes = () => {
  const accountTypes = [
    {
      title: "Business Money Market",
      description: "Higher interest rates with check-writing privileges",
      features: ["Competitive interest rates", "Limited check writing", "Online banking access"]
    },
    {
      title: "Business Savings Account",
      description: "Traditional savings with excellent rates for your business",
      features: ["No minimum balance", "Online transfers", "Monthly statements"]
    },
    {
      title: "Certificate of Deposit",
      description: "Fixed-rate savings for predetermined terms",
      features: ["Guaranteed returns", "Various term options", "Automatic renewal"]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Business Savings Account</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the savings solution that best fits your business needs and financial goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {accountTypes.map((account, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-green-600">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">{account.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">{account.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {account.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Open Account
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSavingsAccountTypes;
