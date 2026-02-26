
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp, Target, PieChart, Shield, CheckCircle, DollarSign, Clock, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FinancialPlanning = () => {
  const keyFeatures = [
    {
      icon: TrendingUp,
      title: "Investment Strategy",
      description: "Customized investment strategies aligned with your financial goals and risk tolerance."
    },
    {
      icon: Target,
      title: "Goal Planning",
      description: "Define and achieve your short-term and long-term financial objectives systematically."
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Professional portfolio construction, monitoring, and rebalancing services."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and management to protect your financial future."
    }
  ];

  const benefits = [
    "Comprehensive financial plans",
    "Goal-based strategies",
    "Investment optimization",
    "Risk management",
    "Retirement planning",
    "Regular plan reviews"
  ];

  const planningServices = [
    {
      title: "Comprehensive Planning",
      description: "Complete financial plan covering all aspects of your financial life",
      features: ["Cash flow analysis", "Investment planning", "Insurance review"]
    },
    {
      title: "Retirement Planning", 
      description: "Specialized planning focused on your retirement goals and needs",
      features: ["401(k) optimization", "IRA strategies", "Income planning"]
    },
    {
      title: "Education Planning",
      description: "Strategic planning for education expenses and funding options",
      features: ["529 plan strategies", "Education savings", "Financial aid planning"]
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
                  Financial Planning
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Comprehensive financial advice and planning services to help you achieve your financial goals and secure your future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Schedule Consultation
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    Create Financial Plan
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Financial Planning Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Clear financial roadmap</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Goal achievement strategies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Risk management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Ongoing support</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Planning Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive financial planning approach addresses all aspects of your financial life to help you achieve your goals.
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

        {/* Planning Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Planning Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our range of specialized financial planning services designed to address your specific needs and life stage.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {planningServices.map((service, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
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
                <h2 className="text-4xl font-bold mb-6">Financial Planning Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our financial planning services provide you with a clear roadmap to achieve your financial goals and build long-term wealth.
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
                    <Target className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Goal Achievement</h3>
                      <p className="text-blue-200">Clear path to your financial objectives</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Clock className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Time Value</h3>
                      <p className="text-blue-200">Make time work for your wealth</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Expert Advice</h3>
                      <p className="text-blue-200">Certified financial planners</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Financial Planning?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Take control of your financial future with our comprehensive planning services. Schedule a consultation with our certified financial planners today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Schedule Financial Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                Download Planning Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinancialPlanning;
