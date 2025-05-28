
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Heart, Star, ChevronLeft, ChevronRight, Building, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from customer service to financial solutions"
    },
    {
      icon: Users,
      title: "Community",
      description: "We're committed to supporting the communities we serve and helping them thrive"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We embrace technology and innovation to provide better banking experiences"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with the highest ethical standards and transparency in all our dealings"
    }
  ];

  const leadership = [
    {
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      bio: "Sarah has over 20 years of banking experience and leads our strategic vision.",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Chen",
      title: "Chief Technology Officer",
      bio: "Michael drives our digital transformation and innovation initiatives.",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      title: "Chief Financial Officer",
      bio: "Emily oversees our financial operations and ensures fiscal responsibility.",
      image: "/placeholder.svg"
    },
    {
      name: "David Thompson",
      title: "Chief Risk Officer",
      bio: "David manages our risk management and compliance programs.",
      image: "/placeholder.svg"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Smith",
      title: "Small Business Owner",
      quote: "US Bank has been instrumental in helping my business grow. Their support and expertise are unmatched.",
      rating: 5
    },
    {
      name: "Robert Davis",
      title: "Homeowner",
      quote: "The mortgage process was smooth and transparent. The team guided us every step of the way.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      title: "Recent Graduate",
      quote: "Their student loan services helped me finance my education without stress. Excellent customer service.",
      rating: 5
    }
  ];

  const achievements = [
    {
      year: "2024",
      award: "Best Digital Banking Platform",
      organization: "Banking Excellence Awards"
    },
    {
      year: "2023",
      award: "Top Community Bank",
      organization: "National Banking Association"
    },
    {
      year: "2023",
      award: "Customer Service Excellence",
      organization: "Financial Services Institute"
    },
    {
      year: "2022",
      award: "Innovation in Banking",
      organization: "FinTech Awards"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">About US Bank</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                For over 150 years, we've been helping individuals and businesses achieve their financial goals
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We exist to power human achievement by helping our customers, communities, employees and shareholders reach their full potential. We're committed to building lasting relationships based on trust, transparency, and exceptional service.
                </p>
                <p className="text-lg text-gray-600">
                  As one of the nation's largest banks, we have the resources and expertise to help you succeed, whether you're an individual looking to buy your first home or a business planning for expansion.
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Founded:</span>
                    <span>1863</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Customers:</span>
                    <span>70+ Million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Branches:</span>
                    <span>3,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Employees:</span>
                    <span>230,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Assets:</span>
                    <span>$650+ Billion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <value.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                    <p className="text-green-600 font-medium">{leader.title}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="relative">
              <Card className="p-8">
                <CardContent className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
                  </div>
                </CardContent>
              </Card>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent>
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <p className="font-bold text-green-700">{achievement.year}</p>
                    <h3 className="font-semibold mb-2">{achievement.award}</h3>
                    <p className="text-sm text-gray-600">{achievement.organization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">1863</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Founded</h3>
                    <p className="text-gray-600">US Bank was founded during the Civil War era, establishing our roots in American financial history.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">1920s</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                    <p className="text-gray-600">Expanded nationwide during the economic boom, establishing branches across the country.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">1995</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Digital Innovation</h3>
                    <p className="text-gray-600">Launched online banking services, pioneering digital banking solutions for our customers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">2020</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modern Banking</h3>
                    <p className="text-gray-600">Embraced fintech innovations and mobile-first banking to serve customers in the digital age.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Community Impact</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <Building className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>$50M+ Invested</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Annual investment in community development and affordable housing projects.</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <Users className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>10,000+ Volunteers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Employee volunteers contributing time to local community organizations.</p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardHeader>
                  <Heart className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle>500+ Nonprofits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Partnerships with nonprofit organizations to strengthen communities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Our Corporate Headquarters</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Banking Plaza<br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">1-800-US-BANKS</p>
              </div>
              <div>
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@usbank.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Bank With Us?</h2>
            <p className="text-xl mb-8">Join millions of customers who trust US Bank with their financial needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/find-locations">
                <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                  Find a Branch
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                  Contact Us
                </Button>
              </Link>
              <Link to="/get-started">
                <Button size="lg" className="bg-green-600 hover:bg-green-800">
                  Open an Account
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
