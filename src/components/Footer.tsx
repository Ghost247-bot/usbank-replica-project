
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Personal Banking",
      links: [
        "Checking Accounts",
        "Savings Accounts",
        "Credit Cards",
        "Personal Loans",
        "Mortgages",
        "Auto Loans"
      ]
    },
    {
      title: "Business Banking",
      links: [
        "Business Checking",
        "Business Savings",
        "Business Loans",
        "Merchant Services",
        "Cash Management",
        "Business Credit Cards"
      ]
    },
    {
      title: "Wealth Management",
      links: [
        "Investment Services",
        "Retirement Planning",
        "Financial Planning",
        "Private Banking",
        "Trust Services",
        "Estate Planning"
      ]
    },
    {
      title: "Support",
      links: [
        "Customer Service",
        "Find Locations",
        "Contact Us",
        "Security Center",
        "Privacy Policy",
        "Terms of Service"
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
                    <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
                      {link}
                    </a>
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
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Terms</a>
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
