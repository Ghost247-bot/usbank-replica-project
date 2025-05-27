
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Heart, Car, Home, CheckCircle, DollarSign, Umbrella, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InsuranceSolutions = () => {
  const keyFeatures = [
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Protect your family's financial future with comprehensive life insurance coverage options."
    },
    {
      icon: Heart,
      title: "Health Insurance",
      description: "Quality healthcare coverage to protect you and your family from medical expenses."
    },
    {
      icon: Home,
      title: "Property Insurance",
      description: "Comprehensive coverage for your home, belongings, and other valuable property."
    },
    {
      icon: Umbrella,
      title: "Liability Protection",
      description: "Additional liability coverage to protect your assets from potential lawsuits."
    }
  ];

  const benefits = [
    "Comprehensive coverage options",
    "Competitive premium rates",
    "Expert insurance guidance",
    "Claims support services",
    "Policy review and updates",
    "Multi-policy discounts"
  ];

  const insuranceTypes = [
    {
      title: "Life Insurance",
      description: "Term and permanent life insurance to protect your loved ones",
      features: ["Term life coverage", "Whole life policies", "Universal life options"]
    },
    {
      title: "Disability Insurance", 
      description: "Income protection if you're unable to work due to illness or injury",
      features: ["Short-term disability", "Long-term disability", "Income replacement"]
    },
    {
      title: "Long-Term Care",
      description: "Coverage for long-term care expenses in your later years",
      features: ["Nursing home care", "Home healthcare", "Adult day services"]
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
                  Insurance Solutions
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Comprehensive insurance solutions to protect what matters most to you and your family with competitive rates and expert guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Get a Quote
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    Compare Coverage
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Why Choose Our Insurance?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Comprehensive coverage</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Competitive rates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Expert guidance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>24/7 claims support</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance Coverage Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect yourself, your family, and your assets with our comprehensive range of insurance solutions tailored to your needs.
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

        {/* Insurance Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Insurance Products</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Beyond basic coverage, we offer specialized insurance products to address your unique protection needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {insuranceTypes.map((insurance, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-600">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-900">{insurance.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">{insurance.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {insurance.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Get Quote
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
                <h2 className="text-4xl font-bold mb-6">Insurance Solutions Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our comprehensive insurance solutions provide peace of mind and financial protection for life's unexpected events.
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
                    <Shield className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Complete Protection</h3>
                      <p className="text-blue-200">Comprehensive coverage options</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <DollarSign className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Competitive Rates</h3>
                      <p className="text-blue-200">Best value for your protection needs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Expert Service</h3>
                      <p className="text-blue-200">Professional insurance advisors</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Protect What Matters Most?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get started with our comprehensive insurance solutions. Contact our insurance specialists for personalized coverage recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Get Insurance Quote
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                Compare Coverage Options
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsuranceSolutions;
