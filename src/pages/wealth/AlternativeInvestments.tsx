
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Building, Coins, Globe, CheckCircle, DollarSign, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AlternativeInvestments = () => {
  const keyFeatures = [
    {
      icon: TrendingUp,
      title: "Private Equity",
      description: "Access to private equity investment opportunities typically reserved for institutional investors."
    },
    {
      icon: Building,
      title: "Real Estate Investments",
      description: "Commercial and residential real estate investments including REITs and direct property ownership."
    },
    {
      icon: Coins,
      title: "Commodities & Precious Metals",
      description: "Direct investment in commodities, precious metals, and natural resources for portfolio diversification."
    },
    {
      icon: Globe,
      title: "International Opportunities",
      description: "Global investment opportunities and emerging market access for geographic diversification."
    }
  ];

  const benefits = [
    "Portfolio diversification",
    "Inflation protection",
    "Potential higher returns",
    "Low correlation to stocks",
    "Access to exclusive deals",
    "Professional management"
  ];

  const investmentTypes = [
    {
      title: "Private Equity & Venture Capital",
      description: "Invest in private companies and emerging growth opportunities",
      features: ["Growth capital investments", "Buyout opportunities", "Venture capital funds"]
    },
    {
      title: "Real Estate Investments", 
      description: "Diversified real estate exposure through various investment vehicles",
      features: ["Commercial real estate", "REITs and real estate funds", "Direct property investment"]
    },
    {
      title: "Hedge Funds & Alternative Strategies",
      description: "Access to sophisticated investment strategies and hedge fund opportunities",
      features: ["Long/short equity strategies", "Market neutral funds", "Absolute return strategies"]
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
                  Alternative Investments
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Diversify your portfolio with alternative investment options designed to provide unique return profiles and risk characteristics beyond traditional investments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Explore Opportunities
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    Schedule Consultation
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Why Alternative Investments?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Portfolio diversification</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Potential higher returns</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Inflation protection</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Exclusive opportunities</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Alternative Investment Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access a diverse range of alternative investments designed to enhance portfolio diversification and potentially improve risk-adjusted returns.
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

        {/* Investment Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of alternative investment categories, each offering unique benefits and opportunities for portfolio enhancement.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {investmentTypes.map((investment, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-900">{investment.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">{investment.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {investment.features.map((feature, featureIndex) => (
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
                <h2 className="text-4xl font-bold mb-6">Alternative Investment Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Alternative investments offer unique opportunities to diversify your portfolio beyond traditional stocks and bonds while potentially enhancing returns.
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
                    <Target className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Diversification</h3>
                      <p className="text-blue-200">Reduce portfolio correlation risk</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <DollarSign className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Return Potential</h3>
                      <p className="text-blue-200">Access to unique return profiles</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Expert Management</h3>
                      <p className="text-blue-200">Professional alternative investment team</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Explore Alternative Investments?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how alternative investments can enhance your portfolio diversification and return potential. Schedule a consultation with our alternative investment specialists.
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

export default AlternativeInvestments;
