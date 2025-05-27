
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { name: "Personal Banking", path: "/personal/checking-accounts" },
    { name: "Business Banking", path: "/business/business-checking" },
    { name: "Wealth Management", path: "/wealth/investment-management" },
    { name: "Find Locations", path: "/find-locations" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Sign In", path: "/sign-in" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or you may have entered an incorrect URL.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/"
              className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Popular Pages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-green-300"
                >
                  <span className="text-green-600 font-medium">{page.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-t-blue-600">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Search Our Site</h3>
              <p className="text-gray-600 mb-4">Use our site map to find what you're looking for</p>
              <Link 
                to="/site-map"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Site Map
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-t-green-600">
              <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Need Help?</h3>
              <p className="text-gray-600 mb-4">Contact our customer service team for assistance</p>
              <Link 
                to="/customer-service"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
