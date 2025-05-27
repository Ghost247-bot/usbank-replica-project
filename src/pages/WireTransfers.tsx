
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Send, Shield, Clock, Globe, DollarSign, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WireTransfers = () => {
  const [amount, setAmount] = useState('');
  const [recipientCountry, setRecipientCountry] = useState('');

  const features = [
    {
      icon: Send,
      title: "Fast Transfers",
      description: "Send money quickly and securely worldwide"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-level security for all wire transfers"
    },
    {
      icon: Clock,
      title: "Same Day Processing",
      description: "Most transfers processed the same business day"
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Send money to banks worldwide"
    }
  ];

  const fees = [
    { type: "Domestic Wire", fee: "$25", time: "Same day" },
    { type: "International Wire", fee: "$45", time: "1-2 business days" },
    { type: "Incoming Wire", fee: "$15", time: "Same day" },
    { type: "Wire Recall", fee: "$30", time: "Varies" }
  ];

  const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", 
    "Japan", "Australia", "Mexico", "Brazil", "India"
  ];

  const faqs = [
    {
      question: "What information do I need to send a wire transfer?",
      answer: "You'll need the recipient's full name, address, bank name, bank address, SWIFT/BIC code, and account number or IBAN."
    },
    {
      question: "Can I cancel a wire transfer?",
      answer: "Wire transfers can only be cancelled if they haven't been processed yet. Contact us immediately if you need to cancel."
    },
    {
      question: "Are there daily limits on wire transfers?",
      answer: "Yes, daily limits vary by account type. Contact us to discuss higher limits if needed."
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
              <h1 className="text-5xl font-bold mb-6">Wire Transfers</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Send money securely anywhere in the world with competitive rates and fast processing
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Send Wire Transfer
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Track Transfer
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Wire Transfer Calculator */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Calculate Transfer Costs</h2>
              <p className="text-gray-600">Get an estimate of fees and delivery time</p>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Wire Transfer Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="amount">Transfer Amount (USD)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="1000"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Destination Country</Label>
                    <Select onValueChange={setRecipientCountry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {amount && recipientCountry && (
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="font-semibold">Transfer Details</span>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>Transfer Amount: ${amount}</p>
                      <p>Transfer Fee: ${recipientCountry === 'United States' ? '25' : '45'}</p>
                      <p>Total Cost: ${(parseFloat(amount) + (recipientCountry === 'United States' ? 25 : 45)).toFixed(2)}</p>
                      <p>Delivery Time: {recipientCountry === 'United States' ? 'Same day' : '1-2 business days'}</p>
                    </div>
                  </div>
                )}
                
                <Button className="w-full">Start Wire Transfer</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Wire Transfer Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fees and Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="fees" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="fees">Fees & Rates</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="tracking">Track Transfer</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fees" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Wire Transfer Fees</CardTitle>
                    <CardDescription>Transparent pricing for all transfer types</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Transfer Type</th>
                            <th className="text-left py-2">Fee</th>
                            <th className="text-left py-2">Processing Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fees.map((fee, index) => (
                            <tr key={index} className="border-b">
                              <td className="py-2">{fee.type}</td>
                              <td className="py-2 font-semibold text-green-600">{fee.fee}</td>
                              <td className="py-2">{fee.time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="requirements" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Need</CardTitle>
                    <CardDescription>Required information for wire transfers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Recipient Information:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Full legal name and address</li>
                        <li>Bank name and address</li>
                        <li>SWIFT/BIC code or routing number</li>
                        <li>Account number or IBAN</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Sender Requirements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Valid government-issued ID</li>
                        <li>Sufficient funds in account</li>
                        <li>Purpose of transfer</li>
                        <li>Contact information</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tracking" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Track Your Transfer</CardTitle>
                    <CardDescription>Enter your reference number to track status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="reference">Reference Number</Label>
                      <Input id="reference" placeholder="Enter transfer reference number" />
                    </div>
                    <Button className="w-full">Track Transfer</Button>
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

        {/* Security Notice */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="border-yellow-200">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Important Security Notice</h3>
                    <p className="text-yellow-700 text-sm">
                      Wire transfers are irreversible once sent. Always verify recipient information carefully. 
                      We will never ask you to send wire transfers to unknown parties or for prize/lottery claims. 
                      Contact us immediately if you suspect fraud.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WireTransfers;
