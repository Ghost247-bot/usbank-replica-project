
import React from 'react';
import { CheckCircle, DollarSign, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SpecializedPortfolioGrid = () => {
  const additionalOptions = [
    {
      title: "ESG Sustainable Portfolio",
      description: "Environmentally and socially responsible investing",
      icon: DollarSign,
      features: ["ESG-screened investments", "Impact investing", "Sustainable funds"]
    },
    {
      title: "Sector-Specific Portfolios",
      description: "Focused investments in specific market sectors",
      icon: BarChart,
      features: ["Technology focus", "Healthcare sector", "Energy investments"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Portfolio Options</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore additional portfolio options for specific investment themes and objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {additionalOptions.map((option, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <option.icon className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl font-semibold text-gray-900">{option.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedPortfolioGrid;
