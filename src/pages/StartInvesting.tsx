
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Shield, Target, PieChart, DollarSign, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const StartInvesting = () => {
  const investmentOptions = [
    {
      icon: PieChart,
      title: "Diversified Portfolios",
      description: "Professional portfolio management with balanced risk and growth potential",
      features: ["Global diversification", "Regular rebalancing", "Low management fees"],
      minInvestment: "$1,000"
    },
    {
      icon: Target,
      title: "Goal-Based Investing",
      description: "Tailored investment strategies aligned with your specific financial goals",
      features: ["Retirement planning", "Education funding", "Wealth building"],
      minInvestment: "$500"
    },
    {
      icon: BarChart3,
      title: "Self-Directed Trading",
      description: "Take control with our advanced trading platform and research tools",
      features: ["Real-time market data", "Advanced charting", "Research reports"],
      minInvestment: "$100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Start Your Investment Journey</h1>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Build long-term wealth with our comprehensive investment solutions. From beginner-friendly portfolios to advanced trading platforms.
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Open Investment Account
          </Button>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Investment Style</h2>
            <p className="text-xl text-gray-600">Find the perfect investment approach for your goals and experience level</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {investmentOptions.map((option, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                  <div className="text-lg font-bold text-green-600 mt-2">Min: {option.minInvestment}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Start Investing Today?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Compound Growth</h3>
                    <p className="text-gray-600">Time is your greatest asset. Start early to maximize the power of compound returns.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Beat Inflation</h3>
                    <p className="text-gray-600">Protect your purchasing power and grow your wealth above the rate of inflation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <DollarSign className="h-8 w-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Freedom</h3>
                    <p className="text-gray-600">Build wealth for retirement, education, or any major life goals you have in mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ready to Begin?</h3>
              <div className="space-y-4">
                <Link to="/wealth/portfolio-options">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                    View Portfolio Options
                  </Button>
                </Link>
                <Link to="/wealth/investment-management">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 text-lg">
                    Learn About Our Services
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 text-lg">
                    Speak with an Advisor
                  </Button>
                </Link>
              </div>
              <p className="text-center text-gray-600 text-sm mt-4">
                No minimum balance • Expert guidance • Competitive fees
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartInvesting;
