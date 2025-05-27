
import React from 'react';
import { Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-red-600">US Bank</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                Personal Banking
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                Business Banking
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                Wealth Management
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </button>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search" 
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm" className="hidden md:flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Button>
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              Open Account
            </Button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
