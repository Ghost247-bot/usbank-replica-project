
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PiggyBank, Target, Calendar, TrendingUp, CheckCircle, DollarSign, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const RetirementPlanning = () => {
  const keyFeatures = [
    {
      icon: Target,
      title: "Goal-Based Planning",
      description: "Customized retirement strategies tailored to your specific financial goals and timeline."
    },
    {
      icon: TrendingUp,
      title: "Investment Growth",
      description: "Strategic investment allocation designed to maximize long-term growth potential."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and protection strategies for your retirement savings."
    },
    {
      icon: Calendar,
      title: "Timeline Planning",
      description: "Detailed planning based on your retirement timeline and life stage requirements."
    }
  ];

  const benefits = [
    "Personalized retirement strategies",
    "401(k) and IRA management",
    "Social Security optimization",
    "Healthcare cost planning",
    "Legacy planning",
    "Regular portfolio reviews"
  ];

  const retirementOptions = [
    {
      title: "401(k) Management",
      description: "Optimize your employer-sponsored retirement plan for maximum benefits",
      features: ["Contribution optimization", "Investment selection", "Employer match maximization"]
    },
    {
      title: "IRA Planning", 
      description: "Traditional and Roth IRA strategies for tax-efficient retirement savings",
      features: ["Tax-deferred growth", "Roth conversion strategies", "Distribution planning"]
    },
    {
      title: "Income Planning",
      description: "Create sustainable income streams for your retirement years",
      features: ["Withdrawal strategies", "Annuity options", "Social Security timing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Retirement Planning
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Secure your financial future with our comprehensive retirement planning services designed to help you achieve your retirement goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Start Planning
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    Calculate Retirement Needs
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Why Plan for Retirement?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Maintain your lifestyle</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Combat inflation effects</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Healthcare cost coverage</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Leave a legacy</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Retirement Planning Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive retirement planning approach helps you build a secure financial future with personalized strategies and expert guidance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit">
                      <feature.icon className="h-8 w-8 text-blue-600" />
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

        {/* Retirement Options Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Retirement Planning Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of retirement planning strategies designed to meet your unique financial situation and retirement timeline.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {retirementOptions.map((option, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-900">{option.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Retirement Planning Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our retirement planning services provide you with the tools and strategies needed to build a secure and comfortable retirement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <PiggyBank className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Save More</h3>
                      <p className="text-blue-200">Maximize your retirement savings</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Clock className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Start Early</h3>
                      <p className="text-blue-200">Time is your greatest advantage</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <DollarSign className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Tax Benefits</h3>
                      <p className="text-blue-200">Take advantage of tax-deferred growth</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Plan Your Retirement?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Schedule a consultation with one of our retirement planning specialists to start building your secure financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                Download Retirement Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RetirementPlanning;
