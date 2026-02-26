
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, CreditCard, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CheckingAccounts = () => {
  const benefits = [
    "No monthly maintenance fee",
    "No minimum balance requirement",
    "Free online and mobile banking",
    "Free debit card",
    "Mobile check deposit",
    "Zelle® for quick transfers"
  ];

  const smartlyFeatures = [
    {
      icon: Star,
      title: "Earn rewards",
      description: "Get cash back on everyday purchases with participating merchants"
    },
    {
      icon: Shield,
      title: "Advanced security",
      description: "24/7 fraud monitoring and real-time alerts keep your money safe"
    },
    {
      icon: Smartphone,
      title: "Smart banking tools",
      description: "Track spending, set savings goals, and manage your money with our mobile app"
    },
    {
      icon: Users,
      title: "Personal banker support",
      description: "Get help when you need it with access to personal banking specialists"
    }
  ];

  const additionalBenefits = [
    {
      icon: CreditCard,
      title: "ATM access",
      description: "Use 40,000+ fee-free ATMs nationwide plus get reimbursed for other ATM fees"
    },
    {
      icon: Clock,
      title: "Early direct deposit",
      description: "Get your paycheck up to 2 days early with direct deposit"
    },
    {
      icon: DollarSign,
      title: "Overdraft solutions",
      description: "Multiple overdraft options to help you avoid fees and stay in control"
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
                  Most Popular Account
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Bank Smartly™ Checking
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  The checking account that works as hard as you do. No monthly fees, 
                  plus tools and rewards to help you bank smarter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Open Account
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Learn More
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
                Smart banking that puts you first
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bank Smartly Checking is designed with features that help you save time, 
                earn rewards, and stay in control of your finances.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartlyFeatures.map((feature, index) => (
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
              Even more ways to bank better
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

        {/* Comparison Table */}
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Compare checking accounts
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Find the account that's right for your banking needs
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="text-left p-6 font-semibold">Features</th>
                    <th className="text-center p-6 font-semibold">Bank Smartly™</th>
                    <th className="text-center p-6 font-semibold">Easy Checking</th>
                    <th className="text-center p-6 font-semibold">Student Checking</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-6 font-medium">Monthly maintenance fee</td>
                    <td className="p-6 text-center text-green-600 font-semibold">$0</td>
                    <td className="p-6 text-center">$6.95</td>
                    <td className="p-6 text-center text-green-600 font-semibold">$0</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-6 font-medium">Minimum balance</td>
                    <td className="p-6 text-center text-green-600 font-semibold">$0</td>
                    <td className="p-6 text-center">$1,500</td>
                    <td className="p-6 text-center text-green-600 font-semibold">$0</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-6 font-medium">ATM fee reimbursement</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-6 text-center text-gray-400">—</td>
                    <td className="p-6 text-center text-gray-400">—</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-6 font-medium">Rewards program</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-6 text-center text-gray-400">—</td>
                    <td className="p-6 text-center text-gray-400">—</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">Early direct deposit</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to bank smartly?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Open your Bank Smartly Checking account today and start enjoying 
              smarter banking with no monthly fees and great rewards.
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

        {/* Disclosure */}
        <section className="py-8 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs text-gray-600 space-y-2">
              <p>
                <strong>Important Information:</strong> Bank deposits are FDIC insured up to $250,000 per depositor, per bank. 
                Zelle and the Zelle related marks are wholly owned by Early Warning Services, LLC and are used herein under license.
              </p>
              <p>
                ATM fee reimbursements apply to fees charged by other financial institutions for ATM transactions. 
                Reimbursement does not include the ATM surcharge fee for transactions at non-bank ATM locations.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CheckingAccounts;
