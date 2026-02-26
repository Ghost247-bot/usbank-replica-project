
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Eye, Keyboard, Volume2, Users, CheckCircle } from 'lucide-react';

const Accessibility = () => {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, screen reader compatibility, and adjustable text sizes",
      features: ["Screen reader support", "High contrast themes", "Zoom functionality", "Alternative text for images"]
    },
    {
      icon: Keyboard,
      title: "Keyboard Navigation",
      description: "Full keyboard accessibility for users who cannot use a mouse",
      features: ["Tab navigation", "Keyboard shortcuts", "Focus indicators", "Skip to content links"]
    },
    {
      icon: Volume2,
      title: "Audio Features",
      description: "Audio descriptions and hearing accessibility options",
      features: ["Audio descriptions", "Captions for videos", "Visual alerts", "Audio controls"]
    },
    {
      icon: Users,
      title: "Cognitive Support",
      description: "Clear navigation and simplified interfaces for better understanding",
      features: ["Clear language", "Consistent navigation", "Error prevention", "Help documentation"]
    }
  ];

  const complianceStandards = [
    "WCAG 2.1 AA compliance",
    "Section 508 compliance",
    "ADA compliance",
    "ARIA standards implementation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Accessibility</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                We are committed to ensuring our banking services are accessible to everyone, regardless of ability or technology used.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Accessibility</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe banking should be accessible to everyone. Our digital platforms are designed with accessibility in mind, following industry best practices and standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-l-blue-600">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-full mr-4">
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Compliance Standards</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our website and digital services meet or exceed the following accessibility standards and guidelines.
                </p>
                <ul className="space-y-4">
                  {complianceStandards.map((standard, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Need Assistance?</h3>
                <p className="text-gray-600 mb-6">
                  If you encounter any accessibility barriers or need assistance accessing our services, please contact us.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Support</h4>
                    <p className="text-gray-600">1-800-USBANK-1 (TTY: 1-800-555-0199)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Support</h4>
                    <p className="text-gray-600">accessibility@usbank.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Available</h4>
                    <p className="text-gray-600">24/7 accessibility support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Continuous Improvement</h2>
            <p className="text-xl text-gray-600 mb-8">
              We continuously work to improve the accessibility of our services and welcome your feedback to help us serve you better.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
              Provide Accessibility Feedback
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;
