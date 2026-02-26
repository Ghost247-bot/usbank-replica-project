
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Please read these terms carefully before using our services
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: January 1, 2024</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
              <p className="text-gray-600 mb-6">
                Permission is granted to temporarily use our services for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Account Responsibilities</h2>
              <p className="text-gray-600 mb-6">
                You are responsible for maintaining the confidentiality of your account information 
                and for all activities that occur under your account. You agree to notify us 
                immediately of any unauthorized use of your account.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Prohibited Uses</h2>
              <p className="text-gray-600 mb-6">
                You may not use our services for any unlawful purpose or to solicit others to 
                perform unlawful acts. You may not violate any local, state, national, or 
                international law or regulation.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                In no event shall US Bank be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out 
                of the use or inability to use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us at 
                legal@usbank.com or call 1-800-USBANK-1.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
