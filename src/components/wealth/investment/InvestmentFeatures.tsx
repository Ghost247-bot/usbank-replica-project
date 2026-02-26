
import React from 'react';
import { TrendingUp, BarChart, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InvestmentFeatures = () => {
  const keyFeatures = [
    {
      icon: TrendingUp,
      title: "Professional Portfolio Management",
      description: "Expert management of your investment portfolio with personalized strategies tailored to your financial goals and risk tolerance."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive portfolio analysis with detailed performance reports and market insights to keep you informed."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Sophisticated risk assessment and mitigation strategies to protect and preserve your wealth across market cycles."
    },
    {
      icon: Users,
      title: "Dedicated Investment Team",
      description: "Access to experienced investment professionals who understand your unique financial situation and objectives."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Management Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to investment management combines expertise, technology, and personalized service to help you achieve your financial objectives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-blue-600" />
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

export default InvestmentFeatures;
