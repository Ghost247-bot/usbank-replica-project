
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, Home, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const HomeEquityLoans = () => {
  const benefits = [
    "Competitive fixed rates",
    "Tax-deductible interest",
    "No application fees",
    "Quick approval process",
    "Flexible use of funds",
    "Credit line up to $500,000"
  ];

  const equityFeatures = [
    {
      icon: Home,
      title: "Use your home's equity",
      description: "Tap into your home's value for major expenses and investments"
    },
    {
      icon: Shield,
      title: "Fixed & variable rates",
      description: "Choose between fixed-rate loans or variable-rate lines of credit"
    },
    {
      icon: Smartphone,
      title: "Easy application",
      description: "Apply online and track your application status in real-time"
    },
    {
      icon: Users,
      title: "Expert guidance",
      description: "Our lending specialists help you choose the right option"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Star className="h-4 w-4 mr-2" />
                  Home Equity Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Unlock Your Home's Value
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Turn your home equity into cash for home improvements, debt consolidation, 
                  education, or other major expenses with competitive rates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/get-started">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                      Apply Now
                    </Button>
                  </Link>
                  <Link to="/check-equity">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                      Check Your Equity
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Home Equity Benefits</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Smart ways to use your equity
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Home equity loans and lines of credit offer flexible financing options 
                with competitive rates and potential tax benefits.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {equityFeatures.map((feature, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Product Comparison */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Choose your home equity option
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Compare our home equity loan and line of credit options
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Home Equity Loan</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Fixed Rate</div>
                <p className="text-gray-600 mb-6">Fixed rate, fixed payment, fixed term</p>
                <ul className="space-y-2 mb-6">
                  <li>• Fixed interest rate</li>
                  <li>• Predictable monthly payments</li>
                  <li>• Lump sum at closing</li>
                  <li>• Terms up to 20 years</li>
                  <li>• Rates starting at 7.25% APR</li>
                </ul>
                <Link to="/get-started">
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                    Apply for Loan
                  </Button>
                </Link>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Flexible Option</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Home Equity Line of Credit</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Variable Rate</div>
                <p className="text-gray-600 mb-6">Flexible access to funds as needed</p>
                <ul className="space-y-2 mb-6">
                  <li>• Variable interest rate</li>
                  <li>• Draw funds as needed</li>
                  <li>• Interest-only payments available</li>
                  <li>• 10-year draw period</li>
                  <li>• Rates starting at 6.75% APR</li>
                </ul>
                <Link to="/get-started">
                  <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                    Apply for Line of Credit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to access your equity?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Turn your home's equity into opportunity. Apply today and get competitive 
              rates with flexible terms that work for your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                  Apply Online
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                  Talk to a Specialist
                </Button>
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Subject to credit approval. Property must be owner-occupied.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeEquityLoans;
