
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const LearnMore = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Bank-level encryption and multi-factor authentication protect your accounts 24/7'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Dedicated relationship managers and local branch support when you need it'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in customer service and innovative banking solutions'
    },
    {
      icon: Globe,
      title: 'Digital Banking',
      description: 'Access your accounts anywhere with our mobile app and online banking platform'
    }
  ];

  const benefits = [
    'No monthly maintenance fees on qualifying accounts',
    'Free online and mobile banking',
    'Access to over 40,000 ATMs nationwide',
    '24/7 customer support',
    'Competitive interest rates',
    'Advanced fraud protection',
    'Mobile check deposit',
    'Bill pay and money transfer services'
  ];

  const stats = [
    { number: '150+', label: 'Years of Trust' },
    { number: '2M+', label: 'Satisfied Customers' },
    { number: '500+', label: 'Branch Locations' },
    { number: '$50B+', label: 'Assets Under Management' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Why Choose Moonstone?</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Discover what makes us different and how we can help you achieve your financial goals 
                with personalized banking solutions built for your success.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                  <feature.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Complete Banking Solutions</h2>
                <p className="text-lg text-gray-600 mb-8">
                  From everyday checking to complex wealth management, we offer comprehensive 
                  financial services designed to grow with you throughout every stage of life.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Ready to Experience the Difference?</h3>
                <p className="text-gray-700 mb-6">
                  Join millions of customers who trust Moonstone for their banking needs. 
                  Get started today with our simple account opening process.
                </p>
                <div className="space-y-4">
                  <Link to="/get-started">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Get Started Today
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact-us">
                    <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
                      Talk to an Expert
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
            <p className="text-xl mb-8">
              We're committed to providing exceptional banking experiences, innovative solutions, 
              and the personal attention you deserve. Your financial success is our success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about-us">
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                  Learn About Our History
                </Button>
              </Link>
              <Link to="/security-center">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                  Security & Privacy
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

export default LearnMore;
