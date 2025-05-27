import React, { useState } from 'react';
import { Search, User, Menu, X, ChevronDown, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const personalBankingItems = [
    { title: "Checking Accounts", description: "Everyday banking made simple", href: "#" },
    { title: "Savings Accounts", description: "Grow your money with us", href: "#" },
    { title: "Credit Cards", description: "Find the right card for you", href: "#" },
    { title: "Mortgages", description: "Home financing solutions", href: "#" },
    { title: "Personal Loans", description: "Funding for your needs", href: "#" },
    { title: "Auto Loans", description: "Drive your dream car", href: "#" },
  ];

  const businessBankingItems = [
    { title: "Business Checking", description: "Streamline your business banking", href: "#" },
    { title: "Business Credit Cards", description: "Flexible payment solutions", href: "#" },
    { title: "Business Loans", description: "Fuel your business growth", href: "#" },
    { title: "Merchant Services", description: "Accept payments anywhere", href: "#" },
    { title: "Treasury Management", description: "Optimize cash flow", href: "#" },
    { title: "Business Lines of Credit", description: "Access funds when needed", href: "#" },
  ];

  const wealthItems = [
    { title: "Investment Management", description: "Professional portfolio management", href: "#" },
    { title: "Retirement Planning", description: "Secure your financial future", href: "#" },
    { title: "Trust Services", description: "Protect and transfer wealth", href: "#" },
    { title: "Private Banking", description: "Exclusive banking services", href: "#" },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-gray-900 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Find a Branch</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>1-800-USBANKS</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>24/7 Customer Service</span>
              <span className="text-gray-300">|</span>
              <span>Security Center</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg border-b sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-3xl font-bold text-green-700 transform transition-all duration-300 hover:scale-110 cursor-pointer flex items-center">
                  <div className="w-10 h-10 bg-green-700 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  US Bank
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-green-700 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-green-50">
                      Personal Banking
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[600px] lg:grid-cols-2">
                        {personalBankingItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700"
                          >
                            <div className="text-sm font-medium leading-none group-hover:text-green-700">
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              {item.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-green-700 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-green-50">
                      Business Banking
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[600px] lg:grid-cols-2">
                        {businessBankingItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700"
                          >
                            <div className="text-sm font-medium leading-none group-hover:text-green-700">
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              {item.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-green-700 px-4 py-2 text-sm font-medium transition-all duration-300 bg-transparent hover:bg-green-50">
                      Wealth Management
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 w-[500px]">
                        {wealthItems.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700"
                          >
                            <div className="text-sm font-medium leading-none group-hover:text-green-700">
                              {item.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                              {item.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <button className="text-gray-700 hover:text-green-700 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-green-50 rounded-md">
                      About Us
                    </button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-3">
              {/* Desktop Search */}
              <div className="hidden lg:flex items-center">
                <div className={`transition-all duration-300 ${isSearchVisible ? 'w-64' : 'w-10'} overflow-hidden`}>
                  {isSearchVisible ? (
                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                      <Search className="h-4 w-4 text-gray-500 mr-2" />
                      <input 
                        type="text" 
                        placeholder="Search products, services..." 
                        className="flex-1 bg-transparent outline-none text-sm"
                        autoFocus
                        onBlur={() => setIsSearchVisible(false)}
                      />
                    </div>
                  ) : (
                    <button 
                      onClick={() => setIsSearchVisible(true)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                    >
                      <Search className="h-5 w-5 text-gray-500 hover:text-green-700" />
                    </button>
                  )}
                </div>
              </div>

              {/* Sign In Button */}
              <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-2 border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 hover:scale-105">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Button>

              {/* Open Account Button */}
              <Button size="sm" className="bg-green-700 hover:bg-green-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg px-6">
                Open Account
              </Button>

              {/* Mobile menu button */}
              <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-500" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3">
                <Search className="h-5 w-5 text-gray-500 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-2">
                <div className="border-b pb-2">
                  <button className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium">
                    Personal Banking
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
                <div className="border-b pb-2">
                  <button className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium">
                    Business Banking
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
                <div className="border-b pb-2">
                  <button className="w-full text-left flex items-center justify-between py-3 text-gray-700 hover:text-green-700 font-medium">
                    Wealth Management
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
                <div className="border-b pb-2">
                  <button className="w-full text-left py-3 text-gray-700 hover:text-green-700 font-medium">
                    About Us
                  </button>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="space-y-3 pt-4">
                <Button variant="outline" className="w-full border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button className="w-full bg-green-700 hover:bg-green-800">
                  Open Account
                </Button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Find a Branch</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-USBANKS</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
