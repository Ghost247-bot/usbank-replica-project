
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Shield, Smartphone, BookOpen, Users, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FinancialEducation = () => {
  const benefits = [
    "Free educational resources",
    "Interactive learning tools",
    "Expert-led webinars",
    "Personal finance guides",
    "Budget planning tools",
    "Investment education"
  ];

  const educationFeatures = [
    {
      icon: BookOpen,
      title: "Learning center",
      description: "Access hundreds of articles, guides, and videos on financial topics"
    },
    {
      icon: Shield,
      title: "Financial planning",
      description: "Learn how to create budgets, save money, and plan for the future"
    },
    {
      icon: Smartphone,
      title: "Interactive tools",
      description: "Use calculators and planning tools to make informed financial decisions"
    },
    {
      icon: Users,
      title: "Expert guidance",
      description: "Get advice from financial professionals and certified advisors"
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
                  Free Resources
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Financial Education Center
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Empower yourself with financial knowledge. Access free educational resources, 
                  tools, and expert guidance to make smarter financial decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Start Learning
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Browse Resources
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Education Benefits</h3>
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
                Learn at your own pace
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive financial education resources help you build confidence 
                and make informed decisions about your money and financial future.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {educationFeatures.map((feature, index) => (
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

        {/* Resource Categories */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Explore financial topics
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <DollarSign className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Budgeting & Saving</h3>
                <p className="text-gray-600 mb-4">Learn how to create budgets, track expenses, and build emergency funds.</p>
                <Button variant="outline" className="w-full">Explore Budgeting</Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Clock className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investing Basics</h3>
                <p className="text-gray-600 mb-4">Understand investment fundamentals and build long-term wealth.</p>
                <Button variant="outline" className="w-full">Learn Investing</Button>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Retirement Planning</h3>
                <p className="text-gray-600 mb-4">Plan for your future and ensure a comfortable retirement.</p>
                <Button variant="outline" className="w-full">Plan Retirement</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Start your financial journey</h2>
            <p className="text-xl text-blue-100 mb-8">
              Take control of your financial future with our free educational resources 
              and expert guidance. Build the knowledge you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Access Resources
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              All educational resources are provided free of charge.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinancialEducation;
