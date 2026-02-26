
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, CheckCircle, BarChart, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BalancedPortfolios = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center">
              <Target className="h-16 w-16 mx-auto mb-6 text-purple-200" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Balanced Portfolios
              </h1>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed max-w-3xl mx-auto">
                Combination of growth and income strategies for moderate risk tolerance, offering diversified asset allocation and risk-adjusted returns.
              </p>
              <Link to="/contact-us">
                <Button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Balanced Portfolio Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our balanced portfolios provide the perfect mix of growth potential and income generation for moderate risk investors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <BarChart className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Diversified Asset Allocation</CardTitle>
                  <CardDescription>
                    Strategic mix of stocks, bonds, and alternative investments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Equity exposure (40-60%)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Fixed income (30-50%)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Alternative investments (5-15%)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Target className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Risk-Adjusted Returns</CardTitle>
                  <CardDescription>
                    Optimized balance between risk and return potential
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Moderate volatility</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Steady growth potential</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Income generation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Shield className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">Flexible Rebalancing</CardTitle>
                  <CardDescription>
                    Regular portfolio adjustments to maintain optimal allocation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Quarterly reviews</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Market-responsive adjustments</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Tax-efficient rebalancing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready for Balanced Growth?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Start your investment journey with our balanced portfolios designed to provide both growth and income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/wealth/portfolio-options">
                <Button variant="outline" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-lg">
                  View All Portfolios
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

export default BalancedPortfolios;
