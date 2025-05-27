
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, FileText, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const NotaryServices = () => {
  const benefits = [
    "Licensed notary professionals",
    "Convenient branch locations",
    "No appointment necessary",
    "Competitive service fees",
    "Multiple document types",
    "Weekday and Saturday hours"
  ];

  const notaryFeatures = [
    {
      icon: FileText,
      title: "Document notarization",
      description: "Notarize legal documents, contracts, and important paperwork"
    },
    {
      icon: Shield,
      title: "Legal compliance",
      description: "Ensure your documents meet all legal requirements and standards"
    },
    {
      icon: Smartphone,
      title: "Quick service",
      description: "Fast, professional notary services during regular business hours"
    },
    {
      icon: Users,
      title: "Expert staff",
      description: "Licensed notaries with experience in various document types"
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
                  Professional Service
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Notary Services
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Get your important documents notarized quickly and professionally at any 
                  of our convenient branch locations. Licensed notaries ready to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Find a Branch
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    View Services
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Notary Benefits</h3>
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

        {/* Key Features Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional notary services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our licensed notary professionals provide fast, reliable notarization 
                services for all your important documents and legal paperwork.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {notaryFeatures.map((feature, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Document Types */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Documents we can notarize
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Documents</h3>
                <p className="text-gray-600 mb-4">Wills, trusts, powers of attorney, and other legal paperwork.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Wills and trusts</li>
                  <li>• Powers of attorney</li>
                  <li>• Affidavits</li>
                  <li>• Court documents</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Real Estate</h3>
                <p className="text-gray-600 mb-4">Property deeds, mortgage documents, and real estate contracts.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Property deeds</li>
                  <li>• Mortgage documents</li>
                  <li>• Real estate contracts</li>
                  <li>• Title transfers</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Documents</h3>
                <p className="text-gray-600 mb-4">Contracts, agreements, and business-related paperwork.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Business contracts</li>
                  <li>• Partnership agreements</li>
                  <li>• Corporate documents</li>
                  <li>• Employment agreements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements & Fees */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Requirements and fees
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              What you need to know before visiting
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">What to Bring</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Valid government-issued photo ID (driver's license, passport, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Original document to be notarized (unsigned)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Payment for notary fee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Any additional parties who need to sign</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Service Fees</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Acknowledgment</span>
                    <span className="font-semibold">$10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Jurat (sworn statement)</span>
                    <span className="font-semibold">$10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Copy certification</span>
                    <span className="font-semibold">$10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Signature witnessing</span>
                    <span className="font-semibold">$10</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-gray-600">
                      * Fees may vary by state. Contact your local branch for specific pricing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Get your documents notarized today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Visit any of our convenient branch locations for fast, professional notary 
              services. No appointment necessary during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Find a Branch
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Branch Hours
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Valid ID required. Fees vary by state and document type.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotaryServices;
