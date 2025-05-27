
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Home, Briefcase, PiggyBank, TrendingUp, Shield } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Checking & Savings",
      description: "Manage your daily finances with our comprehensive checking and high-yield savings accounts.",
      features: ["No monthly fees", "Mobile banking", "ATM access nationwide"],
      cta: "Open Account"
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Find the perfect mortgage solution for your dream home with competitive rates and expert guidance.",
      features: ["Low rates", "Fast approval", "Expert guidance"],
      cta: "Get Pre-approved"
    },
    {
      icon: Briefcase,
      title: "Business Banking",
      description: "Grow your business with tailored banking solutions, from small business to commercial enterprises.",
      features: ["Business accounts", "Commercial loans", "Cash management"],
      cta: "Learn More"
    },
    {
      icon: PiggyBank,
      title: "Personal Loans",
      description: "Access funds for major purchases, debt consolidation, or unexpected expenses with flexible terms.",
      features: ["Fixed rates", "Flexible terms", "Quick decisions"],
      cta: "Apply Now"
    },
    {
      icon: TrendingUp,
      title: "Investment Services",
      description: "Build wealth for the future with our comprehensive investment and retirement planning services.",
      features: ["Portfolio management", "Retirement planning", "Expert advisors"],
      cta: "Start Investing"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Protect what matters most with comprehensive insurance coverage for life, auto, and home.",
      features: ["Life insurance", "Auto coverage", "Home protection"],
      cta: "Get Quote"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Banking Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our full range of financial products and services designed to meet your unique needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
