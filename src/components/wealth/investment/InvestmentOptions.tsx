
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InvestmentOptions = () => {
  const investmentOptions = [
    {
      title: "Growth Portfolios",
      description: "Designed for long-term capital appreciation with higher growth potential",
      features: ["Equity-focused allocations", "International diversification", "Growth-oriented strategies"],
      route: "/wealth/growth-portfolios"
    },
    {
      title: "Income Portfolios", 
      description: "Focus on generating steady income while preserving capital",
      features: ["Dividend-paying stocks", "Fixed-income securities", "REIT investments"],
      route: "/wealth/income-portfolios"
    },
    {
      title: "Balanced Portfolios",
      description: "Combination of growth and income strategies for moderate risk tolerance",
      features: ["Diversified asset allocation", "Risk-adjusted returns", "Flexible rebalancing"],
      route: "/wealth/balanced-portfolios"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Portfolio Options</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professionally managed portfolios designed to match different investment objectives and risk profiles.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {investmentOptions.map((option, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">{option.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={option.route}>
                  <Button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;
