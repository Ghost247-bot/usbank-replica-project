
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Accessibility</h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
                We're committed to making our services accessible to everyone
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6 text-sm sm:text-base">Last updated: January 1, 2024</p>
              
              <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Our Commitment</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Moonstone Banking & Trust is committed to ensuring digital accessibility for people with 
                disabilities. We continually improve the user experience for everyone and apply the 
                relevant accessibility standards to ensure we provide equal access to all.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Conformance Status</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
                criteria. These guidelines explain how to make web content accessible to people with a 
                wide array of disabilities.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Accessibility Features</h2>
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Keyboard Navigation</h3>
                  <p className="text-gray-600 text-sm sm:text-base">All interactive elements can be accessed using keyboard navigation.</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Screen Reader Support</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Our website is compatible with popular screen reading software.</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Alt Text</h3>
                  <p className="text-gray-600 text-sm sm:text-base">All images include descriptive alternative text for screen readers.</p>
                </div>
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Color Contrast</h3>
                  <p className="text-gray-600 text-sm sm:text-base">We maintain high color contrast ratios for better readability.</p>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Assistive Technologies</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Our website is designed to work with assistive technologies including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
                <li>Voice recognition software</li>
                <li>Screen magnification software</li>
                <li>Alternative keyboards and pointing devices</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Known Issues</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                We are aware of some accessibility limitations and are actively working to address them. 
                If you encounter any barriers while using our website, please let us know.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold mt-6 sm:mt-8 mb-3 sm:mb-4">Feedback and Contact</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                We welcome your feedback on the accessibility of our website. If you encounter any 
                accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg">
                <p className="text-gray-700 text-sm sm:text-base mb-2">
                  <strong>Email:</strong> accessibility@moonstone.com
                </p>
                <p className="text-gray-700 text-sm sm:text-base mb-2">
                  <strong>Phone:</strong> 1-800-MOONSTONE
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  <strong>Mail:</strong> Moonstone Banking & Trust<br />
                  Accessibility Department<br />
                  123 Banking Street<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;
