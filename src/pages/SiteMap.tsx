
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const SiteMap = () => {
  const siteStructure = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Customer Service", path: "/customer-service" },
        { name: "Find Locations", path: "/find-locations" },
        { name: "Get Started", path: "/get-started" },
        { name: "Learn More", path: "/learn-more" }
      ]
    },
    {
      category: "Personal Banking",
      links: [
        { name: "Checking Accounts", path: "/personal/checking-accounts" },
        { name: "Savings Accounts", path: "/personal/savings-accounts" },
        { name: "Credit Cards", path: "/personal/credit-cards" },
        { name: "Mortgages", path: "/personal/mortgages" },
        { name: "Personal Loans", path: "/personal/personal-loans" },
        { name: "Auto Loans", path: "/personal/auto-loans" },
        { name: "Student Loans", path: "/personal/student-loans" },
        { name: "Home Equity Loans", path: "/personal/home-equity-loans" },
        { name: "CDs & Money Market", path: "/personal/cds-money-market" },
        { name: "Online Banking", path: "/personal/online-banking" },
        { name: "Mobile Banking", path: "/personal/mobile-banking" },
        { name: "Overdraft Protection", path: "/personal/overdraft-protection" }
      ]
    },
    {
      category: "Business Banking",
      links: [
        { name: "Business Checking", path: "/business/business-checking" },
        { name: "Business Savings", path: "/business/business-savings" },
        { name: "Business Credit Cards", path: "/business/business-credit-cards" },
        { name: "Business Loans", path: "/business/business-loans" },
        { name: "Merchant Services", path: "/business/merchant-services" },
        { name: "Treasury Management", path: "/business/treasury-management" },
        { name: "Business Lines of Credit", path: "/business/business-lines-of-credit" },
        { name: "Equipment Financing", path: "/business/equipment-financing" },
        { name: "Commercial Real Estate", path: "/business/commercial-real-estate" },
        { name: "SBA Loans", path: "/business/sba-loans" },
        { name: "Payroll Services", path: "/business/payroll-services" },
        { name: "Business Insurance", path: "/business/business-insurance" },
        { name: "International Banking", path: "/business/international-banking" }
      ]
    },
    {
      category: "Wealth Management",
      links: [
        { name: "Investment Management", path: "/wealth/investment-management" },
        { name: "Retirement Planning", path: "/wealth/retirement-planning" },
        { name: "Trust Services", path: "/wealth/trust-services" },
        { name: "Private Banking", path: "/wealth/private-banking" },
        { name: "Financial Planning", path: "/wealth/financial-planning" },
        { name: "Estate Planning", path: "/wealth/estate-planning" },
        { name: "Tax Planning", path: "/wealth/tax-planning" },
        { name: "Insurance Solutions", path: "/wealth/insurance-solutions" },
        { name: "Portfolio Analysis", path: "/wealth/portfolio-analysis" },
        { name: "Alternative Investments", path: "/wealth/alternative-investments" }
      ]
    },
    {
      category: "Services",
      links: [
        { name: "Financial Education", path: "/financial-education" },
        { name: "Mobile App", path: "/mobile-app" },
        { name: "Wire Transfers", path: "/wire-transfers" },
        { name: "Safe Deposit Boxes", path: "/safe-deposit-boxes" },
        { name: "Notary Services", path: "/notary-services" }
      ]
    },
    {
      category: "Account Management",
      links: [
        { name: "Sign In", path: "/sign-in" },
        { name: "Create Account", path: "/create-account" },
        { name: "Forgot Password", path: "/forgot-password" }
      ]
    },
    {
      category: "Legal & Information",
      links: [
        { name: "Security Center", path: "/security-center" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Accessibility", path: "/accessibility" },
        { name: "Site Map", path: "/site-map" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Site Map</h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Navigate through all available pages and services on our website
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {siteStructure.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-t-green-600">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.path}
                          className="flex items-center text-green-600 hover:text-green-700 transition-colors group"
                        >
                          <span className="mr-2">{link.name}</span>
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Finding Something?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Can't find what you're looking for? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/customer-service"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Customer Service
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SiteMap;
