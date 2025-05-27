
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, Home, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Mortgages = () => {
  const benefits = [
    "Competitive interest rates",
    "No application fees",
    "Local loan specialists",
    "Digital application process",
    "Fast pre-approval decisions",
    "First-time buyer programs"
  ];

  const mortgageFeatures = [
    {
      icon: Home,
      title: "Home purchase loans",
      description: "Financing options for buying your dream home with competitive rates"
    },
    {
      icon: Shield,
      title: "Refinancing options",
      description: "Lower your monthly payments or access your home's equity"
    },
    {
      icon: Smartphone,
      title: "Digital tools",
      description: "Apply online and track your loan progress with our mobile app"
    },
    {
      icon: Users,
      title: "Expert guidance",
      description: "Local loan specialists to guide you through every step"
    }
  ];

  const additionalBenefits = [
    {
      icon: DollarSign,
      title: "First-time buyer programs",
      description: "Special programs with down payment assistance and reduced rates"
    },
    {
      icon: Clock,
      title: "Quick pre-approval",
      description: "Get pre-approved in minutes and shop with confidence"
    },
    {
      icon: Star,
      title: "Rate lock guarantee",
      description: "Lock in your rate for up to 90 days while you shop for homes"
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
                  Home Financing Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Your Home Loan Journey Starts Here
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Whether you're buying your first home or refinancing, we have 
                  competitive rates and expert guidance to help you achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Get Pre-Approved
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    View Rates
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Mortgage Benefits</h3>
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
                Home financing made simple
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From first-time buyers to seasoned investors, we have mortgage solutions 
                tailored to your unique needs and financial goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mortgageFeatures.map((feature, index) => (
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

        {/* Additional Benefits */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              More advantages for homeowners
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Types */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Choose your mortgage type
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Find the right loan program for your situation
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Conventional Loans</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 6.25%</div>
                <p className="text-gray-600 mb-6">Traditional financing with flexible terms</p>
                <ul className="space-y-2 mb-6">
                  <li>• Down payments as low as 3%</li>
                  <li>• 15 or 30-year terms available</li>
                  <li>• Competitive interest rates</li>
                  <li>• No mortgage insurance with 20% down</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Learn More
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">FHA Loans</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 6.125%</div>
                <p className="text-gray-600 mb-6">Government-backed loans for first-time buyers</p>
                <ul className="space-y-2 mb-6">
                  <li>• Down payments as low as 3.5%</li>
                  <li>• Lower credit score requirements</li>
                  <li>• Gift funds allowed for down payment</li>
                  <li>• Assumable loans available</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Learn More
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">VA Loans</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 6.0%</div>
                <p className="text-gray-600 mb-6">Exclusive benefits for military veterans</p>
                <ul className="space-y-2 mb-6">
                  <li>• No down payment required</li>
                  <li>• No private mortgage insurance</li>
                  <li>• Competitive interest rates</li>
                  <li>• No prepayment penalties</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to buy your home?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get pre-approved today and start shopping for your dream home with 
              confidence. Our expert loan specialists are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Get Pre-Approved
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Talk to a Specialist
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Subject to credit approval. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Mortgages;
