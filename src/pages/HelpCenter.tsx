import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, HelpCircle, Search, FileText, Video, Phone, Mail, MessageSquare, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface HelpArticle {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  views: number;
  lastUpdated: string;
}

const HelpCenter = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<HelpArticle | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'account', name: 'Account Management' },
    { id: 'security', name: 'Security' },
    { id: 'transfers', name: 'Transfers & Payments' },
    { id: 'cards', name: 'Cards' },
    { id: 'loans', name: 'Loans & Mortgages' },
    { id: 'investments', name: 'Investments' },
    { id: 'mobile', name: 'Mobile Banking' }
  ];

  const helpArticles: HelpArticle[] = [
    {
      id: '1',
      title: 'How to Reset Your Password',
      category: 'security',
      description: 'Learn how to securely reset your account password',
      content: `To reset your password:

1. Go to the login page
2. Click "Forgot Password"
3. Enter your email address
4. Check your email for reset instructions
5. Follow the link and create a new password
6. Use a strong password with at least 8 characters

Make sure to use a unique password that you haven't used elsewhere.`,
      views: 1520,
      lastUpdated: '2026-02-20'
    },
    {
      id: '2',
      title: 'Setting Up Two-Factor Authentication',
      category: 'security',
      description: 'Add an extra layer of security to your account',
      content: `Two-factor authentication (2FA) adds an extra layer of security:

1. Go to Account Settings
2. Select "Security"
3. Click "Enable 2FA"
4. Choose your preferred method (SMS or Authenticator App)
5. Follow the setup instructions
6. Save your backup codes in a safe place

We recommend using an authenticator app for the best security.`,
      views: 892,
      lastUpdated: '2026-02-18'
    },
    {
      id: '3',
      title: 'How to Transfer Money',
      category: 'transfers',
      description: 'Step-by-step guide to making transfers',
      content: `To transfer money:

1. Log in to your account
2. Click "Transfer Money"
3. Select the account to transfer from
4. Enter recipient details or select from beneficiaries
5. Enter the amount
6. Add a description (optional)
7. Review and confirm the transfer

Transfers made before 4 PM on business days usually process the same day.`,
      views: 2103,
      lastUpdated: '2026-02-22'
    },
    {
      id: '4',
      title: 'Understanding Your Statements',
      category: 'account',
      description: 'How to read and understand your account statements',
      content: `Your account statements include:

• Account balance at the beginning and end of the period
• All deposits and withdrawals
• Fees charged
• Interest earned
• Transaction details with dates and descriptions

Statements are available monthly and can be downloaded as PDFs.`,
      views: 756,
      lastUpdated: '2026-02-15'
    },
    {
      id: '5',
      title: 'Reporting Lost or Stolen Cards',
      category: 'cards',
      description: 'What to do if your card is lost or stolen',
      content: `If your card is lost or stolen:

1. Immediately log in to your account
2. Go to "Card Management"
3. Select the lost/stolen card
4. Click "Report Lost/Stolen"
5. Confirm the card will be blocked
6. Request a replacement card

You can also call our 24/7 support line for immediate assistance.`,
      views: 445,
      lastUpdated: '2026-02-19'
    },
    {
      id: '6',
      title: 'Mobile Banking App Features',
      category: 'mobile',
      description: 'Discover all features of our mobile banking app',
      content: `Our mobile app offers:

• Check balances and transactions
• Transfer money between accounts
• Pay bills and transfer to others
• Deposit checks using your camera
• Find ATMs and branches
• Set up account alerts
• Manage cards and beneficiaries

Download from the App Store or Google Play Store.`,
      views: 1834,
      lastUpdated: '2026-02-21'
    }
  ];

  const filteredArticles = helpArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team',
      action: () => navigate('/chat'),
      available: '24/7'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us at 1-800-BANK',
      action: () => window.open('tel:18002265'),
      available: '24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email',
      action: () => window.open('mailto:support@usbank.com'),
      available: 'Response within 24h'
    },
    {
      icon: Video,
      title: 'Video Call',
      description: 'Schedule a video consultation',
      action: () => navigate('/schedule-consultation'),
      available: 'Business hours'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900">Help Center</h1>
          <p className="text-gray-600 mt-2">Find answers and get support for your banking needs</p>
        </div>

        {/* Search and Categories */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search for help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Help Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredArticles.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No articles found matching your search.</p>
                  ) : (
                    filteredArticles.map((article) => (
                      <div
                        key={article.id}
                        className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => setSelectedArticle(article)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-gray-900">{article.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          {article.views} views • Updated {article.lastUpdated}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Options */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {supportOptions.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start h-auto p-4"
                      onClick={option.action}
                    >
                      <option.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                      <div className="text-left">
                        <div className="font-medium">{option.title}</div>
                        <div className="text-xs text-gray-500">{option.description}</div>
                        <div className="text-xs text-green-600">{option.available}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/security-center')}>
                    Security Center
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/account-settings')}>
                    Account Settings
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/mobile-app')}>
                    Mobile App Download
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/find-locations')}>
                    Find Branches & ATMs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Article Detail Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{selectedArticle.title}</h2>
                  <Button variant="ghost" onClick={() => setSelectedArticle(null)}>
                    ×
                  </Button>
                </div>
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{selectedArticle.content}</p>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {selectedArticle.views} views • Updated {selectedArticle.lastUpdated}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;
