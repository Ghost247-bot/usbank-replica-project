
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Shield, Users, PiggyBank, Crown, Calculator } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WealthManagement = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Investment Management',
      description: 'Professional portfolio management with personalized investment strategies',
      icon: TrendingUp,
      route: '/wealth/investment-options'
    },
    {
      title: 'Portfolio Analysis',
      description: 'Comprehensive analysis of your investment portfolio',
      icon: Calculator,
      route: '/wealth/portfolio-options'
    },
    {
      title: 'Retirement Planning',
      description: 'Plan for a secure financial future with our retirement services',
      icon: PiggyBank,
      route: '/wealth/retirement-planning'
    },
    {
      title: 'Private Banking',
      description: 'Exclusive banking services for high net worth individuals',
      icon: Crown,
      route: '/wealth/private-banking'
    },
    {
      title: 'Trust Services',
      description: 'Protect and transfer your wealth with professional trust services',
      icon: Shield,
      route: '/wealth/trust-services'
    },
    {
      title: 'Financial Planning',
      description: 'Comprehensive financial planning for all life stages',
      icon: Users,
      route: '/wealth/financial-planning'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wealth Management Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive wealth management solutions designed to help you grow, protect, and transfer your wealth across generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow cursor-pointer group"
              onClick={() => navigate(service.route)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-700" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Wealth Journey?
          </h2>
          <p className="text-gray-600 mb-6">
            Schedule a consultation with our wealth management experts to discuss your financial goals.
          </p>
          <Button 
            onClick={() => navigate('/schedule-consultation')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Schedule Consultation
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WealthManagement;
