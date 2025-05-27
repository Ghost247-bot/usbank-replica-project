
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, Phone } from 'lucide-react';

const ScheduleConsultation = () => {
  const consultationTypes = [
    {
      icon: User,
      title: "Personal Banking Consultation",
      description: "Discuss your personal banking needs with our experts",
      duration: "30 minutes",
      availability: "Mon-Fri 9AM-5PM"
    },
    {
      icon: Phone,
      title: "Investment Advisory",
      description: "Get professional investment advice tailored to your goals",
      duration: "45 minutes",
      availability: "Mon-Fri 8AM-6PM"
    },
    {
      icon: Calendar,
      title: "Business Banking Consultation",
      description: "Explore business banking solutions for your company",
      duration: "60 minutes",
      availability: "Mon-Fri 9AM-4PM"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Schedule a Consultation</h1>
          <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
            Meet with our financial experts to discuss your banking and investment needs. Get personalized advice to help you achieve your financial goals.
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Consultation Type</h2>
            <p className="text-xl text-gray-600">Select the consultation that best fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {consultationTypes.map((type, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{type.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{type.availability}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prefer to Call?</h3>
            <p className="text-gray-600 mb-6">
              You can also schedule a consultation by calling our customer service team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Call 1-800-BANK-NOW
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3">
                Request Callback
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScheduleConsultation;
