
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DollarSign, CheckCircle, Shield, PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const IncomePortfolios = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center">
              <DollarSign className="h-16 w-16 mx-auto mb-6 text-blue-200" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Income Portfolios
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Focus on generating steady income while preserving capital through dividend-paying stocks, fixed-income securities, and REIT investments.
              </p>
              <Link to="/contact-us">
                <Button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Income Portfolio Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our income portfolios are designed to provide consistent cash flow while maintaining capital preservation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Dividend-Paying Stocks</CardTitle>
                  <CardDescription>
                    High-quality companies with consistent dividend payment history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Dividend aristocrats</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Utility companies</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Consumer staples</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">Fixed-Income Securities</CardTitle>
                  <CardDescription>
                    Bonds and other debt instruments providing predictable income streams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Government bonds</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Corporate bonds</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Municipal bonds</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <PieChart className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">REIT Investments</CardTitle>
                  <CardDescription>
                    Real Estate Investment Trusts providing exposure to real estate income
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Commercial real estate</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Residential properties</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Infrastructure REITs</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Generate Steady Income?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Start building a reliable income stream with our professionally managed income-focused portfolios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/wealth/portfolio-options">
                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
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

export default IncomePortfolios;
