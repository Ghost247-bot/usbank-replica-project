
import React from 'react';
import { CheckCircle, TrendingUp, Shield, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CorePortfolioGrid = () => {
  const portfolioTypes = [
    {
      title: "Conservative Growth Portfolio",
      description: "Low-risk portfolio focused on capital preservation with modest growth potential",
      riskLevel: "Low",
      expectedReturn: "4-6%",
      allocation: {
        bonds: 60,
        stocks: 30,
        cash: 10
      },
      features: [
        "Government and corporate bonds",
        "Dividend-focused equities",
        "Money market investments",
        "Regular rebalancing"
      ],
      icon: Shield,
      color: "green",
      route: "/wealth/conservative-growth-portfolio"
    },
    {
      title: "Moderate Growth Portfolio", 
      description: "Balanced approach combining growth potential with risk management",
      riskLevel: "Medium",
      expectedReturn: "6-8%",
      allocation: {
        bonds: 40,
        stocks: 50,
        alternatives: 10
      },
      features: [
        "Diversified equity holdings",
        "Investment-grade bonds",
        "REIT investments",
        "International exposure"
      ],
      icon: Target,
      color: "blue",
      route: "/wealth/moderate-growth-portfolio"
    },
    {
      title: "Aggressive Growth Portfolio",
      description: "Higher-risk portfolio targeting maximum long-term capital appreciation",
      riskLevel: "High", 
      expectedReturn: "8-12%",
      allocation: {
        stocks: 80,
        alternatives: 15,
        bonds: 5
      },
      features: [
        "Growth-oriented stocks",
        "Emerging market exposure",
        "Alternative investments",
        "Technology sector focus"
      ],
      icon: TrendingUp,
      color: "purple",
      route: "/wealth/aggressive-growth-portfolio"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'border-t-green-600 bg-green-50';
      case 'blue':
        return 'border-t-blue-600 bg-blue-50';
      case 'purple':
        return 'border-t-purple-600 bg-purple-50';
      default:
        return 'border-t-gray-600 bg-gray-50';
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Portfolio Options</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our three main portfolio strategies, each designed for different risk profiles and investment goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {portfolioTypes.map((portfolio, index) => (
            <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${getColorClasses(portfolio.color)}`}>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <portfolio.icon className="h-8 w-8 text-blue-600" />
                  <div>
                    <CardTitle className="text-2xl font-semibold text-gray-900">{portfolio.title}</CardTitle>
                    <div className="flex space-x-4 text-sm text-gray-600 mt-2">
                      <span>Risk: {portfolio.riskLevel}</span>
                      <span>Return: {portfolio.expectedReturn}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600 text-lg">{portfolio.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Asset Allocation</h4>
                  <div className="space-y-2">
                    {Object.entries(portfolio.allocation).map(([asset, percentage]) => (
                      <div key={asset} className="flex justify-between items-center">
                        <span className="capitalize text-gray-700">{asset}</span>
                        <span className="font-medium">{percentage}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {portfolio.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={portfolio.route}>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    Select This Portfolio
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

export default CorePortfolioGrid;
