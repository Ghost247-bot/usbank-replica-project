
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, User, Building, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const GetStarted = () => {
  const [selectedType, setSelectedType] = useState('personal');

  const accountTypes = [
    {
      id: 'personal',
      title: 'Personal Banking',
      description: 'Individual accounts and services for your personal financial needs',
      icon: User,
      features: ['Checking & Savings Accounts', 'Credit Cards', 'Personal Loans', 'Online Banking'],
      ctaText: 'Open Personal Account',
      ctaLink: '/create-account'
    },
    {
      id: 'business',
      title: 'Business Banking',
      description: 'Comprehensive banking solutions for your business',
      icon: Building,
      features: ['Business Checking', 'Business Credit Cards', 'Business Loans', 'Merchant Services'],
      ctaText: 'Open Business Account',
      ctaLink: '/create-account'
    },
    {
      id: 'wealth',
      title: 'Wealth Management',
      description: 'Investment and wealth building services',
      icon: TrendingUp,
      features: ['Investment Management', 'Retirement Planning', 'Financial Advisory', 'Private Banking'],
      ctaText: 'Schedule Consultation',
      ctaLink: '/contact-us'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Your Account Type',
      description: 'Select the banking solution that fits your needs'
    },
    {
      number: '02',
      title: 'Provide Your Information',
      description: 'Complete our secure application form'
    },
    {
      number: '03',
      title: 'Verify Your Identity',
      description: 'Quick verification process for security'
    },
    {
      number: '04',
      title: 'Start Banking',
      description: 'Access your new account and begin banking'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Get Started with Moonstone</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Choose the right banking solution for your needs and start your financial journey with us
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-100 text-green-700 text-2xl font-bold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Banking Solution</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {accountTypes.map((type) => (
                <div 
                  key={type.id}
                  className={`bg-white rounded-lg p-8 border-2 transition-all cursor-pointer ${
                    selectedType === type.id ? 'border-green-500 shadow-lg' : 'border-gray-200 hover:border-green-300'
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <type.icon className="h-12 w-12 text-green-700 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={type.ctaLink}>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      {type.ctaText}
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of customers who trust Moonstone for their banking needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create-account">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Open Account Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Contact Us First
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
