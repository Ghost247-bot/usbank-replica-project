
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WealthManagement = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Investment Management",
      description: "Professional portfolio management and investment strategies",
      icon: <TrendingUp className="h-8 w-8" />,
      route: "/wealth/investment-options"
    },
    {
      title: "Portfolio Options",
      description: "Diversified portfolio solutions tailored to your goals",
      icon: <Target className="h-8 w-8" />,
      route: "/wealth/portfolio-options"
    },
    {
      title: "Financial Planning",
      description: "Comprehensive financial planning and wealth strategies",
      icon: <Shield className="h-8 w-8" />,
      route: "/financial-planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wealth Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grow and protect your wealth with our comprehensive investment and financial planning services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  {service.icon}
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button 
                  onClick={() => navigate(service.route)}
                  className="w-full"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Wealth Journey?</h2>
            <p className="text-blue-100 mb-6">
              Schedule a consultation with our wealth management experts
            </p>
            <Button 
              variant="secondary"
              onClick={() => navigate('/schedule-consultation')}
            >
              Schedule Consultation
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default WealthManagement;
