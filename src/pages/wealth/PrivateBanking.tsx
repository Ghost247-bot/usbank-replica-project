
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Crown, Users, Globe, Shield, CheckCircle, DollarSign, Star, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PrivateBanking = () => {
  const keyFeatures = [
    {
      icon: Crown,
      title: "Exclusive Services",
      description: "Personalized banking services designed exclusively for high-net-worth individuals and families."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Personal relationship managers and specialists available 24/7 to meet your banking needs."
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Worldwide banking services and investment opportunities across international markets."
    },
    {
      icon: Shield,
      title: "Wealth Protection",
      description: "Comprehensive strategies to preserve, protect, and grow your wealth over generations."
    }
  ];

  const benefits = [
    "Dedicated relationship manager",
    "Exclusive investment opportunities",
    "Concierge banking services",
    "Global banking access",
    "Priority customer service",
    "Customized financial solutions"
  ];

  const privateServices = [
    {
      title: "Relationship Management",
      description: "Dedicated private banking team focused exclusively on your needs",
      features: ["Personal relationship manager", "24/7 priority service", "Customized solutions"]
    },
    {
      title: "Investment Services", 
      description: "Exclusive access to sophisticated investment opportunities",
      features: ["Private equity access", "Alternative investments", "Institutional-quality research"]
    },
    {
      title: "Lending Solutions",
      description: "Flexible financing options with competitive terms and rates",
      features: ["Asset-based lending", "Custom loan structures", "Securities-based lending"]
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
                  Private Banking
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                  Exclusive banking services designed for discerning clients who demand the highest level of personalized service and sophisticated financial solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                    Contact Private Banking
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg">
                    Learn About Eligibility
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold mb-6">Private Banking Advantages</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Personalized service</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Exclusive opportunities</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Global banking access</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400" />
                      <span>Wealth preservation</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Private Banking Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our private banking services provide sophisticated financial solutions with the personalized attention that high-net-worth clients deserve.
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

        {/* Private Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Exclusive Private Banking Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access sophisticated financial services and investment opportunities typically reserved for institutional clients.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {privateServices.map((service, index) => (
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
                <h2 className="text-4xl font-bold mb-6">Private Banking Benefits</h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Experience the ultimate in personalized banking with exclusive services, dedicated support, and sophisticated financial solutions.
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
                    <Star className="h-8 w-8 text-green-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Premium Service</h3>
                      <p className="text-blue-200">White-glove treatment and attention</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <DollarSign className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Exclusive Access</h3>
                      <p className="text-blue-200">Unique investment opportunities</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                    <div>
                      <h3 className="text-xl font-semibold">Award-Winning Team</h3>
                      <p className="text-blue-200">Top-rated private banking professionals</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready for Private Banking Excellence?</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover the difference that personalized private banking can make. Contact our private banking team to learn about eligibility and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
                Contact Private Banking
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg">
                Download Private Banking Guide
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivateBanking;
