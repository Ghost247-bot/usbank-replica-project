
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SiteMap = () => {
  const siteStructure = [
    {
      title: "Personal Banking",
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
      title: "Business Banking",
      links: [
        { name: "Business Checking", path: "/business/business-checking" },
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
      title: "Wealth Management",
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
      title: "Services",
      links: [
        { name: "Financial Education", path: "/financial-education" },
        { name: "Mobile App", path: "/mobile-app" },
        { name: "Wire Transfers", path: "/wire-transfers" },
        { name: "Safe Deposit Boxes", path: "/safe-deposit-boxes" },
        { name: "Notary Services", path: "/notary-services" }
      ]
    },
    {
      title: "About & Support",
      links: [
        { name: "About Us", path: "/about-us" },
        { name: "Customer Service", path: "/customer-service" },
        { name: "Find Locations", path: "/find-locations" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Security Center", path: "/security-center" }
      ]
    },
    {
      title: "Account Access",
      links: [
        { name: "Sign In", path: "/sign-in" },
        { name: "Create Account", path: "/create-account" }
      ]
    },
    {
      title: "Legal",
      links: [
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
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Site Map</h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
                Navigate our complete website structure
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {siteStructure.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 border-b-2 border-green-600 pb-2">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.path}
                          className="text-gray-600 hover:text-green-600 transition-colors text-sm sm:text-base block py-1"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200 text-center">
              <Link 
                to="/"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm sm:text-base"
              >
                ← Return to Homepage
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
