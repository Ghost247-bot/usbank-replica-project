
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building, CheckCircle, DollarSign, Clock, TrendingUp, Users, FileText, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const SbaLoans = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanType, setLoanType] = useState('');

  const benefits = [
    {
      icon: Building,
      title: "Government Backed",
      description: "SBA guaranteed loans with favorable terms"
    },
    {
      icon: CheckCircle,
      title: "Lower Down Payments",
      description: "Reduced down payment requirements"
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Below-market interest rates"
    },
    {
      icon: Clock,
      title: "Longer Terms",
      description: "Extended repayment periods"
    }
  ];

  const loanPrograms = [
    {
      name: "SBA 7(a) Loans",
      maxAmount: "$5 million",
      uses: ["Working capital", "Equipment", "Real estate", "Refinancing"],
      guarantee: "Up to 85%",
      terms: "Up to 25 years",
      rate: "Prime + 2.75%"
    },
    {
      name: "SBA 504 Loans",
      maxAmount: "$5.5 million",
      uses: ["Real estate", "Heavy equipment", "Major renovations"],
      guarantee: "40% SBA portion",
      terms: "10 or 20 years",
      rate: "Fixed rates available"
    },
    {
      name: "SBA Microloans",
      maxAmount: "$50,000",
      uses: ["Working capital", "Inventory", "Equipment", "Supplies"],
      guarantee: "Not guaranteed",
      terms: "Up to 6 years",
      rate: "8-13% typically"
    },
    {
      name: "SBA Express Loans",
      maxAmount: "$500,000",
      uses: ["Working capital", "Equipment", "Real estate"],
      guarantee: "50%",
      terms: "Up to 25 years",
      rate: "Prime + 4.5-6.5%"
    }
  ];

  const requirements = [
    "Be a for-profit business",
    "Meet SBA size standards",
    "Demonstrate owner investment",
    "Good credit history",
    "Collateral may be required",
    "Personal guarantee from owners"
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Pre-qualification",
      description: "Review your business and financial information",
      timeframe: "1-2 days"
    },
    {
      step: 2,
      title: "Application Submission",
      description: "Complete SBA forms and provide documentation",
      timeframe: "1-2 weeks"
    },
    {
      step: 3,
      title: "Bank Review",
      description: "Lender evaluates your application and creditworthiness",
      timeframe: "2-4 weeks"
    },
    {
      step: 4,
      title: "SBA Review",
      description: "SBA reviews and approves the guarantee",
      timeframe: "2-3 weeks"
    },
    {
      step: 5,
      title: "Closing",
      description: "Final documentation and funding",
      timeframe: "1-2 weeks"
    }
  ];

  const documents = [
    "Business financial statements (3 years)",
    "Personal financial statements",
    "Business plan",
    "Tax returns (business and personal)",
    "Articles of incorporation",
    "Business licenses",
    "Equipment quotes or real estate purchase agreements",
    "Lease agreements"
  ];

  const faqs = [
    {
      question: "What are SBA size standards?",
      answer: "Size standards vary by industry and are based on number of employees or annual receipts. Most manufacturing businesses qualify if they have 500 or fewer employees, while most non-manufacturing businesses qualify if they have average annual receipts of $7.5 million or less."
    },
    {
      question: "How long does the SBA loan process take?",
      answer: "The typical SBA loan process takes 60-90 days from application to funding, though it can vary based on loan type, complexity, and completeness of documentation."
    },
    {
      question: "Can I use SBA loans to start a new business?",
      answer: "Yes, SBA loans can be used for startup businesses, though you'll need to provide a detailed business plan and may need to invest your own funds into the business."
    },
    {
      question: "What happens if I can't repay my SBA loan?",
      answer: "The SBA guarantee protects the lender, but you remain personally liable for the debt. The SBA may pursue collection actions, and your business and personal assets may be at risk."
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
              <h1 className="text-5xl font-bold mb-6">SBA Loans</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Government-backed lending solutions for small businesses with competitive rates and favorable terms
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-white text-green-700 hover:bg-gray-100">
                  Apply Today
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                  Speak with Specialist
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">SBA Loan Calculator</h2>
              <p className="text-gray-600">Estimate your monthly payments and loan costs</p>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Loan Payment Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Loan Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="250000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="type">Loan Type</Label>
                    <Select onValueChange={setLoanType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select loan type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7a">SBA 7(a) Loan</SelectItem>
                        <SelectItem value="504">SBA 504 Loan</SelectItem>
                        <SelectItem value="micro">SBA Microloan</SelectItem>
                        <SelectItem value="express">SBA Express Loan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="term">Loan Term (years)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select term" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 years</SelectItem>
                        <SelectItem value="10">10 years</SelectItem>
                        <SelectItem value="15">15 years</SelectItem>
                        <SelectItem value="20">20 years</SelectItem>
                        <SelectItem value="25">25 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="rate">Interest Rate (%)</Label>
                    <Input id="rate" placeholder="7.5" />
                  </div>
                </div>
                
                {loanAmount && loanType && (
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
                      <p className="text-3xl font-bold text-green-600">
                        ${Math.round((parseFloat(loanAmount) * 0.08) / 12).toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        *This is an estimate. Actual rates and terms may vary.
                      </p>
                    </div>
                  </div>
                )}
                
                <Button className="w-full">Get Pre-Qualified</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SBA Loan Programs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">SBA Loan Programs</h2>
              <p className="text-gray-600">Choose the right SBA loan program for your business needs</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {loanPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                    <div className="flex space-x-2">
                      <Badge variant="outline">Max: {program.maxAmount}</Badge>
                      <Badge variant="secondary">{program.terms}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Common Uses:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.uses.map((use, useIndex) => (
                          <Badge key={useIndex} variant="outline" className="text-xs">
                            {use}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold">SBA Guarantee:</span>
                        <p className="text-gray-600">{program.guarantee}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Interest Rate:</span>
                        <p className="text-gray-600">{program.rate}</p>
                      </div>
                    </div>
                    
                    <Button className="w-full" size="sm">Learn More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">SBA Loan Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-white">
                  <benefit.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process and Requirements */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="process" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="process">Application Process</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="documents">Required Documents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="process" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>SBA Loan Application Process</CardTitle>
                    <CardDescription>Step-by-step guide to getting your SBA loan approved</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {applicationSteps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold">{step.title}</h4>
                                <p className="text-sm text-gray-600">{step.description}</p>
                              </div>
                              <Badge variant="outline" className="ml-4">
                                {step.timeframe}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="requirements" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility Requirements</CardTitle>
                    <CardDescription>Basic requirements for SBA loan approval</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4">General Requirements:</h4>
                        <div className="space-y-3">
                          {requirements.map((req, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4">Credit Requirements:</h4>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Personal credit score of 680+ preferred</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Strong business credit history</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Debt-to-income ratio under 40%</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">No recent bankruptcies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Required Documentation</CardTitle>
                    <CardDescription>Documents you'll need for your SBA loan application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {documents.map((doc, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <FileText className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Pro Tip:</h4>
                      <p className="text-sm text-blue-700">
                        Having all documents ready before starting your application can significantly speed up the approval process. 
                        Our loan specialists can help you prepare a complete document package.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-gray-600 mb-8">Our SBA loan specialists are here to help you find the right financing solution</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">Start Application</Button>
              <Button variant="outline" size="lg">Schedule Consultation</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SbaLoans;
