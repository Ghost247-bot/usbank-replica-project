
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, TrendingUp, DollarSign, Building, Clock, Shield, Users, Calculator, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BusinessLoans = () => {
  const benefits = [
    "Competitive interest rates",
    "Flexible repayment terms",
    "Quick approval process",
    "No prepayment penalties",
    "Dedicated loan specialists",
    "Multiple loan options available"
  ];

  const loanTypes = [
    {
      icon: TrendingUp,
      title: "Term loans",
      description: "Fixed-rate loans for expansion, equipment, and working capital"
    },
    {
      icon: DollarSign,
      title: "SBA loans",
      description: "Government-backed loans with favorable terms and lower down payments"
    },
    {
      icon: Building,
      title: "Commercial real estate",
      description: "Financing for property purchases, construction, and development"
    },
    {
      icon: Clock,
      title: "Equipment financing",
      description: "Quick funding for business equipment and machinery needs"
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: "Credit protection",
      description: "Protect your business with credit insurance options"
    },
    {
      icon: Users,
      title: "Expert guidance",
      description: "Work with experienced loan specialists throughout the process"
    },
    {
      icon: Calculator,
      title: "Payment calculator",
      description: "Use our tools to estimate monthly payments and terms"
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
                  Business Growth Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Business Loans
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Fuel your business growth with flexible financing solutions tailored to your needs. 
                  From equipment purchases to expansion projects, we have the right loan for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Apply for Business Loan
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Calculate Payments
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Loan Benefits</h3>
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

        {/* Loan Types Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Business loan options for every need
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're looking to expand, purchase equipment, or manage cash flow, 
                we have financing solutions designed for your business goals.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {loanTypes.map((loan, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <loan.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{loan.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{loan.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Loan Details */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Flexible terms to fit your business
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Term Loan Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Loan amounts:</strong>
                      <span className="text-gray-600 ml-2">$10,000 to $5,000,000</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Terms:</strong>
                      <span className="text-gray-600 ml-2">1 to 10 years</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Fixed rates:</strong>
                      <span className="text-gray-600 ml-2">Starting at 5.99% APR</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Processing:</strong>
                      <span className="text-gray-600 ml-2">Decisions in 24-48 hours</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">SBA Loan Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Lower down payments:</strong>
                      <span className="text-gray-600 ml-2">As low as 10%</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Longer terms:</strong>
                      <span className="text-gray-600 ml-2">Up to 25 years</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Government backing:</strong>
                      <span className="text-gray-600 ml-2">Up to 90% guarantee</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Use cases:</strong>
                      <span className="text-gray-600 ml-2">Working capital, real estate, equipment</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Complete lending support
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to grow your business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Take the next step toward achieving your business goals with a loan 
              designed to help you succeed. Our team is here to guide you through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Apply Online Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Speak with a Specialist
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Loan approval subject to credit approval and verification. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessLoans;
