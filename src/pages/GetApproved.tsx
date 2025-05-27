
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, FileText, CreditCard, Home, Briefcase } from 'lucide-react';

const GetApproved = () => {
  const loanTypes = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Get pre-approved for your dream home",
      rate: "Starting at 3.2% APR",
      features: ["15-day approval process", "First-time buyer programs", "Competitive rates"]
    },
    {
      icon: CreditCard,
      title: "Personal Loans",
      description: "Quick approval for personal financing",
      rate: "Starting at 5.99% APR",
      features: ["Same-day decisions", "No prepayment penalties", "Flexible terms"]
    },
    {
      icon: Briefcase,
      title: "Business Loans",
      description: "Funding solutions for your business",
      rate: "Competitive rates",
      features: ["Fast approval process", "Various loan amounts", "Expert support"]
    }
  ];

  const approvalSteps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Complete our secure online application in minutes",
      icon: FileText
    },
    {
      step: 2,
      title: "Quick Review",
      description: "Our team reviews your application within 24 hours",
      icon: Clock
    },
    {
      step: 3,
      title: "Get Approved",
      description: "Receive your approval decision and loan terms",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get Approved Today</h1>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Fast, simple loan approvals with competitive rates. Start your application now and get a decision in as little as 24 hours.
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Start Application
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get approved in three simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {approvalSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Loan Type</h2>
            <p className="text-xl text-gray-600">We offer competitive rates and flexible terms for all your financing needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <loan.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{loan.title}</CardTitle>
                  <CardDescription>{loan.description}</CardDescription>
                  <div className="text-lg font-bold text-green-600 mt-2">{loan.rate}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {loan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Loan Services?</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Approval Process</h3>
                    <p className="text-gray-600">Get decisions in as little as 24 hours with our streamlined application process.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Rates</h3>
                    <p className="text-gray-600">We offer some of the most competitive rates in the market with transparent pricing.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Support</h3>
                    <p className="text-gray-600">Our loan specialists are here to guide you through every step of the process.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Terms</h3>
                    <p className="text-gray-600">Choose from a variety of loan terms and payment options that fit your budget.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ready to Get Started?</h3>
              <div className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                  Apply for Home Loan
                </Button>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 text-lg">
                  Apply for Personal Loan
                </Button>
                <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 text-lg">
                  Apply for Business Loan
                </Button>
              </div>
              <p className="text-center text-gray-600 text-sm mt-4">
                No application fees • Secure online process • Quick decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetApproved;
