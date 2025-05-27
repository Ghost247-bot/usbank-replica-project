
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Home, Briefcase, PiggyBank, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Checking & Savings",
      description: "Start your financial journey with our award-winning accounts designed for everyday banking.",
      features: ["No monthly maintenance fees", "Mobile banking with instant alerts", "Free ATM access nationwide", "Overdraft protection"],
      cta: "Open Account",
      color: "from-blue-500 to-blue-600",
      highlight: "Most Popular"
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Turn your homeownership dreams into reality with our competitive mortgage solutions.",
      features: ["Rates as low as 3.2% APR", "Fast 15-day approval process", "Expert loan officers", "First-time buyer programs"],
      cta: "Get Pre-approved",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Briefcase,
      title: "Business Banking",
      description: "Comprehensive banking solutions tailored for businesses of every size and industry.",
      features: ["Business checking accounts", "Commercial lending solutions", "Advanced cash management", "Merchant payment services"],
      cta: "Learn More",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: PiggyBank,
      title: "Personal Loans",
      description: "Access flexible funding options for life's important moments and unexpected expenses.",
      features: ["Fixed rates from 5.99% APR", "Flexible 24-84 month terms", "Same-day decisions", "No prepayment penalties"],
      cta: "Apply Now",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      title: "Investment Services",
      description: "Build long-term wealth with our comprehensive investment and retirement planning services.",
      features: ["Professional portfolio management", "401(k) and IRA options", "Financial planning consultations", "Low-cost investment options"],
      cta: "Start Investing",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Protect what matters most with comprehensive coverage options for every stage of life.",
      features: ["Life and disability insurance", "Auto and home coverage", "Competitive rates", "Bundle and save discounts"],
      cta: "Get Quote",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/20 to-blue-50/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Trusted by over 2 million customers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Complete Banking
            <span className="block text-red-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of financial products and services, designed to support your goals at every stage of life
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative h-full hover:shadow-2xl transition-all duration-700 border-0 shadow-lg transform hover:-translate-y-2 animate-fade-in bg-white/80 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {service.highlight}
                  </div>
                )}

                {/* Gradient Background */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color}`}></div>

                <CardHeader className="text-center pb-6 pt-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 px-6 pb-8">
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 group/feature">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover/feature:scale-110" />
                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white border-0 transform transition-all duration-300 hover:scale-105 group-hover:shadow-xl font-semibold py-3`}>
                    <span className="mr-2">{service.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 shadow-2xl animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who trust us with their financial future. Open an account today and experience banking done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Open Account Today
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4 text-lg bg-transparent transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
