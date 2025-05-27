
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Heart, Car, Home, Users, DollarSign, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InsuranceSolutions = () => {
  const [selectedInsurance, setSelectedInsurance] = useState('life');
  const [quoteRequested, setQuoteRequested] = useState(false);

  const coverages = [
    {
      icon: Shield,
      title: "Life Insurance",
      description: "Protect your family's financial future",
      types: ["Term Life", "Whole Life", "Universal Life"],
      startingPrice: "$25/month"
    },
    {
      icon: Heart,
      title: "Health Insurance", 
      description: "Comprehensive health coverage options",
      types: ["Individual", "Family", "Group"],
      startingPrice: "$150/month"
    },
    {
      icon: Car,
      title: "Auto Insurance",
      description: "Vehicle protection and liability coverage",
      types: ["Liability", "Comprehensive", "Collision"],
      startingPrice: "$80/month"
    },
    {
      icon: Home,
      title: "Home Insurance",
      description: "Property and homeowner's insurance",
      types: ["Homeowners", "Renters", "Condo"],
      startingPrice: "$100/month"
    }
  ];

  const lifeInsuranceProducts = [
    {
      name: "Term Life Insurance",
      description: "Affordable protection for a specific period",
      features: ["10, 20, or 30-year terms", "Fixed premiums", "Renewable options", "Convertible to permanent"],
      bestFor: "Young families, mortgage protection",
      coverage: "Up to $2 million"
    },
    {
      name: "Whole Life Insurance",
      description: "Permanent protection with cash value",
      features: ["Lifetime coverage", "Cash value growth", "Fixed premiums", "Dividend potential"],
      bestFor: "Estate planning, long-term savings",
      coverage: "Up to $5 million"
    },
    {
      name: "Universal Life Insurance",
      description: "Flexible permanent life insurance",
      features: ["Adjustable premiums", "Investment options", "Cash accumulation", "Death benefit flexibility"],
      bestFor: "Investment-minded individuals",
      coverage: "Up to $10 million"
    }
  ];

  const benefits = [
    "Expert guidance from licensed agents",
    "Competitive rates and coverage options",
    "Multiple insurance carriers to choose from",
    "Personalized recommendations",
    "Claims assistance and support",
    "Annual policy reviews"
  ];

  const faqs = [
    {
      question: "How much life insurance do I need?",
      answer: "A general rule is 10-12 times your annual income, but this varies based on your debts, family size, and financial goals. Our agents can help you calculate the right amount."
    },
    {
      question: "What factors affect my insurance premiums?",
      answer: "Age, health, lifestyle, coverage amount, and type of policy all impact premiums. For life insurance, medical exams may be required for larger coverage amounts."
    },
    {
      question: "Can I change my coverage later?",
      answer: "Yes, most policies offer options to increase or decrease coverage, though changes may require underwriting approval and could affect premiums."
    },
    {
      question: "How quickly can I get coverage?",
      answer: "Some policies offer immediate coverage upon approval, while others may require medical exams. Our agents can explain the timeline for each option."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Insurance Solutions</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Comprehensive coverage options to protect what matters most to you and your family
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Get Free Quote
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Speak with Agent
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Quote Form */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Get Your Free Quote</h2>
              <p className="text-gray-600">Answer a few questions to get personalized insurance quotes</p>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Insurance Quote Request</CardTitle>
                <CardDescription>We'll connect you with the best coverage options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter phone number" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="18-25">18-25</SelectItem>
                        <SelectItem value="26-35">26-35</SelectItem>
                        <SelectItem value="36-45">36-45</SelectItem>
                        <SelectItem value="46-55">46-55</SelectItem>
                        <SelectItem value="56-65">56-65</SelectItem>
                        <SelectItem value="65+">65+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="income">Annual Income</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select income range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
                        <SelectItem value="200k-500k">$200,000 - $500,000</SelectItem>
                        <SelectItem value="500k+">$500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label className="text-base font-medium">Insurance Types of Interest</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {coverages.map((coverage, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={coverage.title} />
                        <Label htmlFor={coverage.title} className="text-sm">
                          {coverage.title}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={() => setQuoteRequested(true)}
                  disabled={quoteRequested}
                >
                  {quoteRequested ? "Quote Requested!" : "Get Free Quotes"}
                </Button>
                
                {quoteRequested && (
                  <div className="text-center text-green-600 font-medium">
                    Thank you! An agent will contact you within 1 business day.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Coverage Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coverages.map((coverage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedInsurance(coverage.title.toLowerCase().replace(' ', ''))}>
                  <CardHeader className="text-center">
                    <coverage.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                    <CardTitle className="text-xl">{coverage.title}</CardTitle>
                    <CardDescription>{coverage.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Coverage Types:</p>
                      {coverage.types.map((type, typeIndex) => (
                        <p key={typeIndex} className="text-sm text-gray-600">• {type}</p>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-lg font-bold text-green-600">{coverage.startingPrice}</p>
                      <p className="text-xs text-gray-500">Starting from</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Coverage Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={selectedInsurance} onValueChange={setSelectedInsurance} className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
                <TabsTrigger value="life">Life</TabsTrigger>
                <TabsTrigger value="health">Health</TabsTrigger>
                <TabsTrigger value="auto">Auto</TabsTrigger>
                <TabsTrigger value="home">Home</TabsTrigger>
              </TabsList>
              
              <TabsContent value="life" className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Life Insurance Options</h2>
                  <p className="text-gray-600">Protect your family's financial future with the right life insurance policy</p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  {lifeInsuranceProducts.map((product, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-xl">{product.name}</CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Features:</h4>
                          <ul className="text-sm space-y-1">
                            {product.features.map((feature, fIndex) => (
                              <li key={fIndex} className="text-gray-600">• {feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-sm"><span className="font-semibold">Best For:</span> {product.bestFor}</p>
                          <p className="text-sm"><span className="font-semibold">Coverage:</span> {product.coverage}</p>
                        </div>
                        <Button className="w-full">Get Quote</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="health" className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Health Insurance Plans</h2>
                  <p className="text-gray-600">Comprehensive health coverage for individuals and families</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Individual & Family Plans</CardTitle>
                      <CardDescription>Customizable health insurance for your needs</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Plan Options:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Bronze, Silver, Gold, and Platinum tiers</li>
                          <li>• HMO, PPO, and EPO networks</li>
                          <li>• High-deductible health plans (HDHP)</li>
                          <li>• Health Savings Account (HSA) compatible</li>
                        </ul>
                      </div>
                      <Button className="w-full">Compare Plans</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Supplemental Coverage</CardTitle>
                      <CardDescription>Additional protection beyond basic health insurance</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Available Options:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Dental and vision insurance</li>
                          <li>• Critical illness coverage</li>
                          <li>• Accident insurance</li>
                          <li>• Hospital indemnity plans</li>
                        </ul>
                      </div>
                      <Button className="w-full">Learn More</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="auto" className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Auto Insurance Coverage</h2>
                  <p className="text-gray-600">Protect your vehicle and driving future</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Liability Coverage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">Required by law in most states</p>
                      <ul className="text-sm space-y-1">
                        <li>• Bodily injury liability</li>
                        <li>• Property damage liability</li>
                        <li>• Uninsured motorist protection</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Comprehensive Coverage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">Protection beyond accidents</p>
                      <ul className="text-sm space-y-1">
                        <li>• Theft and vandalism</li>
                        <li>• Weather damage</li>
                        <li>• Animal collisions</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Additional Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">Enhanced protection options</p>
                      <ul className="text-sm space-y-1">
                        <li>• Roadside assistance</li>
                        <li>• Rental car coverage</li>
                        <li>• Gap insurance</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="home" className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Home Insurance Protection</h2>
                  <p className="text-gray-600">Safeguard your home and belongings</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Homeowners Insurance</CardTitle>
                      <CardDescription>Complete protection for your home</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Coverage Includes:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Dwelling protection</li>
                          <li>• Personal property coverage</li>
                          <li>• Liability protection</li>
                          <li>• Additional living expenses</li>
                        </ul>
                      </div>
                      <Button className="w-full">Get Homeowners Quote</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Renters Insurance</CardTitle>
                      <CardDescription>Protect your belongings as a renter</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Coverage Includes:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Personal property protection</li>
                          <li>• Liability coverage</li>
                          <li>• Temporary living expenses</li>
                          <li>• Medical payments to others</li>
                        </ul>
                      </div>
                      <Button className="w-full">Get Renters Quote</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Insurance Services</h2>
              <p className="text-gray-600">We're committed to finding you the best coverage at the best price</p>
            </div>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-green-600 mt-1" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
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

        {/* Contact CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Protected?</h2>
            <p className="text-gray-600 mb-8">Speak with one of our licensed insurance agents today</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Call (555) 123-4567
              </Button>
              <Button variant="outline" size="lg">Schedule Consultation</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsuranceSolutions;
