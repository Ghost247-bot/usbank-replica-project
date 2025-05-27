
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, GraduationCap, Users, Award } from 'lucide-react';

const FinancialEducation = () => {
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
                Learn about money management and build your financial knowledge
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Learning
              </button>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Learning Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <resource.icon className="h-12 w-12 text-green-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinancialEducation;
