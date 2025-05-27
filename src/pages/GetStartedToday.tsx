
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, FileText, CreditCard, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStartedToday = () => {
  const steps = [
    {
      step: 1,
      title: "Choose Your Account",
      description: "Select from our range of checking, savings, and investment accounts",
      icon: CreditCard,
      time: "2 minutes"
    },
    {
      step: 2,
      title: "Complete Application",
      description: "Fill out our secure online application with your personal information",
      icon: FileText,
      time: "5 minutes"
    },
    {
      step: 3,
      title: "Verify Identity",
      description: "Quick identity verification using government-issued ID",
      icon: CheckCircle,
      time: "1 minute"
    },
    {
      step: 4,
      title: "Start Banking",
      description: "Make your first deposit and begin using your new account",
      icon: Clock,
      time: "Instant"
    }
  ];

  const accountTypes = [
    {
      title: "Personal Checking",
      description: "Perfect for everyday banking needs with no monthly fees",
      features: ["No minimum balance", "Free mobile banking", "Unlimited transactions"],
      popular: true
    },
    {
      title: "High-Yield Savings",
      description: "Grow your money with competitive interest rates",
      features: ["2.5% APY", "No monthly fees", "FDIC insured up to $250,000"],
      popular: false
    },
    {
      title: "Investment Account",
      description: "Start building long-term wealth with our investment services",
      features: ["Professional management", "Diversified portfolios", "Low fees"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get Started Today</h1>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Open your account in minutes and start enjoying the benefits of modern banking. 
            It's fast, secure, and completely online.
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Open Account Now
          </Button>
          <p className="text-green-200 text-sm mt-4">No fees • No minimum balance • FDIC insured</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Your Account in 4 Simple Steps</h2>
            <p className="text-xl text-gray-600">The entire process takes less than 10 minutes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <span className="text-green-600 font-medium text-sm">{step.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Account Type</h2>
            <p className="text-xl text-gray-600">Find the perfect account for your financial needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {accountTypes.map((account, index) => (
              <Card key={index} className={`relative shadow-lg hover:shadow-xl transition-shadow duration-300 ${account.popular ? 'ring-2 ring-green-600' : ''}`}>
                {account.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-semibold">{account.title}</CardTitle>
                  <CardDescription>{account.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {account.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${account.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`}>
                    Open This Account
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Award-Winning Service</h3>
              <p className="text-gray-600">Recognized for excellence in customer service and innovation</p>
            </div>
            <div>
              <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2+ Million Customers</h3>
              <p className="text-gray-600">Trusted by millions of customers across the country</p>
            </div>
            <div>
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">FDIC Insured</h3>
              <p className="text-gray-600">Your deposits are protected up to $250,000 by FDIC insurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-green-100 mb-10">
            Don't wait – start your journey to better banking today. It only takes a few minutes to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/personal/checking-accounts">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-10 py-4 text-lg font-semibold">
                Open Checking Account
              </Button>
            </Link>
            <Link to="/personal/savings-accounts">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 px-10 py-4 text-lg font-semibold">
                Start Saving Today
              </Button>
            </Link>
          </div>
          <p className="text-green-200 text-sm mt-6">
            Questions? Call us at 1-800-BANKING or chat with us online
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStartedToday;
