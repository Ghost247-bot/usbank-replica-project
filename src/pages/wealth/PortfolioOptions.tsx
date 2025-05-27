import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, TrendingUp, Shield, DollarSign, Target, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PortfolioOptions = () => {
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Portfolio Options
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Explore our range of professionally managed investment portfolios designed to meet different risk tolerances and financial objectives.
              </p>
              <Link to="/contact-us">
                <Button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Portfolio Options */}
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
                    {/* Asset Allocation */}
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

                    {/* Features */}
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

        {/* Additional Options */}
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our investment professionals are here to help you choose the right portfolio for your financial goals and risk tolerance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/wealth/portfolio-analysis">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                  Portfolio Analysis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioOptions;
