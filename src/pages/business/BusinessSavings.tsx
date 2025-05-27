
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PiggyBank, TrendingUp, Shield, Calculator, CheckCircle, DollarSign, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BusinessSavings = () => {
  const keyFeatures = [
    {
      icon: PiggyBank,
      title: "High-Yield Savings",
      description: "Competitive interest rates to help your business funds grow while maintaining liquidity."
    },
    {
      icon: TrendingUp,
      title: "Tiered Interest Rates",
      description: "Higher balances earn better rates with our tiered interest structure."
    },
    {
      icon: Shield,
      title: "FDIC Insured",
      description: "Your business deposits are protected up to the maximum allowed by law."
    },
    {
      icon: Calculator,
      title: "No Monthly Fees",
      description: "Maintain your account without worrying about monthly maintenance fees."
    }
  ];

  const accountTypes = [
    {
      title: "Business Money Market",
      description: "Higher interest rates with check-writing privileges",
      features: ["Competitive interest rates", "Limited check writing", "Online banking access"]
    },
    {
      title: "Business Savings Account",
      description: "Traditional savings with excellent rates for your business",
      features: ["No minimum balance", "Online transfers", "Monthly statements"]
    },
    {
      title: "Certificate of Deposit",
      description: "Fixed-rate savings for predetermined terms",
      features: ["Guaranteed returns", "Various term options", "Automatic renewal"]
    }
  ];

  const benefits = [
    "Competitive interest rates",
    "No monthly maintenance fees",
    "FDIC insurance protection",
    "Online and mobile banking",
    "24/7 account access",
    "Business support services"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Business Savings Accounts
                </h1>
                <p className="text-xl mb-8 text-green-100 leading-relaxed">
                  Grow your business funds with competitive interest rates while maintaining the flexibility and access you need for daily operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Open Account
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors text-lg">
                    Compare Rates
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Why Choose Business Savings?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Competitive interest rates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>No monthly fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>FDIC insured</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Online banking access</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Savings Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our business savings accounts offer the perfect combination of competitive rates and convenient access to your funds.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-fit">
                      <feature.icon className="h-8 w-8 text-green-600" />
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

        {/* Account Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Business Savings Account</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the savings solution that best fits your business needs and financial goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {accountTypes.map((account, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-green-600">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-900">{account.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">{account.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {account.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Open Account
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Business Savings Benefits</h2>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Maximize your business earnings with our competitive savings solutions designed for growing businesses.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-green-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <DollarSign className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Competitive Rates</h3>
                      <p className="text-green-200">Earn more on your business funds</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Clock className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">24/7 Access</h3>
                      <p className="text-green-200">Manage your account anytime</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Expert Support</h3>
                      <p className="text-green-200">Dedicated business banking team</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Saving?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Open a business savings account today and start earning competitive interest on your business funds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg">
                Open Account Now
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-lg">
                Compare Account Options
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessSavings;
