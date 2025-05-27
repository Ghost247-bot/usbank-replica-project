
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Home, CreditCard, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompareRates = () => {
  const rateCategories = [
    {
      icon: PiggyBank,
      title: "Savings Accounts",
      rates: [
        { name: "Basic Savings", rate: "0.50% APY", minimum: "$100" },
        { name: "High-Yield Savings", rate: "4.25% APY", minimum: "$500" },
        { name: "Money Market", rate: "3.75% APY", minimum: "$2,500" }
      ]
    },
    {
      icon: Home,
      title: "Home Loans",
      rates: [
        { name: "30-Year Fixed", rate: "6.75% APR", minimum: "20% down" },
        { name: "15-Year Fixed", rate: "6.25% APR", minimum: "20% down" },
        { name: "ARM 5/1", rate: "5.95% APR", minimum: "10% down" }
      ]
    },
    {
      icon: CreditCard,
      title: "Personal Loans",
      rates: [
        { name: "Secured Personal Loan", rate: "8.99% APR", minimum: "$1,000" },
        { name: "Unsecured Personal Loan", rate: "12.99% APR", minimum: "$2,500" },
        { name: "Debt Consolidation", rate: "10.49% APR", minimum: "$5,000" }
      ]
    },
    {
      icon: TrendingUp,
      title: "Certificates of Deposit",
      rates: [
        { name: "6-Month CD", rate: "4.50% APY", minimum: "$1,000" },
        { name: "12-Month CD", rate: "4.75% APY", minimum: "$1,000" },
        { name: "60-Month CD", rate: "4.25% APY", minimum: "$1,000" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Compare Our Rates</h1>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Discover competitive rates across all our financial products. Find the best rates for your savings, loans, and investments.
          </p>
          <div className="text-sm text-green-200">
            Rates updated daily • All rates subject to credit approval
          </div>
        </div>
      </section>

      {/* Rates Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Rates</h2>
            <p className="text-xl text-gray-600">Competitive rates across all our products</p>
            <div className="text-sm text-gray-500 mt-2">
              Rates effective as of {new Date().toLocaleDateString()} and subject to change
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {rateCategories.map((category, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.rates.map((rate, rateIndex) => (
                      <div key={rateIndex} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">{rate.name}</h4>
                          <p className="text-sm text-gray-600">Minimum: {rate.minimum}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">{rate.rate}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link to="/get-started">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Rate Information</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Annual Percentage Yields (APY) are accurate as of the date shown and subject to change at any time.</p>
              <p>• Minimum balance requirements apply to earn advertised APY.</p>
              <p>• Loan rates shown are our best available rates and require excellent credit qualification.</p>
              <p>• All loan applications subject to credit approval and verification of income and assets.</p>
              <p>• Member FDIC. Equal Housing Lender.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Take advantage of our competitive rates and start earning or saving more today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create-account">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  Open Account
                </Button>
              </Link>
              <Link to="/schedule-consultation">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompareRates;
