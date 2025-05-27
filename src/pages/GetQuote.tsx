
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Car, Home, Heart, Briefcase, Umbrella } from 'lucide-react';

const GetQuote = () => {
  const insuranceTypes = [
    {
      icon: Car,
      title: "Auto Insurance",
      description: "Comprehensive coverage for your vehicle",
      features: ["Liability coverage", "Collision & comprehensive", "Roadside assistance"],
      startingRate: "$89/month"
    },
    {
      icon: Home,
      title: "Home Insurance",
      description: "Protect your home and belongings",
      features: ["Dwelling coverage", "Personal property", "Liability protection"],
      startingRate: "$125/month"
    },
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Financial security for your loved ones",
      features: ["Term life options", "Whole life policies", "Flexible premiums"],
      startingRate: "$45/month"
    },
    {
      icon: Briefcase,
      title: "Business Insurance",
      description: "Comprehensive business protection",
      features: ["General liability", "Property coverage", "Workers' compensation"],
      startingRate: "$199/month"
    },
    {
      icon: Shield,
      title: "Disability Insurance",
      description: "Income protection if you can't work",
      features: ["Short-term disability", "Long-term disability", "Flexible benefits"],
      startingRate: "$67/month"
    },
    {
      icon: Umbrella,
      title: "Umbrella Insurance",
      description: "Extra liability protection",
      features: ["Additional coverage", "Asset protection", "Legal defense"],
      startingRate: "$25/month"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get Your Insurance Quote</h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Protect what matters most with our comprehensive insurance solutions. Get competitive quotes in minutes.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Quote Process
          </Button>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance Options</h2>
            <p className="text-xl text-gray-600">Choose the coverage that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <insurance.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{insurance.title}</CardTitle>
                  <CardDescription>{insurance.description}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600 mt-2">
                    Starting at {insurance.startingRate}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {insurance.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Quote Process</h2>
            <p className="text-xl text-gray-600">Get your personalized quote in just a few steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Tell Us About You</h3>
              <p className="text-gray-600">Provide basic information about yourself and what you want to insure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Coverage</h3>
              <p className="text-gray-600">Select the coverage options that best fit your needs and budget</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Quote</h3>
              <p className="text-gray-600">Receive your personalized quote and speak with an agent if needed</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Get competitive quotes on all types of insurance coverage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Start Quote Now
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg">
                Speak with Agent
              </Button>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Quick quotes • No obligation • Expert guidance available
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;
