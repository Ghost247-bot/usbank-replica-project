
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Users, FileText, Crown, CheckCircle, DollarSign, Lock, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TrustServices = () => {
  const keyFeatures = [
    {
      icon: Shield,
      title: "Asset Protection",
      description: "Comprehensive strategies to protect and preserve your wealth for future generations."
    },
    {
      icon: Users,
      title: "Beneficiary Management",
      description: "Professional management of trust assets and distributions to beneficiaries."
    },
    {
      icon: FileText,
      title: "Estate Planning Integration",
      description: "Seamless integration with your overall estate planning and wealth transfer goals."
    },
    {
      icon: Crown,
      title: "Fiduciary Excellence",
      description: "Highest standard of fiduciary responsibility and professional trust administration."
    }
  ];

  const benefits = [
    "Professional trust administration",
    "Tax-efficient wealth transfer",
    "Asset protection strategies",
    "Beneficiary advocacy",
    "Investment management",
    "Estate tax minimization"
  ];

  const trustTypes = [
    {
      title: "Revocable Living Trusts",
      description: "Flexible trust structures that can be modified during your lifetime",
      features: ["Avoid probate process", "Maintain control during lifetime", "Privacy protection"]
    },
    {
      title: "Irrevocable Trusts", 
      description: "Permanent trust structures for asset protection and tax benefits",
      features: ["Estate tax reduction", "Asset protection", "Charitable giving options"]
    },
    {
      title: "Charitable Trusts",
      description: "Support your favorite causes while receiving tax and income benefits",
      features: ["Tax deduction benefits", "Income stream options", "Legacy planning"]
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
                  Trust Services
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Protect and transfer your wealth with our comprehensive trust services designed to preserve your legacy for future generations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Explore Trust Options
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    Schedule Consultation
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Why Choose Trust Services?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Protect family assets</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Minimize estate taxes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Ensure proper distribution</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Professional management</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trust Administration Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced trust professionals provide comprehensive trust administration services with the highest level of fiduciary responsibility.
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

        {/* Trust Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trust Structure Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer various trust structures to meet your specific wealth transfer and asset protection needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {trustTypes.map((trust, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-900">{trust.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">{trust.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {trust.features.map((feature, featureIndex) => (
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
                <h2 className="text-4xl font-bold mb-6">Trust Services Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our trust services provide comprehensive solutions for wealth preservation, tax efficiency, and legacy planning.
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
                    <Lock className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Secure Administration</h3>
                      <p className="text-blue-200">Professional fiduciary management</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <DollarSign className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Tax Efficiency</h3>
                      <p className="text-blue-200">Minimize tax impact on transfers</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Expert Guidance</h3>
                      <p className="text-blue-200">Experienced trust professionals</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Establish a Trust?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Contact our trust specialists to discuss how trust services can help protect and transfer your wealth effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                Download Trust Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrustServices;
