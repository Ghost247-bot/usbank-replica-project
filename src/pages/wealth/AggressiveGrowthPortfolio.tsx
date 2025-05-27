
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, CheckCircle, DollarSign, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AggressiveGrowthPortfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center">
              <TrendingUp className="h-16 w-16 mx-auto mb-6 text-purple-200" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Aggressive Growth Portfolio
              </h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto">
                A higher-risk portfolio targeting maximum long-term capital appreciation, designed for investors with high risk tolerance and long investment horizons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-us">
                  <Button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/wealth/portfolio-analysis">
                  <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors text-lg">
                    Analyze My Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio Overview</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <DollarSign className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="text-xl font-semibold">Expected Annual Return</h3>
                      <p className="text-gray-600">8-12% annually</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="text-xl font-semibold">Risk Level</h3>
                      <p className="text-gray-600">High</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                    <div>
                      <h3 className="text-xl font-semibold">Investment Approach</h3>
                      <p className="text-gray-600">Maximum capital appreciation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Asset Allocation</CardTitle>
                  <CardDescription>Strategic distribution of investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-medium">Stocks</span>
                      <span className="text-xl font-bold text-green-600">80%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium">Alternatives</span>
                      <span className="text-xl font-bold text-purple-600">15%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium">Bonds</span>
                      <span className="text-xl font-bold text-blue-600">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Portfolio Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Growth-oriented stocks",
                "Emerging market exposure",
                "Alternative investments",
                "Technology sector focus"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Investing?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a consultation to learn more about our Aggressive Growth Portfolio.
            </p>
            <Link to="/contact-us">
              <Button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AggressiveGrowthPortfolio;
