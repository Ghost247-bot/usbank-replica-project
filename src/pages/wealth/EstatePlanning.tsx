
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Users, Shield, TrendingUp, CheckCircle, DollarSign, Crown, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EstatePlanning = () => {
  const keyFeatures = [
    {
      icon: FileText,
      title: "Will & Testament",
      description: "Comprehensive will preparation to ensure your assets are distributed according to your wishes."
    },
    {
      icon: Users,
      title: "Beneficiary Planning",
      description: "Strategic designation and management of beneficiaries for all your accounts and assets."
    },
    {
      icon: Shield,
      title: "Asset Protection",
      description: "Advanced strategies to protect your wealth from creditors, lawsuits, and other claims."
    },
    {
      icon: TrendingUp,
      title: "Tax Optimization",
      description: "Minimize estate taxes and maximize the inheritance you leave to your beneficiaries."
    }
  ];

  const benefits = [
    "Comprehensive estate plans",
    "Tax-efficient wealth transfer",
    "Asset protection strategies",
    "Probate avoidance",
    "Charitable giving plans",
    "Business succession planning"
  ];

  const estateServices = [
    {
      title: "Trust Planning",
      description: "Establish trusts to protect assets and provide for beneficiaries",
      features: ["Revocable living trusts", "Irrevocable trusts", "Charitable trusts"]
    },
    {
      title: "Advanced Planning", 
      description: "Sophisticated strategies for high-net-worth individuals",
      features: ["Generation-skipping trusts", "Family limited partnerships", "Dynasty planning"]
    },
    {
      title: "Business Succession",
      description: "Plan for the smooth transfer of your business interests",
      features: ["Buy-sell agreements", "Key person insurance", "Management transition"]
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
                  Estate Planning
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Plan for the future and protect your legacy with comprehensive estate planning services designed to preserve your wealth for generations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Start Estate Planning
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    Schedule Consultation
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Why Estate Planning Matters</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Protect your family</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Minimize estate taxes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Avoid probate delays</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Preserve your legacy</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Estate Planning Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive estate planning services help you protect your assets, minimize taxes, and ensure your wishes are carried out.
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

        {/* Estate Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Estate Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From basic wills to sophisticated trust structures, we provide estate planning solutions for every situation and wealth level.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {estateServices.map((service, index) => (
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
                <h2 className="text-4xl font-bold mb-6">Estate Planning Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Proper estate planning ensures your wealth is preserved, your family is protected, and your legacy continues for generations to come.
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
                    <Crown className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Legacy Protection</h3>
                      <p className="text-blue-200">Preserve your wealth for future generations</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <DollarSign className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Tax Efficiency</h3>
                      <p className="text-blue-200">Minimize estate and gift taxes</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Expert Guidance</h3>
                      <p className="text-blue-200">Experienced estate planning attorneys</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Plan Your Estate?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Protect your family and preserve your legacy with comprehensive estate planning. Schedule a consultation with our estate planning specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Schedule Estate Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                Download Estate Planning Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EstatePlanning;
