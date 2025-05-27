
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, BarChart, Shield, Users, CheckCircle, DollarSign, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InvestmentManagement = () => {
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

  const benefits = [
    "Personalized investment strategies",
    "Diversified portfolio management",
    "Regular performance reviews",
    "Tax-efficient investing",
    "Estate planning integration",
    "24/7 online account access"
  ];

  const investmentOptions = [
    {
      title: "Growth Portfolios",
      description: "Designed for long-term capital appreciation with higher growth potential",
      features: ["Equity-focused allocations", "International diversification", "Growth-oriented strategies"]
    },
    {
      title: "Income Portfolios", 
      description: "Focus on generating steady income while preserving capital",
      features: ["Dividend-paying stocks", "Fixed-income securities", "REIT investments"]
    },
    {
      title: "Balanced Portfolios",
      description: "Combination of growth and income strategies for moderate risk tolerance",
      features: ["Diversified asset allocation", "Risk-adjusted returns", "Flexible rebalancing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Professional Investment Management
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Let our experienced investment professionals help you build and manage a diversified portfolio designed to meet your financial goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Schedule Consultation
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    View Portfolio Options
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Why Choose Our Investment Management?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Personalized investment strategies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Professional portfolio management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Comprehensive risk management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Regular performance monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
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

        {/* Investment Options Section */}
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
                    <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Investment Management Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our investment management services provide you with the expertise and tools needed to build long-term wealth while managing risk effectively.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <DollarSign className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Competitive Fees</h3>
                      <p className="text-blue-200">Transparent, asset-based pricing</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Target className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Goal-Based Investing</h3>
                      <p className="text-blue-200">Strategies aligned with your objectives</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Award-Winning Service</h3>
                      <p className="text-blue-200">Recognized for investment excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Schedule a consultation with one of our investment professionals to discuss your financial goals and develop a personalized investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                Download Investment Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InvestmentManagement;
