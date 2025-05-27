
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const SecurityCenter = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Multi-Factor Authentication",
      description: "Add an extra layer of security to your account"
    },
    {
      icon: Lock,
      title: "Encryption",
      description: "Your data is protected with bank-level encryption"
    },
    {
      icon: Eye,
      title: "Account Monitoring",
      description: "24/7 monitoring for suspicious activity"
    },
    {
      icon: AlertTriangle,
      title: "Fraud Alerts",
      description: "Instant notifications for unusual transactions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Security Center</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Your security is our top priority. Learn about our security measures.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Security Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-8">Security Tips</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Protect Your Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Never share your login credentials</li>
                    <li>• Use strong, unique passwords</li>
                    <li>• Log out when using public computers</li>
                    <li>• Monitor your accounts regularly</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Recognize Fraud</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Be wary of phishing emails</li>
                    <li>• Verify suspicious transactions</li>
                    <li>• Report lost cards immediately</li>
                    <li>• Never give info over unsolicited calls</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityCenter;
