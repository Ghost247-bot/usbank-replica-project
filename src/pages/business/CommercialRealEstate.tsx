
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Building, MapPin, DollarSign, TrendingUp, Shield, Clock, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CommercialRealEstate = () => {
  const benefits = [
    "Competitive interest rates",
    "Flexible loan terms up to 25 years",
    "Multiple property types eligible",
    "Expert commercial lending team",
    "Fast pre-approval process",
    "Relationship banking benefits"
  ];

  const services = [
    {
      icon: Building,
      title: "Property purchase",
      description: "Financing for commercial property acquisitions and business real estate"
    },
    {
      icon: MapPin,
      title: "Construction loans",
      description: "Funding for new construction projects and ground-up development"
    },
    {
      icon: DollarSign,
      title: "Refinancing",
      description: "Refinance existing commercial mortgages to improve terms or access equity"
    },
    {
      icon: TrendingUp,
      title: "Investment properties",
      description: "Loans for income-producing real estate and investment properties"
    }
  ];

  const propertyTypes = [
    {
      icon: Building,
      title: "Office buildings",
      description: "Professional office spaces, medical buildings, and corporate headquarters"
    },
    {
      icon: Home,
      title: "Retail properties",
      description: "Shopping centers, restaurants, stores, and retail developments"
    },
    {
      icon: Shield,
      title: "Industrial facilities",
      description: "Warehouses, manufacturing facilities, and distribution centers"
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
                  Commercial Real Estate Lending
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Commercial Real Estate
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Property financing solutions for your business real estate needs. 
                  From office buildings to industrial facilities, we have the expertise to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Calculate Payments
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Lending Benefits</h3>
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

        {/* Services Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Commercial real estate services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced commercial lending team provides comprehensive financing 
                solutions for all your commercial real estate needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Products */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Commercial mortgage products
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Conventional Commercial Mortgage</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 6.25% APR</div>
                <p className="text-gray-600 mb-6">Traditional financing for owner-occupied and investment properties</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Loan amounts:</strong>
                      <span className="text-gray-600 ml-2">$500,000 to $20,000,000</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Terms:</strong>
                      <span className="text-gray-600 ml-2">10 to 25 years</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Down payment:</strong>
                      <span className="text-gray-600 ml-2">20-25% typical</span>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for Conventional Loan
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">SBA 504 Loan Program</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">10% Down Payment</div>
                <p className="text-gray-600 mb-6">Government-backed financing for owner-occupied commercial properties</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Loan amounts:</strong>
                      <span className="text-gray-600 ml-2">Up to $5,500,000</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Terms:</strong>
                      <span className="text-gray-600 ml-2">20-25 years</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Requirements:</strong>
                      <span className="text-gray-600 ml-2">Owner-occupied, 51% or more</span>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for SBA 504 Loan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Property types we finance
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {propertyTypes.map((property, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <property.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{property.title}</h3>
                  <p className="text-gray-600">{property.description}</p>
                </div>
              ))}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Property Types</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hotels and hospitality properties</li>
                  <li>• Multi-family apartment buildings</li>
                  <li>• Self-storage facilities</li>
                  <li>• Mixed-use developments</li>
                  <li>• Special purpose properties</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Construction & Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ground-up construction</li>
                  <li>• Major renovations</li>
                  <li>• Build-to-suit projects</li>
                  <li>• Land acquisition and development</li>
                  <li>• Construction-to-permanent loans</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our lending process
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Consultation</h3>
                <p className="text-gray-600 text-sm">Discuss your financing needs with our commercial lending team</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-Approval</h3>
                <p className="text-gray-600 text-sm">Get pre-approved to strengthen your position</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Underwriting</h3>
                <p className="text-gray-600 text-sm">Comprehensive review of your application and property</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Closing</h3>
                <p className="text-gray-600 text-sm">Complete the transaction and receive your funding</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to finance your commercial property?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our experienced commercial lending team is ready to help you find the right 
              financing solution for your commercial real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Get Pre-Approved
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Speak with a Lender
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Loan approval subject to credit approval and property evaluation. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommercialRealEstate;
