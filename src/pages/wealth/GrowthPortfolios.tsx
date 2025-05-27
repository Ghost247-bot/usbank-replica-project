
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, CheckCircle, Globe, BarChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GrowthPortfolios = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center">
              <TrendingUp className="h-16 w-16 mx-auto mb-6 text-green-200" />
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Growth Portfolios
              </h1>
              <p className="text-xl mb-8 text-green-100 leading-relaxed max-w-3xl mx-auto">
                Designed for long-term capital appreciation with higher growth potential through equity-focused allocations and strategic diversification.
              </p>
              <Link to="/contact-us">
                <Button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Growth Portfolio Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our growth portfolios are designed to maximize long-term capital appreciation through strategic equity investments.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Equity-Focused Allocations</CardTitle>
                  <CardDescription>
                    Heavy emphasis on stocks and equity investments for maximum growth potential
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Large-cap growth stocks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Mid and small-cap opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Technology sector focus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Globe className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">International Diversification</CardTitle>
                  <CardDescription>
                    Global exposure to capture growth opportunities across different markets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Developed market exposure</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Emerging market opportunities</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Currency diversification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <BarChart className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-xl">Growth-Oriented Strategies</CardTitle>
                  <CardDescription>
                    Active management focused on identifying high-growth potential investments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Momentum investing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Innovation-focused sectors</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-600" />
                      <span className="text-sm">Regular portfolio optimization</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Grow Your Wealth?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Start your growth investment journey with our professionally managed portfolios designed for long-term capital appreciation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/wealth/portfolio-options">
                <Button variant="outline" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-lg">
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

export default GrowthPortfolios;
