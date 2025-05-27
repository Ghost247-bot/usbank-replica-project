
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, CheckCircle, TrendingUp, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ConservativeGrowthPortfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center">
              <Shield className="h-16 w-16 mx-auto mb-6 text-green-200" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Conservative Growth Portfolio
              </h1>
              <p className="text-xl mb-8 text-green-100 leading-relaxed max-w-3xl mx-auto">
                A low-risk portfolio designed for capital preservation with modest growth potential, ideal for conservative investors seeking steady returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-us">
                  <Button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="/wealth/portfolio-analysis">
                  <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors text-lg">
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
                    <DollarSign className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold">Expected Annual Return</h3>
                      <p className="text-gray-600">4-6% annually</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Shield className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold">Risk Level</h3>
                      <p className="text-gray-600">Low</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold">Investment Approach</h3>
                      <p className="text-gray-600">Capital preservation focused</p>
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
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium">Bonds</span>
                      <span className="text-xl font-bold text-blue-600">60%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-medium">Stocks</span>
                      <span className="text-xl font-bold text-green-600">30%</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Cash & Equivalents</span>
                      <span className="text-xl font-bold text-gray-600">10%</span>
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
                "Government and corporate bonds",
                "Dividend-focused equities", 
                "Money market investments",
                "Regular rebalancing"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-md">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
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
              Schedule a consultation to learn more about our Conservative Growth Portfolio.
            </p>
            <Link to="/contact-us">
              <Button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
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

export default ConservativeGrowthPortfolio;
