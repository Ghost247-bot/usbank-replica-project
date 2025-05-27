
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Home, Briefcase, PiggyBank, TrendingUp, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCards = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Checking & Savings",
      description: "Start your financial journey with our award-winning accounts designed for everyday banking.",
      features: ["No monthly maintenance fees", "Mobile banking with instant alerts", "Free ATM access nationwide", "Overdraft protection"],
      cta: "Open Account",
      link: "/personal/checking-accounts",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      highlight: "Most Popular"
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Turn your homeownership dreams into reality with our competitive mortgage solutions.",
      features: ["Rates as low as 3.2% APR", "Fast 15-day approval process", "Expert loan officers", "First-time buyer programs"],
      cta: "Get Pre-approved",
      link: "/get-approved",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Briefcase,
      title: "Business Banking",
      description: "Comprehensive banking solutions tailored for businesses of every size and industry.",
      features: ["Business checking accounts", "Commercial lending solutions", "Advanced cash management", "Merchant payment services"],
      cta: "Learn More",
      link: "/business/business-checking",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: PiggyBank,
      title: "Personal Loans",
      description: "Access flexible funding options for life's important moments and unexpected expenses.",
      features: ["Fixed rates from 5.99% APR", "Flexible 24-84 month terms", "Same-day decisions", "No prepayment penalties"],
      cta: "Apply Now",
      link: "/get-approved",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: TrendingUp,
      title: "Investment Services",
      description: "Build long-term wealth with our comprehensive investment and retirement planning services.",
      features: ["Professional portfolio management", "401(k) and IRA options", "Financial planning consultations", "Low-cost investment options"],
      cta: "Start Investing",
      link: "/start-investing",
      color: "text-green-800",
      bgColor: "bg-green-50"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Protect what matters most with comprehensive coverage options for every stage of life.",
      features: ["Life and disability insurance", "Auto and home coverage", "Competitive rates", "Bundle and save discounts"],
      cta: "Get Quote",
      link: "/wealth/insurance-solutions",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-800 rounded-full mr-3"></span>
            Trusted by over 2 million customers
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Complete Banking
            <span className="block text-green-800 italic">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-green-800 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our comprehensive suite of financial products and services, designed to support your goals at every stage of life
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative h-full hover:shadow-xl transition-all duration-500 border border-gray-200 bg-white transform hover:-translate-y-1"
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute -top-3 -right-3 bg-green-800 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10">
                    {service.highlight}
                  </div>
                )}

                <CardHeader className="text-center pb-6 pt-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${service.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className={`h-10 w-10 ${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed font-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 px-8 pb-8">
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={service.link}>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 transition-all duration-300 hover:shadow-lg font-medium py-3 group">
                      <span className="mr-2">{service.cta}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white border border-gray-200 rounded-2xl p-16 shadow-lg">
          <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join millions of satisfied customers who trust us with their financial future. Open an account today and experience banking done right.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/get-started-today">
              <Button size="lg" className="bg-green-800 hover:bg-green-900 text-white font-medium px-10 py-4 text-lg transition-all duration-300 hover:shadow-lg">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button variant="outline" size="lg" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium px-10 py-4 text-lg transition-all duration-300">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
