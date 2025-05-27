
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Heart } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from customer service to financial solutions"
    },
    {
      icon: Users,
      title: "Community",
      description: "We're committed to supporting the communities we serve and helping them thrive"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We embrace technology and innovation to provide better banking experiences"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with the highest ethical standards and transparency in all our dealings"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">About US Bank</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                For over 150 years, we've been helping individuals and businesses achieve their financial goals
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We exist to power human achievement by helping our customers, communities, employees and shareholders reach their full potential. We're committed to building lasting relationships based on trust, transparency, and exceptional service.
                </p>
                <p className="text-lg text-gray-600">
                  As one of the nation's largest banks, we have the resources and expertise to help you succeed, whether you're an individual looking to buy your first home or a business planning for expansion.
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Founded:</span>
                    <span>1863</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Customers:</span>
                    <span>70+ Million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Branches:</span>
                    <span>3,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Employees:</span>
                    <span>230,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Assets:</span>
                    <span>$650+ Billion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                  <value.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">1863</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Founded</h3>
                    <p className="text-gray-600">US Bank was founded during the Civil War era, establishing our roots in American financial history.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">1920s</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                    <p className="text-gray-600">Expanded nationwide during the economic boom, establishing branches across the country.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">1995</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Digital Innovation</h3>
                    <p className="text-gray-600">Launched online banking services, pioneering digital banking solutions for our customers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">2020</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modern Banking</h3>
                    <p className="text-gray-600">Embraced fintech innovations and mobile-first banking to serve customers in the digital age.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Bank With Us?</h2>
            <p className="text-xl mb-8">Join millions of customers who trust US Bank with their financial needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/find-locations">
                <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Find a Branch
                </button>
              </Link>
              <Link to="/contact-us">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
