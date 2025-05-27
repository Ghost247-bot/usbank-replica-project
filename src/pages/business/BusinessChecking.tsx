
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building, CreditCard, Users, BarChart } from 'lucide-react';

const BusinessChecking = () => {
  const features = [
    {
      icon: Building,
      title: "Business-Focused",
      description: "Accounts designed specifically for business needs"
    },
    {
      icon: CreditCard,
      title: "Business Debit Card",
      description: "Access your funds anywhere with our business debit card"
    },
    {
      icon: Users,
      title: "Multiple Users",
      description: "Add authorized users and manage permissions"
    },
    {
      icon: BarChart,
      title: "Expense Tracking",
      description: "Built-in tools to track and categorize expenses"
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
              <h1 className="text-5xl font-bold mb-6">Business Checking</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Streamline your business banking with accounts designed for modern businesses
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Open Business Account
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Business Banking Features</h2>
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

        {/* Account Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Business Account</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Small Business</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">$0/month</div>
                <p className="text-gray-600 mb-6">Perfect for startups and small businesses</p>
                <ul className="space-y-2 mb-6">
                  <li>• 200 free transactions per month</li>
                  <li>• Online and mobile banking</li>
                  <li>• Business debit card</li>
                  <li>• No minimum balance</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Open Account
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-green-700">
                <div className="text-center mb-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Business Plus</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">$15/month</div>
                <p className="text-gray-600 mb-6">Advanced features for growing businesses</p>
                <ul className="space-y-2 mb-6">
                  <li>• 500 free transactions per month</li>
                  <li>• Cash management tools</li>
                  <li>• Multiple user access</li>
                  <li>• Wire transfer discounts</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Open Account
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-green-700 mb-4">$50/month</div>
                <p className="text-gray-600 mb-6">Full-service banking for large businesses</p>
                <ul className="space-y-2 mb-6">
                  <li>• Unlimited transactions</li>
                  <li>• Dedicated relationship manager</li>
                  <li>• Treasury management</li>
                  <li>• Custom reporting</li>
                </ul>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessChecking;
