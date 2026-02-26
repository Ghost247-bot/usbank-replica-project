
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Star, Wrench, TrendingUp, Clock, Shield, DollarSign, Truck, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EquipmentFinancing = () => {
  const benefits = [
    "100% financing available",
    "Preserve working capital",
    "Fixed monthly payments",
    "Tax advantages available",
    "Quick approval decisions",
    "Flexible terms up to 7 years"
  ];

  const features = [
    {
      icon: Wrench,
      title: "Equipment loans",
      description: "Finance machinery, vehicles, and essential business equipment"
    },
    {
      icon: TrendingUp,
      title: "Preserve cash flow",
      description: "Keep working capital available for daily operations and growth"
    },
    {
      icon: Clock,
      title: "Quick approval",
      description: "Fast processing for urgent equipment needs with decisions in 24-48 hours"
    },
    {
      icon: Shield,
      title: "Competitive rates",
      description: "Low rates starting at 5.99% APR with flexible repayment terms"
    }
  ];

  const equipmentTypes = [
    {
      icon: Truck,
      title: "Vehicles & transportation",
      description: "Commercial vehicles, delivery trucks, construction equipment, and fleet vehicles"
    },
    {
      icon: Building,
      title: "Manufacturing equipment",
      description: "Production machinery, industrial equipment, and specialized manufacturing tools"
    },
    {
      icon: DollarSign,
      title: "Technology & office",
      description: "Computers, software, office furniture, and technology infrastructure"
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
                  Business Equipment Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  Equipment Financing
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Finance business equipment and machinery with competitive rates. 
                  Get the tools you need to grow while preserving your working capital.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                    Calculate Payments
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Financing Benefits</h3>
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

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Equipment financing benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our equipment financing solutions are designed to help your business 
                acquire the tools and machinery needed for growth and success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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

        {/* Financing Options */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Flexible financing options
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Equipment Loan</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Starting at 5.99% APR</div>
                <p className="text-gray-600 mb-6">Traditional financing with fixed monthly payments</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Loan amounts:</strong>
                      <span className="text-gray-600 ml-2">$10,000 to $5,000,000</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Terms:</strong>
                      <span className="text-gray-600 ml-2">12 months to 7 years</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Down payment:</strong>
                      <span className="text-gray-600 ml-2">0% to 20% depending on equipment</span>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for Equipment Loan
                </Button>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Equipment Lease</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">Lower Monthly Payments</div>
                <p className="text-gray-600 mb-6">Lease equipment with option to purchase or upgrade</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Lease amounts:</strong>
                      <span className="text-gray-600 ml-2">$5,000 to $2,000,000</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Terms:</strong>
                      <span className="text-gray-600 ml-2">24 months to 5 years</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Benefits:</strong>
                      <span className="text-gray-600 ml-2">Tax advantages and upgrade options</span>
                    </div>
                  </li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
                  Apply for Equipment Lease
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Types */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Equipment we finance
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {equipmentTypes.map((equipment, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <equipment.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{equipment.title}</h3>
                  <p className="text-gray-600">{equipment.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Don't see your equipment type listed? We finance a wide variety of business equipment.
              </p>
              <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                View All Equipment Types
              </Button>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Simple application process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Apply Online</h3>
                <p className="text-gray-600 text-sm">Submit your equipment financing application</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Review</h3>
                <p className="text-gray-600 text-sm">Get a decision within 24-48 hours</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">Provide equipment quotes and business documents</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Get Equipment</h3>
                <p className="text-gray-600 text-sm">Receive funding and acquire your equipment</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to finance your equipment?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the equipment your business needs today with flexible financing options 
              designed to preserve your working capital and support your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg">
                Apply for Financing
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Speak with a Specialist
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              Financing approval subject to credit review. Terms and conditions apply.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EquipmentFinancing;
