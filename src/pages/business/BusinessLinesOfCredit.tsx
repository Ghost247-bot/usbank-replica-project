
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, CreditCard, TrendingUp, Clock, Shield, DollarSign, BarChart, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BusinessLinesOfCredit = () => {
  const benefits = [
    "Access funds when needed",
    "Pay interest only on used amount",
    "Revolving credit line",
    "Flexible repayment terms",
    "Quick approval process",
    "No collateral required for qualified businesses"
  ];

  const features = [
    {
      icon: CreditCard,
      title: "Flexible access",
      description: "Access funds when you need them, pay interest only on what you use"
    },
    {
      icon: TrendingUp,
      title: "Growing credit lines",
      description: "Increase your credit line as your business grows and establishes history"
    },
    {
      icon: Clock,
      title: "Quick approval",
      description: "Fast application process with approval decisions in 24-48 hours"
    },
    {
      icon: Shield,
      title: "Competitive rates",
      description: "Low interest rates starting at Prime + 1% with flexible terms"
    }
  ];

  const useCases = [
    {
      icon: DollarSign,
      title: "Working capital",
      description: "Manage cash flow gaps and seasonal fluctuations in your business"
    },
    {
      icon: BarChart,
      title: "Business expansion",
      description: "Fund growth initiatives, inventory purchases, or new locations"
    },
    {
      icon: Calculator,
      title: "Emergency expenses",
      description: "Handle unexpected costs or take advantage of time-sensitive opportunities"
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
                  Flexible Business Financing
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Business Lines of Credit
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Access funds when needed with flexible business lines of credit. 
                  Perfect for managing cash flow, seasonal needs, and unexpected opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Calculate Payments
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Credit Line Benefits</h3>
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

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why choose our lines of credit?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our business lines of credit offer the flexibility and convenience 
                you need to manage your business finances effectively.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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

        {/* Credit Line Options */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Choose the right credit line for your business
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Unsecured Line of Credit</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">$10K - $250K</div>
                <p className="text-gray-600 mb-6">No collateral required for qualified businesses</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Credit limits:</strong>
                      <span className="text-gray-600 ml-2">$10,000 to $250,000</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Interest rates:</strong>
                      <span className="text-gray-600 ml-2">Prime + 2% to Prime + 6%</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Requirements:</strong>
                      <span className="text-gray-600 ml-2">2+ years in business, $100K+ annual revenue</span>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for Unsecured
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Secured Line of Credit</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">$25K - $1M</div>
                <p className="text-gray-600 mb-6">Secured by business assets or real estate</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Credit limits:</strong>
                      <span className="text-gray-600 ml-2">$25,000 to $1,000,000</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Interest rates:</strong>
                      <span className="text-gray-600 ml-2">Prime + 1% to Prime + 4%</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Collateral:</strong>
                      <span className="text-gray-600 ml-2">Business assets, real estate, or equipment</span>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for Secured
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              How businesses use lines of credit
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <useCase.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Simple application process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Apply Online</h3>
                <p className="text-gray-600">Complete our simple online application in just 10 minutes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Review</h3>
                <p className="text-gray-600">Our team reviews your application and provides a decision within 24-48 hours</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Access Funds</h3>
                <p className="text-gray-600">Once approved, access your funds online, by phone, or with checks</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to access flexible financing?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Apply for a business line of credit today and get the financial flexibility 
              your business needs to thrive in any situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Apply Online Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Speak with a Specialist
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Credit approval subject to credit review and verification. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessLinesOfCredit;
