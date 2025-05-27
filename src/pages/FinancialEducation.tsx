
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, GraduationCap, Users, Award, Video, Download, Calendar, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FinancialEducation = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      icon: BookOpen,
      title: "Educational Articles",
      description: "Learn about money management and financial planning"
    },
    {
      icon: GraduationCap,
      title: "Workshops & Seminars",
      description: "Attend live educational sessions with experts"
    },
    {
      icon: Users,
      title: "Personal Coaching",
      description: "One-on-one financial coaching sessions"
    },
    {
      icon: Award,
      title: "Certification Programs",
      description: "Earn certificates in financial literacy"
    }
  ];

  const articles = [
    {
      title: "Building Your Emergency Fund",
      category: "Savings",
      readTime: "5 min read",
      description: "Learn how to build and maintain an emergency fund that can protect you from financial setbacks.",
      level: "Beginner"
    },
    {
      title: "Understanding Credit Scores",
      category: "Credit",
      readTime: "7 min read", 
      description: "Discover how credit scores work and strategies to improve your credit rating.",
      level: "Beginner"
    },
    {
      title: "Investment Basics for Beginners",
      category: "Investing",
      readTime: "10 min read",
      description: "A comprehensive guide to getting started with investing and building wealth.",
      level: "Beginner"
    },
    {
      title: "Retirement Planning Strategies",
      category: "Retirement",
      readTime: "12 min read",
      description: "Advanced strategies for maximizing your retirement savings and planning for the future.",
      level: "Advanced"
    },
    {
      title: "Budgeting for Young Professionals",
      category: "Budgeting",
      readTime: "6 min read",
      description: "Create a budget that works for your lifestyle and career stage.",
      level: "Beginner"
    },
    {
      title: "Tax-Efficient Investment Strategies",
      category: "Investing",
      readTime: "15 min read",
      description: "Learn how to minimize taxes while maximizing investment returns.",
      level: "Advanced"
    }
  ];

  const workshops = [
    {
      title: "First-Time Home Buyer Workshop",
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      format: "In-Person",
      spots: "12 spots available",
      description: "Learn about the home buying process, mortgage options, and down payment assistance programs."
    },
    {
      title: "Small Business Financial Management",
      date: "March 22, 2024", 
      time: "10:00 AM - 12:00 PM",
      format: "Virtual",
      spots: "25 spots available",
      description: "Essential financial management skills for small business owners and entrepreneurs."
    },
    {
      title: "Retirement Planning Seminar",
      date: "March 29, 2024",
      time: "2:00 PM - 4:00 PM", 
      format: "In-Person",
      spots: "8 spots available",
      description: "Comprehensive retirement planning strategies for different life stages."
    },
    {
      title: "Investment Fundamentals",
      date: "April 5, 2024",
      time: "7:00 PM - 9:00 PM",
      format: "Virtual", 
      spots: "30 spots available",
      description: "Learn the basics of investing, portfolio diversification, and risk management."
    }
  ];

  const tools = [
    {
      title: "Budget Calculator",
      description: "Create a personalized budget based on your income and expenses",
      type: "Calculator"
    },
    {
      title: "Retirement Planner",
      description: "Estimate how much you need to save for retirement",
      type: "Calculator"
    },
    {
      title: "Loan Payment Calculator",
      description: "Calculate monthly payments for loans and mortgages",
      type: "Calculator"
    },
    {
      title: "Financial Health Checkup",
      description: "Assess your overall financial wellness",
      type: "Assessment"
    },
    {
      title: "Investment Risk Tolerance Quiz",
      description: "Determine your comfort level with investment risk",
      type: "Assessment"
    },
    {
      title: "Credit Score Simulator",
      description: "See how different actions might affect your credit score",
      type: "Simulator"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', 'savings', 'credit', 'investing', 'retirement', 'budgeting'];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Financial Education</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Build your financial knowledge with our comprehensive educational resources, workshops, and tools
              </p>
              <div className="flex justify-center space-x-4">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Explore Resources
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Join a Workshop
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="Search articles, workshops, and resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="articles" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="workshops">Workshops</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="coaching">Coaching</TabsTrigger>
              </TabsList>
              
              <TabsContent value="articles" className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Educational Articles</h2>
                  <p className="text-gray-600">Expert insights on personal finance topics</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline">{article.category}</Badge>
                          <Badge variant="secondary">{article.level}</Badge>
                        </div>
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                        <CardDescription className="text-sm text-gray-500">
                          {article.readTime}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{article.description}</p>
                        <Button className="w-full" size="sm">Read Article</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="workshops" className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Upcoming Workshops</h2>
                  <p className="text-gray-600">Live educational sessions with financial experts</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {workshops.map((workshop, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline">{workshop.format}</Badge>
                          <Badge variant="secondary">{workshop.spots}</Badge>
                        </div>
                        <CardTitle className="text-lg">{workshop.title}</CardTitle>
                        <CardDescription>
                          <div className="space-y-1">
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 mr-1" />
                              {workshop.date} • {workshop.time}
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{workshop.description}</p>
                        <Button className="w-full" size="sm">Register Now</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tools" className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Financial Tools & Calculators</h2>
                  <p className="text-gray-600">Interactive tools to help plan your financial future</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tools.map((tool, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-lg">{tool.title}</CardTitle>
                          <Badge variant="outline">{tool.type}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                        <Button className="w-full" size="sm">
                          {tool.type === 'Calculator' ? 'Use Calculator' : 
                           tool.type === 'Assessment' ? 'Take Assessment' : 'Try Simulator'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="coaching" className="mt-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Personal Financial Coaching</h2>
                  <p className="text-gray-600">One-on-one guidance from certified financial coaches</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Individual Coaching Sessions</CardTitle>
                      <CardDescription>Personalized financial guidance</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">What's Included:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 60-minute one-on-one session</li>
                          <li>• Personalized financial plan</li>
                          <li>• Goal setting and action steps</li>
                          <li>• Follow-up resources</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">$75/session</p>
                        <p className="text-sm text-gray-600">Free for premium account holders</p>
                      </div>
                      <Button className="w-full">Schedule Coaching</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Group Coaching Programs</CardTitle>
                      <CardDescription>Learn with others in small group settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Program Features:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• 4-week program (1 hour/week)</li>
                          <li>• Small groups (max 8 people)</li>
                          <li>• Comprehensive workbook</li>
                          <li>• Peer support and accountability</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">$199/program</p>
                        <p className="text-sm text-gray-600">Next session starts April 1st</p>
                      </div>
                      <Button className="w-full">Join Program</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Resources Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Learning Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-white">
                  <resource.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  Stay Financially Informed
                </CardTitle>
                <CardDescription>
                  Get weekly financial tips and updates delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input 
                    placeholder="Enter your email address" 
                    className="flex-1"
                  />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Unsubscribe anytime. We respect your privacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Getting Started CTA */}
        <section className="py-16 bg-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Financial Education Journey</h2>
            <p className="text-gray-600 mb-8">Take the first step towards financial literacy and independence</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">Browse Articles</Button>
              <Button variant="outline" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Download Resources
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinancialEducation;
