
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
        { name: "Business Savings", href: "/business/business-savings" },
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
        { name: "Financial Planning", href: "/wealth/financial-planning" },
        { name: "Private Banking", href: "/wealth/private-banking" },
        { name: "Trust Services", href: "/wealth/trust-services" },
        { name: "Estate Planning", href: "/wealth/estate-planning" }
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <Link to="/">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/9750767c-87e6-4916-be73-ffc602722c54/Logo-with-Crescent-Moon-and-Gemstone-1772138938608.png?width=8000&height=8000&resize=contain" 
                alt="Moonstone Holdings" 
                className="h-16 w-auto object-contain mb-4 mx-auto sm:mx-0 invert brightness-200"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-xs mx-auto sm:mx-0">
              Your trusted financial partner, providing innovative banking solutions 
              to help you achieve your financial goals.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="text-center sm:text-left">
              <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h3>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.href} className="text-gray-400 hover:text-green-500 text-xs sm:text-sm transition-colors block py-1">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2024 Moonstone Holdings. All rights reserved. Member FDIC. Equal Housing Lender.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-green-500 transition-colors py-1">Privacy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-green-500 transition-colors py-1">Terms</Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-green-500 transition-colors py-1">Accessibility</Link>
              <Link to="/site-map" className="text-gray-400 hover:text-green-500 transition-colors py-1">Site Map</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
