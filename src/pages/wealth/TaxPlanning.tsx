
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, FileText, TrendingDown, Clock, CheckCircle, DollarSign, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TaxPlanning = () => {
  const keyFeatures = [
    {
      icon: Calculator,
      title: "Tax Optimization",
      description: "Strategic planning to minimize your tax liability through legal tax reduction strategies."
    },
    {
      icon: FileText,
      title: "Deduction Planning",
      description: "Maximize available deductions and credits to reduce your overall tax burden."
    },
    {
      icon: TrendingDown,
      title: "Tax Loss Harvesting",
      description: "Offset gains with strategic loss realization to optimize your tax position."
    },
    {
      icon: Clock,
      title: "Year-Round Planning",
      description: "Continuous tax planning throughout the year, not just during tax season."
    }
  ];

  const benefits = [
    "Proactive tax strategies",
    "Retirement account optimization",
    "Estate tax planning",
    "Business tax planning",
    "Investment tax efficiency",
    "Compliance support"
  ];

  const planningStrategies = [
    {
      title: "Income Tax Planning",
      description: "Strategies to minimize your annual income tax liability",
      features: ["Income timing strategies", "Tax-advantaged investments", "Retirement contribution optimization"]
    },
    {
      title: "Estate Tax Planning", 
      description: "Minimize estate taxes and maximize wealth transfer to heirs",
      features: ["Gift tax strategies", "Trust planning", "Generation-skipping planning"]
    },
    {
      title: "Business Tax Planning",
      description: "Tax-efficient strategies for business owners and entrepreneurs",
      features: ["Entity structure optimization", "Succession planning", "Compensation strategies"]
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
                  Tax Planning
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Optimize your tax strategy with professional guidance and proactive planning to minimize your tax liability while staying compliant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Start Tax Planning
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    Schedule Consultation
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Tax Planning Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Reduce tax liability</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Maximize deductions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Optimize investments</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Stay compliant</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Tax Planning Strategies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive tax planning services help you minimize taxes, maximize savings, and stay ahead of changing tax regulations.
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

        {/* Planning Strategies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Tax Strategies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our tax planning strategies are designed to address your specific financial situation and long-term objectives.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {planningStrategies.map((strategy, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-900">{strategy.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">{strategy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {strategy.features.map((feature, featureIndex) => (
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
                <h2 className="text-4xl font-bold mb-6">Tax Planning Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our proactive tax planning approach helps you keep more of what you earn while ensuring full compliance with tax regulations.
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
                    <DollarSign className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Save Money</h3>
                      <p className="text-blue-200">Reduce your overall tax burden</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Target className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Strategic Planning</h3>
                      <p className="text-blue-200">Long-term tax optimization</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Expert Guidance</h3>
                      <p className="text-blue-200">Professional tax advisors</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Optimize Your Tax Strategy?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Contact our tax planning specialists to develop a customized strategy that minimizes your tax liability and maximizes your savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Schedule Tax Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                Download Tax Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TaxPlanning;
