
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, DollarSign, Users, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PersonalLoans = () => {
  const benefits = [
    "Fixed interest rates",
    "No collateral required",
    "Quick online application",
    "Same-day funding available",
    "No prepayment penalties",
    "Flexible repayment terms"
  ];

  const loanFeatures = [
    {
      icon: DollarSign,
      title: "Competitive rates",
      description: "Get low fixed rates based on your creditworthiness and income"
    },
    {
      icon: Shield,
      title: "No collateral needed",
      description: "Unsecured loans that don't require you to put up assets as collateral"
    },
    {
      icon: Smartphone,
      title: "Fast application",
      description: "Apply online in minutes and get a decision quickly"
    },
    {
      icon: Users,
      title: "Flexible terms",
      description: "Choose repayment terms from 2 to 7 years that fit your budget"
    }
  ];

  const additionalBenefits = [
    {
      icon: Clock,
      title: "Quick funding",
      description: "Get funds as soon as the next business day after approval"
    },
    {
      icon: TrendingUp,
      title: "Credit building",
      description: "Make on-time payments to help build your credit history"
    },
    {
      icon: Star,
      title: "Rate discounts",
      description: "Get rate discounts for automatic payments and existing customers"
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
                  Fast & Flexible
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Personal Loans for Life's Moments
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Whether you're consolidating debt, funding a major purchase, or covering 
                  unexpected expenses, our personal loans offer the flexibility you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Check Rates
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Loan Benefits</h3>
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
                Personal loans designed for you
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our personal loans offer competitive rates, flexible terms, and a simple 
                application process to help you achieve your financial goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {loanFeatures.map((feature, index) => (
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

        {/* Additional Benefits */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              More reasons to choose us
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Options */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Choose your loan amount
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Borrow what you need with terms that work for you
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Small Loan</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">$5,000 - $15,000</div>
                <p className="text-gray-600 mb-6">Perfect for smaller expenses</p>
                <ul className="space-y-2 mb-6">
                  <li>• Rates starting at 6.99% APR</li>
                  <li>• Terms from 2-5 years</li>
                  <li>• Quick approval process</li>
                  <li>• Same-day funding available</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply Now
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Medium Loan</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">$15,000 - $35,000</div>
                <p className="text-gray-600 mb-6">Great for debt consolidation</p>
                <ul className="space-y-2 mb-6">
                  <li>• Rates starting at 7.49% APR</li>
                  <li>• Terms from 3-7 years</li>
                  <li>• Autopay discount available</li>
                  <li>• No prepayment penalties</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply Now
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Large Loan</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">$35,000 - $100,000</div>
                <p className="text-gray-600 mb-6">For major life events</p>
                <ul className="space-y-2 mb-6">
                  <li>• Rates starting at 7.99% APR</li>
                  <li>• Terms up to 7 years</li>
                  <li>• Relationship discounts</li>
                  <li>• Dedicated loan specialist</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Get the funds you need today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Apply for a personal loan in minutes and get a decision quickly. 
              Fund your goals with competitive rates and flexible terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Apply Online
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Check Your Rate
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Subject to credit approval. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PersonalLoans;
