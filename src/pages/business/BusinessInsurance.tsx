
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Building, Users, FileText, Car, Heart, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BusinessInsurance = () => {
  const benefits = [
    "Comprehensive coverage options",
    "Competitive rates and premiums",
    "Expert claims support",
    "Risk assessment and management",
    "Custom insurance packages",
    "24/7 claims reporting"
  ];

  const coverages = [
    {
      icon: Shield,
      title: "General liability",
      description: "Protect against third-party claims, lawsuits, and bodily injury"
    },
    {
      icon: Building,
      title: "Property insurance",
      description: "Coverage for business property, equipment, and inventory"
    },
    {
      icon: Users,
      title: "Workers' compensation",
      description: "Employee injury and illness protection as required by law"
    },
    {
      icon: FileText,
      title: "Professional liability",
      description: "Errors and omissions coverage for professional services"
    }
  ];

  const additionalCoverages = [
    {
      icon: Car,
      title: "Commercial auto",
      description: "Coverage for business vehicles and fleet insurance"
    },
    {
      icon: Heart,
      title: "Employee benefits",
      description: "Health, dental, vision, and life insurance for employees"
    },
    {
      icon: Briefcase,
      title: "Business interruption",
      description: "Income protection when business operations are disrupted"
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
                  Business Protection Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Business Insurance
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Protect your business with comprehensive insurance coverage. 
                  From liability to property protection, we have the right solutions for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Get Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Speak with Agent
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Insurance Benefits</h3>
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

        {/* Coverage Types Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Essential business insurance coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Protect your business with comprehensive insurance solutions designed 
                to cover the unique risks and challenges of your industry.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coverages.map((coverage, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <coverage.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{coverage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{coverage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Business Packages */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Business insurance packages
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Business Package</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at $49/month</div>
                <p className="text-gray-600 mb-6">Essential coverage for small businesses and startups</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    General liability ($1M limit)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    Property coverage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    Business interruption
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    Cyber liability basics
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Get Small Business Quote
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth Business Package</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at $149/month</div>
                <p className="text-gray-600 mb-6">Comprehensive coverage for growing businesses</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    General liability ($2M limit)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    Enhanced property coverage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    Professional liability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    Employment practices liability
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Get Growth Business Quote
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Package</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Custom Pricing</div>
                <p className="text-gray-600 mb-6">Tailored coverage for large enterprises</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    High-limit liability coverage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    Multi-location coverage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    Directors & officers liability
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    Dedicated account manager
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Contact Insurance Specialist
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Coverages */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Additional insurance options
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {additionalCoverages.map((coverage, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <coverage.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{coverage.title}</h3>
                  <p className="text-gray-600">{coverage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Industry-specific solutions
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare & Medical</h3>
                <p className="text-gray-600 text-sm">Malpractice, HIPAA compliance, and specialized coverage</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Construction</h3>
                <p className="text-gray-600 text-sm">Builder's risk, equipment coverage, and contractor liability</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Technology</h3>
                <p className="text-gray-600 text-sm">Cyber liability, tech E&O, and intellectual property protection</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Retail & Hospitality</h3>
                <p className="text-gray-600 text-sm">Product liability, premises coverage, and business interruption</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Manufacturing</h3>
                <p className="text-gray-600 text-sm">Equipment breakdown, product recall, and environmental liability</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Services</h3>
                <p className="text-gray-600 text-sm">Professional liability, cyber coverage, and employment practices</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Protect your business today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't leave your business exposed to risk. Get a comprehensive insurance quote 
              and protect what you've worked so hard to build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Speak with Agent
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Free quotes with no obligation. Speak with licensed insurance professionals.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessInsurance;
