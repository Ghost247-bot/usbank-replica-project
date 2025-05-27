
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
      cta: "Open Account",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Home,
      title: "Home Loans",
      description: "Find the perfect mortgage solution for your dream home with competitive rates and expert guidance.",
      features: ["Low rates", "Fast approval", "Expert guidance"],
      cta: "Get Pre-approved",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Briefcase,
      title: "Business Banking",
      description: "Grow your business with tailored banking solutions, from small business to commercial enterprises.",
      features: ["Business accounts", "Commercial loans", "Cash management"],
      cta: "Learn More",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: PiggyBank,
      title: "Personal Loans",
      description: "Access funds for major purchases, debt consolidation, or unexpected expenses with flexible terms.",
      features: ["Fixed rates", "Flexible terms", "Quick decisions"],
      cta: "Apply Now",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: TrendingUp,
      title: "Investment Services",
      description: "Build wealth for the future with our comprehensive investment and retirement planning services.",
      features: ["Portfolio management", "Retirement planning", "Expert advisors"],
      cta: "Start Investing",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Protect what matters most with comprehensive insurance coverage for life, auto, and home.",
      features: ["Life insurance", "Auto coverage", "Home protection"],
      cta: "Get Quote",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 transform transition-all duration-700 hover:scale-105">
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
              <Card 
                key={index} 
                className="h-full hover:shadow-lg transition-all duration-500 border-0 shadow-md transform hover:scale-105 group animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 transform transition-all duration-300 hover:translate-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
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
