
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, X, DollarSign, CreditCard, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompareAccountOptions = () => {
  const accountTypes = [
    {
      icon: CreditCard,
      name: "Basic Checking",
      monthlyFee: "$0",
      minimumBalance: "$100",
      features: [
        "Free online and mobile banking",
        "Free debit card",
        "Direct deposit",
        "Mobile check deposit",
        "ATM access"
      ],
      limitations: [
        "Limited transactions",
        "No interest earned"
      ],
      recommended: false
    },
    {
      icon: DollarSign,
      name: "Premium Checking",
      monthlyFee: "$15",
      minimumBalance: "$2,500",
      features: [
        "All Basic Checking features",
        "Unlimited transactions",
        "Interest earning",
        "Free checks",
        "Priority customer service",
        "Overdraft protection"
      ],
      limitations: [
        "Higher minimum balance"
      ],
      recommended: true
    },
    {
      icon: PiggyBank,
      name: "High-Yield Savings",
      monthlyFee: "$0",
      minimumBalance: "$500",
      features: [
        "Competitive interest rate",
        "Online and mobile banking",
        "Automatic savings plans",
        "No monthly fees",
        "FDIC insured"
      ],
      limitations: [
        "Limited monthly withdrawals",
        "No debit card"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Compare Account Options</h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Find the perfect account that fits your financial needs and lifestyle. Compare features, fees, and benefits.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Account Comparison</h2>
            <p className="text-xl text-gray-600">Choose the account that's right for you</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {accountTypes.map((account, index) => (
              <Card key={index} className={`relative shadow-lg hover:shadow-xl transition-shadow duration-300 ${account.recommended ? 'ring-2 ring-blue-600' : ''}`}>
                {account.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <account.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{account.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-blue-600">{account.monthlyFee}<span className="text-sm font-normal text-gray-500">/month</span></CardDescription>
                  <p className="text-gray-600">Minimum Balance: {account.minimumBalance}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Features Included:</h4>
                      <ul className="space-y-2">
                        {account.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {account.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                        <ul className="space-y-2">
                          {account.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="flex items-start space-x-2">
                              <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <Link to="/create-account">
                    <Button className={`w-full ${account.recommended ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'} text-white`}>
                      Choose This Account
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6">
              Our banking experts can help you find the perfect account for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schedule-consultation">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompareAccountOptions;
