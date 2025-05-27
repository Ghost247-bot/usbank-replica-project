
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, PiggyBank, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SavingsAccounts = () => {
  const benefits = [
    "No minimum balance requirement",
    "High-yield interest rates",
    "Free online and mobile banking",
    "Automatic savings plans",
    "Goal-based savings tools",
    "FDIC insured up to $250,000"
  ];

  const savingsFeatures = [
    {
      icon: PiggyBank,
      title: "High interest rates",
      description: "Earn competitive rates on your savings with our high-yield accounts"
    },
    {
      icon: Shield,
      title: "FDIC protection",
      description: "Your deposits are protected up to $250,000 by FDIC insurance"
    },
    {
      icon: Smartphone,
      title: "Smart savings goals",
      description: "Set and track savings goals with our intuitive mobile app"
    },
    {
      icon: Users,
      title: "Family savings",
      description: "Open savings accounts for family members and track progress together"
    }
  ];

  const additionalBenefits = [
    {
      icon: DollarSign,
      title: "Automatic transfers",
      description: "Set up automatic transfers from checking to build savings effortlessly"
    },
    {
      icon: Clock,
      title: "Round-up savings",
      description: "Round up purchases and save the change automatically"
    },
    {
      icon: Star,
      title: "Bonus rewards",
      description: "Earn bonus interest for meeting monthly savings goals"
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
                  High-Yield Savings
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Smart Savings™ Account
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Build your future with our high-yield savings account. 
                  Earn competitive rates while keeping your money safe and accessible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Open Savings Account
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Calculate Earnings
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Account Benefits</h3>
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
                Savings that work for you
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our Smart Savings account is designed to help you reach your financial goals 
                with competitive rates and smart saving tools.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {savingsFeatures.map((feature, index) => (
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
              More ways to save smart
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

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Start saving smart today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Open your Smart Savings account and start earning competitive rates 
              on your deposits with no minimum balance required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Open Account Online
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Find a Branch
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Account opening subject to approval. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SavingsAccounts;
