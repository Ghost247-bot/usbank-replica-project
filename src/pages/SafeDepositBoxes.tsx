
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Lock, Shield, Key, Clock, CreditCard, MapPin, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SafeDepositBoxes = () => {
  const [selectedSize, setSelectedSize] = useState('small');

  const features = [
    {
      icon: Lock,
      title: "Secure Storage",
      description: "Bank-grade security for your valuable items"
    },
    {
      icon: Shield,
      title: "Insurance Protection",
      description: "Additional insurance options available"
    },
    {
      icon: Key,
      title: "Private Access",
      description: "Only you have access to your safe deposit box"
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Access during extended banking hours"
    }
  ];

  const boxSizes = [
    {
      size: "Small",
      dimensions: "3\" x 5\" x 24\"",
      price: "$35/year",
      ideal: "Documents, jewelry, coins",
      id: "small"
    },
    {
      size: "Medium",
      dimensions: "5\" x 5\" x 24\"",
      price: "$55/year",
      ideal: "Important papers, small valuables",
      id: "medium"
    },
    {
      size: "Large",
      dimensions: "10\" x 10\" x 24\"",
      price: "$85/year",
      ideal: "Large documents, artwork, collectibles",
      id: "large"
    },
    {
      size: "Extra Large",
      dimensions: "10\" x 15\" x 24\"",
      price: "$125/year",
      ideal: "Business records, large items",
      id: "xlarge"
    }
  ];

  const whatToStore = [
    { category: "Documents", items: ["Birth certificates", "Passports", "Wills", "Property deeds", "Insurance policies"] },
    { category: "Valuables", items: ["Jewelry", "Coins", "Stamps", "Small electronics", "USB drives"] },
    { category: "Sentimental", items: ["Family photos", "Letters", "Heirlooms", "Military medals", "Awards"] },
    { category: "Business", items: ["Contracts", "Stock certificates", "Business records", "Backup data", "Patents"] }
  ];

  const securityFeatures = [
    "24/7 surveillance system",
    "Dual key access required",
    "Biometric access controls",
    "Fire-resistant vault construction",
    "Flood protection systems",
    "Armed security personnel"
  ];

  const faqs = [
    {
      question: "Who can access my safe deposit box?",
      answer: "Only you and any authorized signers can access your box. We require valid ID and signature verification for every visit."
    },
    {
      question: "What happens if I lose my key?",
      answer: "If you lose your key, we can drill the box open, but you'll be charged for the drilling and lock replacement costs."
    },
    {
      question: "Can I store cash in my safe deposit box?",
      answer: "While allowed, we don't recommend storing large amounts of cash as it's not FDIC insured and doesn't earn interest."
    },
    {
      question: "What are the access hours?",
      answer: "Access is available during all branch hours, Monday-Friday 9am-5pm, Saturday 9am-1pm. Holiday hours may vary."
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
              <h1 className="text-5xl font-bold mb-6">Safe Deposit Boxes</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Secure storage solutions for your most valuable items with multiple size options and competitive rates
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-white text-green-700 hover:bg-gray-100">
                  Rent a Box Today
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                  Find a Location
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Box Sizes and Pricing */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Box Size</h2>
              <p className="text-gray-600">Find the perfect size for your storage needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {boxSizes.map((box, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedSize === box.id ? 'ring-2 ring-green-500' : ''
                  }`}
                  onClick={() => setSelectedSize(box.id)}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{box.size}</CardTitle>
                    <CardDescription>{box.dimensions}</CardDescription>
                    <div className="text-2xl font-bold text-green-600">{box.price}</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 text-center mb-4">Ideal for:</p>
                    <p className="text-sm font-medium text-center">{box.ideal}</p>
                    <Button 
                      className="w-full mt-4" 
                      variant={selectedSize === box.id ? "default" : "outline"}
                    >
                      {selectedSize === box.id ? "Selected" : "Select"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What to Store */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Can You Store?</h2>
              <p className="text-gray-600">Common items our customers safely store</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whatToStore.map((category, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-green-600" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Security Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Security Details */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Advanced Security Measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-green-600 border-green-600">✓</Badge>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process and Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="process" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="process">Rental Process</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="access">Access Rules</TabsTrigger>
              </TabsList>
              
              <TabsContent value="process" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How to Rent a Safe Deposit Box</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-semibold">Visit a Branch</h4>
                        <p className="text-sm text-gray-600">Come to any of our locations with valid ID</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-semibold">Complete Application</h4>
                        <p className="text-sm text-gray-600">Fill out the rental agreement and choose your box size</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-semibold">Pay Annual Fee</h4>
                        <p className="text-sm text-gray-600">Pay the first year's rental fee</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-semibold">Receive Your Key</h4>
                        <p className="text-sm text-gray-600">Get your personal key and box number</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="requirements" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Need</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Required Documents:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Valid government-issued photo ID</li>
                        <li>Social Security number</li>
                        <li>Proof of address</li>
                        <li>Initial rental payment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Eligibility:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Must be 18 years or older</li>
                        <li>Bank account holder (preferred but not required)</li>
                        <li>Pass identity verification</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="access" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Access Rules & Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Access Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Valid ID and signature verification required</li>
                        <li>Both customer key and bank key needed</li>
                        <li>Authorized signers only</li>
                        <li>Accompanied access for joint renters</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Prohibited Items:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Firearms or ammunition</li>
                        <li>Explosives or hazardous materials</li>
                        <li>Illegal substances</li>
                        <li>Perishable items</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Valuables?</h2>
            <p className="text-gray-600 mb-8">Visit any of our branch locations to rent your safe deposit box today</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">Find a Branch</Button>
              <Button variant="outline" size="lg">Call Us</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SafeDepositBoxes;
