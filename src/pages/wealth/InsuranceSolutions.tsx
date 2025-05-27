
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, Heart, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const InsuranceSolutions = () => {
  const benefits = [
    "Comprehensive coverage options",
    "Competitive premium rates",
    "Expert insurance guidance",
    "Claims support services",
    "Bundled policy discounts",
    "24/7 customer service"
  ];

  const insuranceFeatures = [
    {
      icon: Heart,
      title: "Life insurance",
      description: "Protect your family's financial future with term and permanent life insurance"
    },
    {
      icon: Shield,
      title: "Disability insurance",
      description: "Safeguard your income with short-term and long-term disability coverage"
    },
    {
      icon: Smartphone,
      title: "Digital management",
      description: "Manage policies, file claims, and track coverage through our online platform"
    },
    {
      icon: Users,
      title: "Family protection",
      description: "Comprehensive insurance solutions for all your family's needs"
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
                  Protection Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Insurance Solutions for Life
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Protect what matters most with our comprehensive insurance solutions. 
                  From life and disability to property coverage, we've got you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Get Insurance Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    View Coverage Options
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

        {/* Key Features Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Complete protection for your future
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our insurance solutions provide comprehensive protection for you and your 
                family, ensuring financial security in life's unexpected moments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {insuranceFeatures.map((feature, index) => (
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

        {/* Insurance Types */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Insurance coverage options
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Find the right insurance protection for your needs
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Life Insurance</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Term & Permanent</div>
                <p className="text-gray-600 mb-6">Protect your family's financial future</p>
                <ul className="space-y-2 mb-6">
                  <li>• Term life insurance</li>
                  <li>• Whole life insurance</li>
                  <li>• Universal life insurance</li>
                  <li>• Competitive rates</li>
                  <li>• Flexible coverage amounts</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Get Life Insurance Quote
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Popular Choice</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Disability Insurance</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Income Protection</div>
                <p className="text-gray-600 mb-6">Protect your earning ability</p>
                <ul className="space-y-2 mb-6">
                  <li>• Short-term disability</li>
                  <li>• Long-term disability</li>
                  <li>• Income replacement up to 70%</li>
                  <li>• Own-occupation coverage</li>
                  <li>• Group and individual options</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Get Disability Quote
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Long-Term Care</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Future Care</div>
                <p className="text-gray-600 mb-6">Plan for long-term care needs</p>
                <ul className="space-y-2 mb-6">
                  <li>• Nursing home care</li>
                  <li>• Home health care</li>
                  <li>• Adult day care</li>
                  <li>• Flexible benefit periods</li>
                  <li>• Inflation protection</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Get LTC Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Protect your future today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't wait to protect what matters most. Get comprehensive insurance 
              coverage with competitive rates and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Get Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Talk to Agent
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Coverage subject to underwriting approval. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsuranceSolutions;
