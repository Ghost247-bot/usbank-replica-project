
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Learn how we protect and use your personal information
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: January 1, 2024</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                apply for our services, or contact us for support. This may include your name, email 
                address, phone number, and financial information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, communicate with you, and comply with legal obligations.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may 
                share your information in certain limited circumstances, such as with service 
                providers who assist us in operating our business.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@usbank.com or call 1-800-USBANK-1.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
