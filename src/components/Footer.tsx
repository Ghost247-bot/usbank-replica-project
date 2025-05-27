
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Personal Banking",
      links: [
        { name: "Checking Accounts", href: "/personal/checking-accounts" },
        { name: "Savings Accounts", href: "/personal/savings-accounts" },
        { name: "Credit Cards", href: "/personal/credit-cards" },
        { name: "Personal Loans", href: "/personal/personal-loans" },
        { name: "Mortgages", href: "/personal/mortgages" },
        { name: "Auto Loans", href: "/personal/auto-loans" }
      ]
    },
    {
      title: "Business Banking",
      links: [
        { name: "Business Checking", href: "/business/business-checking" },
        { name: "Business Savings", href: "/business/business-checking" },
        { name: "Business Loans", href: "/business/business-loans" },
        { name: "Merchant Services", href: "/business/merchant-services" },
        { name: "Cash Management", href: "/business/treasury-management" },
        { name: "Business Credit Cards", href: "/business/business-credit-cards" }
      ]
    },
    {
      title: "Wealth Management",
      links: [
        { name: "Investment Services", href: "/wealth/investment-management" },
        { name: "Retirement Planning", href: "/wealth/retirement-planning" },
        { name: "Financial Planning", href: "/wealth/investment-management" },
        { name: "Private Banking", href: "/wealth/private-banking" },
        { name: "Trust Services", href: "/wealth/trust-services" },
        { name: "Estate Planning", href: "/wealth/trust-services" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Customer Service", href: "/customer-service" },
        { name: "Find Locations", href: "/find-locations" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Security Center", href: "/security-center" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-green-500 mb-4">US Bank</div>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted financial partner, providing innovative banking solutions 
              to help you achieve your financial goals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.href} className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 US Bank. All rights reserved. Member FDIC. Equal Housing Lender.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-green-500 transition-colors">Privacy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-green-500 transition-colors">Terms</Link>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Accessibility</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
