
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, CheckCircle, Clock, Users, MapPin, Phone, DollarSign, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const NotaryServices = () => {
  const [selectedService, setSelectedService] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const services = [
    {
      icon: FileText,
      title: "Document Notarization",
      description: "Notarize legal documents and contracts"
    },
    {
      icon: CheckCircle,
      title: "Identity Verification",
      description: "Verify identity for important transactions"
    },
    {
      icon: Clock,
      title: "Convenient Hours",
      description: "Available during regular banking hours"
    },
    {
      icon: Users,
      title: "Professional Service",
      description: "Certified notary public services"
    }
  ];

  const notaryServices = [
    {
      service: "Acknowledgments",
      description: "Verify identity and willingness to sign",
      fee: "$10",
      time: "5-10 minutes"
    },
    {
      service: "Jurats",
      description: "Administer oath or affirmation",
      fee: "$10",
      time: "5-10 minutes"
    },
    {
      service: "Copy Certifications",
      description: "Certify document copies",
      fee: "$10",
      time: "2-5 minutes"
    },
    {
      service: "Signature Witnessing",
      description: "Witness document signing",
      fee: "$10",
      time: "5-10 minutes"
    },
    {
      service: "Oaths and Affirmations",
      description: "Administer verbal oaths",
      fee: "$10",
      time: "2-5 minutes"
    },
    {
      service: "Powers of Attorney",
      description: "Notarize POA documents",
      fee: "$10",
      time: "10-15 minutes"
    }
  ];

  const commonDocuments = [
    "Real estate documents",
    "Loan documents",
    "Power of attorney",
    "Wills and estate documents",
    "Affidavits",
    "Contracts and agreements",
    "Insurance forms",
    "Government forms",
    "Employment documents",
    "Educational transcripts"
  ];

  const requirements = [
    "Valid government-issued photo ID",
    "Original documents (no copies)",
    "All signers must be present",
    "Documents must be complete",
    "Blank documents cannot be notarized",
    "Signers must be willing participants"
  ];

  const locations = [
    {
      name: "Downtown Branch",
      address: "123 Main Street",
      hours: "Mon-Fri 9AM-5PM, Sat 9AM-1PM",
      phone: "(555) 123-4567"
    },
    {
      name: "Westside Branch", 
      address: "456 Oak Avenue",
      hours: "Mon-Fri 9AM-6PM, Sat 9AM-2PM",
      phone: "(555) 234-5678"
    },
    {
      name: "Northpark Branch",
      address: "789 Pine Road", 
      hours: "Mon-Fri 9AM-5PM",
      phone: "(555) 345-6789"
    }
  ];

  const faqs = [
    {
      question: "What is notarization?",
      answer: "Notarization is the process where a notary public verifies the identity of signers and witnesses the signing of important documents to prevent fraud."
    },
    {
      question: "Do I need an appointment?",
      answer: "While walk-ins are welcome, we recommend scheduling an appointment to ensure a notary is available when you visit."
    },
    {
      question: "What if my document is in another language?",
      answer: "We can notarize documents in other languages, but the notary certificate will be in English. You may need a certified translation."
    },
    {
      question: "Can you notarize incomplete documents?",
      answer: "No, all documents must be complete before notarization. Blank spaces must be filled in or crossed out."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-800 to-green-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Notary Services</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Professional document authentication and notarization services by certified notaries
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-white text-green-800 hover:bg-gray-100">
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800">
                  Find Location
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Scheduling */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Schedule Your Notary Appointment</h2>
              <p className="text-gray-600">Book ahead to ensure availability</p>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </CardTitle>
                <CardDescription>Fill out the form below to schedule your notary service</CardDescription>
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
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <Select onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select notary service" />
                    </SelectTrigger>
                    <SelectContent>
                      {notaryServices.map((service, index) => (
                        <SelectItem key={index} value={service.service}>
                          {service.service} - {service.fee}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Preferred Location</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select branch" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location, index) => (
                          <SelectItem key={index} value={location.name}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="documents">Documents to be Notarized</Label>
                  <Textarea 
                    id="documents" 
                    placeholder="Describe the documents you need notarized"
                    rows={3}
                  />
                </div>
                
                <Button className="w-full">Schedule Appointment</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services and Pricing */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notary Services & Pricing</h2>
              <p className="text-gray-600">Transparent, competitive pricing for all notary services</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notaryServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {service.service}
                      <span className="text-green-600 font-bold">{service.fee}</span>
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Typical time: {service.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Notary Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-white">
                  <service.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Information Tabs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="documents" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="locations">Locations</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>
              
              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Commonly Notarized Documents</CardTitle>
                    <CardDescription>We can notarize a wide variety of documents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {commonDocuments.map((doc, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="requirements" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You Need to Bring</CardTitle>
                    <CardDescription>Required items for notarization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {requirements.map((req, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="locations" className="mt-6">
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2" />
                          {location.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="font-semibold">Address:</span>
                            <p>{location.address}</p>
                          </div>
                          <div>
                            <span className="font-semibold">Hours:</span>
                            <p>{location.hours}</p>
                          </div>
                          <div>
                            <span className="font-semibold">Phone:</span>
                            <p>{location.phone}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="process" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notarization Process</CardTitle>
                    <CardDescription>What to expect during your visit</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-semibold">Identity Verification</h4>
                        <p className="text-sm text-gray-600">Present valid government-issued photo ID</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-semibold">Document Review</h4>
                        <p className="text-sm text-gray-600">Notary reviews document for completeness</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-semibold">Signing & Witnessing</h4>
                        <p className="text-sm text-gray-600">Sign document in presence of notary</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-semibold">Notarial Certificate</h4>
                        <p className="text-sm text-gray-600">Notary completes certificate and applies seal</p>
                      </div>
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

        {/* Contact CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Notary Services?</h2>
            <p className="text-gray-600 mb-8">Schedule an appointment or visit any of our branch locations</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">Schedule Now</Button>
              <Button variant="outline" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotaryServices;
