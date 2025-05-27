
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, Car, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AutoLoans = () => {
  const benefits = [
    "Competitive auto loan rates",
    "New and used car financing",
    "Quick pre-approval process",
    "Flexible payment terms",
    "No application fees",
    "Online account management"
  ];

  const autoFeatures = [
    {
      icon: Car,
      title: "New & used vehicles",
      description: "Finance new cars, used cars, trucks, SUVs, and motorcycles"
    },
    {
      icon: Shield,
      title: "Competitive rates",
      description: "Get low rates based on your credit and choose terms up to 84 months"
    },
    {
      icon: Smartphone,
      title: "Easy application",
      description: "Apply online, get pre-approved, and shop with confidence"
    },
    {
      icon: Users,
      title: "Expert support",
      description: "Our auto loan specialists help you every step of the way"
    }
  ];

  const additionalBenefits = [
    {
      icon: DollarSign,
      title: "No down payment",
      description: "Finance up to 100% of the vehicle's value with approved credit"
    },
    {
      icon: Clock,
      title: "Fast approval",
      description: "Get approved in minutes and drive away today"
    },
    {
      icon: Star,
      title: "Rate discounts",
      description: "Get additional rate discounts for automatic payments"
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
                  Vehicle Financing
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Drive Your Dreams Home
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Whether you're buying new or used, we have competitive auto loan rates 
                  and flexible terms to get you behind the wheel.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Auto Loan Benefits</h3>
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
                Auto financing made simple
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From compact cars to luxury vehicles, we offer competitive rates and 
                flexible terms to help you drive away in your ideal vehicle.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {autoFeatures.map((feature, index) => (
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
              More advantages for car buyers
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
              Choose your vehicle type
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Special rates for different vehicle types
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">New Vehicles</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 4.99%</div>
                <p className="text-gray-600 mb-6">Latest models with full warranty</p>
                <ul className="space-y-2 mb-6">
                  <li>• Rates as low as 4.99% APR</li>
                  <li>• Terms up to 84 months</li>
                  <li>• 100% financing available</li>
                  <li>• New car incentives</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Get Pre-Approved
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Popular Choice</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Used Vehicles</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 5.49%</div>
                <p className="text-gray-600 mb-6">Quality pre-owned vehicles</p>
                <ul className="space-y-2 mb-6">
                  <li>• Rates as low as 5.49% APR</li>
                  <li>• Terms up to 72 months</li>
                  <li>• Vehicles up to 8 years old</li>
                  <li>• Extended warranty options</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Get Pre-Approved
                </Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold mb-4">Refinancing</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 5.25%</div>
                <p className="text-gray-600 mb-6">Lower your current payment</p>
                <ul className="space-y-2 mb-6">
                  <li>• Rates as low as 5.25% APR</li>
                  <li>• Lower monthly payments</li>
                  <li>• Cash out refinancing</li>
                  <li>• No prepayment penalties</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Refinance Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to drive your new car?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get pre-approved for an auto loan today and shop with confidence. 
              Our competitive rates and flexible terms make car buying easy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Get Pre-Approved
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Calculate Payment
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

export default AutoLoans;
