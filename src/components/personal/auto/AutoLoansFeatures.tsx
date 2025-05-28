
import React from 'react';
import { Car, Shield, Smartphone, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AutoLoansFeatures = () => {
  const autoFeatures = [
    {
      icon: Car,
      title: "New & used vehicles",
      description: "Finance new cars, used cars, trucks, SUVs, and motorcycles"
    },
    {
      icon: Shield,
      title: "Competitive rates",
      description: "Get low rates based on your credit and choose terms up to 84 months"
    },
    {
      icon: Smartphone,
      title: "Easy application",
      description: "Apply online, get pre-approved, and shop with confidence"
    },
    {
      icon: Users,
      title: "Expert support",
      description: "Our auto loan specialists help you every step of the way"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Auto financing made simple
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From compact cars to luxury vehicles, we offer competitive rates and 
            flexible terms to help you drive away in your ideal vehicle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {autoFeatures.map((feature, index) => (
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

export default AutoLoansFeatures;
