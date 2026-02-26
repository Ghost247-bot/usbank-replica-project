
import React from 'react';
import { Star, Shield, Smartphone, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CreditCardsFeatures = () => {
  const cardFeatures = [
    {
      icon: Star,
      title: "Rewards program",
      description: "Earn cash back, points, or miles on every purchase you make"
    },
    {
      icon: Shield,
      title: "Security features",
      description: "Advanced fraud protection and real-time transaction alerts"
    },
    {
      icon: Smartphone,
      title: "Mobile payments",
      description: "Pay with your phone using Apple Pay, Google Pay, and Samsung Pay"
    },
    {
      icon: Users,
      title: "Credit building",
      description: "Build your credit history with responsible card usage"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Credit cards built for your lifestyle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our credit cards offer competitive rates, valuable rewards, and the security 
            features you need for confident spending.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardFeatures.map((feature, index) => (
            <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditCardsFeatures;
