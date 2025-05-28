import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  path: string;
  category: string;
}

const searchData: SearchResult[] = [
  // Personal Banking
  { title: 'Checking Accounts', path: '/personal/checking-accounts', category: 'Personal Banking' },
  { title: 'Savings Accounts', path: '/personal/savings-accounts', category: 'Personal Banking' },
  { title: 'Credit Cards', path: '/personal/credit-cards', category: 'Personal Banking' },
  { title: 'Mortgages', path: '/personal/mortgages', category: 'Personal Banking' },
  { title: 'Personal Loans', path: '/personal/personal-loans', category: 'Personal Banking' },
  { title: 'Auto Loans', path: '/personal/auto-loans', category: 'Personal Banking' },
  { title: 'Student Loans', path: '/personal/student-loans', category: 'Personal Banking' },
  { title: 'Home Equity Loans', path: '/personal/home-equity-loans', category: 'Personal Banking' },
  { title: 'CDs & Money Market', path: '/personal/cds-money-market', category: 'Personal Banking' },
  { title: 'Online Banking', path: '/personal/online-banking', category: 'Personal Banking' },
  { title: 'Mobile Banking', path: '/personal/mobile-banking', category: 'Personal Banking' },
  { title: 'Overdraft Protection', path: '/personal/overdraft-protection', category: 'Personal Banking' },

  // Business Banking
  { title: 'Business Checking', path: '/business/business-checking', category: 'Business Banking' },
  { title: 'Business Savings', path: '/business/business-savings', category: 'Business Banking' },
  { title: 'Business Credit Cards', path: '/business/business-credit-cards', category: 'Business Banking' },
  { title: 'Business Loans', path: '/business/business-loans', category: 'Business Banking' },
  { title: 'Merchant Services', path: '/business/merchant-services', category: 'Business Banking' },
  { title: 'Treasury Management', path: '/business/treasury-management', category: 'Business Banking' },
  { title: 'Business Lines of Credit', path: '/business/business-lines-of-credit', category: 'Business Banking' },
  { title: 'Equipment Financing', path: '/business/equipment-financing', category: 'Business Banking' },
  { title: 'Commercial Real Estate', path: '/business/commercial-real-estate', category: 'Business Banking' },
  { title: 'SBA Loans', path: '/business/sba-loans', category: 'Business Banking' },
  { title: 'Payroll Services', path: '/business/payroll-services', category: 'Business Banking' },
  { title: 'Business Insurance', path: '/business/business-insurance', category: 'Business Banking' },
  { title: 'International Banking', path: '/business/international-banking', category: 'Business Banking' },

  // Wealth Management
  { title: 'Investment Management', path: '/wealth/investment-management', category: 'Wealth Management' },
  { title: 'Retirement Planning', path: '/wealth/retirement-planning', category: 'Wealth Management' },
  { title: 'Trust Services', path: '/wealth/trust-services', category: 'Wealth Management' },
  { title: 'Private Banking', path: '/wealth/private-banking', category: 'Wealth Management' },
  { title: 'Financial Planning', path: '/wealth/financial-planning', category: 'Wealth Management' },
  { title: 'Estate Planning', path: '/wealth/estate-planning', category: 'Wealth Management' },
  { title: 'Tax Planning', path: '/wealth/tax-planning', category: 'Wealth Management' },
  { title: 'Insurance Solutions', path: '/wealth/insurance-solutions', category: 'Wealth Management' },
  { title: 'Portfolio Analysis', path: '/wealth/portfolio-analysis', category: 'Wealth Management' },
  { title: 'Alternative Investments', path: '/wealth/alternative-investments', category: 'Wealth Management' },
  { title: 'Portfolio Options', path: '/wealth/portfolio-options', category: 'Wealth Management' },
  { title: 'Conservative Growth Portfolio', path: '/wealth/conservative-growth-portfolio', category: 'Wealth Management' },
  { title: 'Moderate Growth Portfolio', path: '/wealth/moderate-growth-portfolio', category: 'Wealth Management' },
  { title: 'Aggressive Growth Portfolio', path: '/wealth/aggressive-growth-portfolio', category: 'Wealth Management' },
  { title: 'Growth Portfolios', path: '/wealth/growth-portfolios', category: 'Wealth Management' },
  { title: 'Income Portfolios', path: '/wealth/income-portfolios', category: 'Wealth Management' },
  { title: 'Balanced Portfolios', path: '/wealth/balanced-portfolios', category: 'Wealth Management' },

  // Services
  { title: 'Financial Education', path: '/financial-education', category: 'Services' },
  { title: 'Mobile App', path: '/mobile-app', category: 'Services' },
  { title: 'Wire Transfers', path: '/wire-transfers', category: 'Services' },
  { title: 'Safe Deposit Boxes', path: '/safe-deposit-boxes', category: 'Services' },
  { title: 'Notary Services', path: '/notary-services', category: 'Services' },
  { title: 'About Us', path: '/about-us', category: 'Services' },
  { title: 'Customer Service', path: '/customer-service', category: 'Services' },
  { title: 'Find Locations', path: '/find-locations', category: 'Services' },
  { title: 'Contact Us', path: '/contact-us', category: 'Services' },
  { title: 'Security Center', path: '/security-center', category: 'Services' },

  // Auth & Actions
  { title: 'Sign In', path: '/sign-in', category: 'Account' },
  { title: 'Create Account', path: '/create-account', category: 'Account' },
  { title: 'User Dashboard', path: '/user-dashboard', category: 'Account' },
  { title: 'Get Started', path: '/get-started', category: 'Actions' },
  { title: 'Learn More', path: '/learn-more', category: 'Actions' },
  { title: 'Get Approved', path: '/get-approved', category: 'Actions' },
  { title: 'Start Investing', path: '/start-investing', category: 'Actions' },
  { title: 'Download App', path: '/download-app', category: 'Actions' },
  { title: 'Schedule Consultation', path: '/schedule-consultation', category: 'Actions' },
  { title: 'Compare Account Options', path: '/compare-account-options', category: 'Actions' },
  { title: 'Compare Rates', path: '/compare-rates', category: 'Actions' },
  { title: 'Get Quote', path: '/get-quote', category: 'Actions' },
];

const SearchBar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Popular searches
  const popularSearches = [
    { title: 'Credit Cards', path: '/personal/credit-cards', category: 'Popular' },
    { title: 'Online Banking', path: '/personal/online-banking', category: 'Popular' },
    { title: 'Investment Management', path: '/wealth/investment-management', category: 'Popular' },
    { title: 'Business Checking', path: '/business/business-checking', category: 'Popular' }
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setSelectedIndex(-1);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 8); // Limit to 8 results

    setSearchResults(filtered);
    setSelectedIndex(-1);
  }, [searchQuery]);

  const addToRecentSearches = (result: SearchResult) => {
    const updated = [result, ...recentSearches.filter(r => r.path !== result.path)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsSearchVisible(false);
      setSearchQuery('');
      setSearchResults([]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => prev < searchResults.length - 1 ? prev + 1 : prev);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && searchResults[selectedIndex]) {
        const result = searchResults[selectedIndex];
        addToRecentSearches(result);
        navigate(result.path);
        setIsSearchVisible(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    }
  };

  const handleResultClick = (result: SearchResult) => {
    addToRecentSearches(result);
    navigate(result.path);
    setIsSearchVisible(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setSelectedIndex(-1);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const closeSearch = () => {
    setIsSearchVisible(false);
    setSearchQuery('');
    setSearchResults([]);
    setSelectedIndex(-1);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchVisible(false);
        setSearchQuery('');
        setSearchResults([]);
      }
    };

    if (isSearchVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchVisible]);

  return (
    <div className="flex items-center relative" ref={searchRef}>
      <div className={`transition-all duration-200 ${
        isSearchVisible 
          ? 'w-32 sm:w-40 md:w-48 lg:w-64' 
          : 'w-8'
      } overflow-visible relative`}>
        {isSearchVisible ? (
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded px-2 sm:px-3 py-1 bg-white shadow-lg">
              <Search className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mr-1 sm:mr-2 flex-shrink-0" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Search pages..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-xs sm:text-sm min-w-0"
                autoFocus
                onBlur={(e) => {
                  // Only close if the blur is not moving to a search result
                  if (!e.relatedTarget || !searchRef.current?.contains(e.relatedTarget as Node)) {
                    setTimeout(() => closeSearch(), 150);
                  }
                }}
              />
              {searchQuery && (
                <button 
                  onClick={clearSearch}
                  className="p-0.5 hover:bg-gray-100 rounded"
                  aria-label="Clear search"
                >
                  <X className="h-3 w-3 text-gray-400" />
                </button>
              )}
            </div>
            
            {/* Search Results or Default Content */}
            {searchQuery.trim() === '' ? (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                {recentSearches.length > 0 && (
                  <div className="p-3">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-2" />
                      Recent Searches
                    </div>
                    {recentSearches.map((result, index) => (
                      <button
                        key={`recent-${index}`}
                        onClick={() => handleResultClick(result)}
                        className="w-full text-left px-2 py-2 hover:bg-gray-50 rounded transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900">{result.title}</div>
                        <div className="text-xs text-gray-500">{result.category}</div>
                      </button>
                    ))}
                  </div>
                )}
                
                <div className="border-t border-gray-200 p-3">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Popular Searches
                  </div>
                  {popularSearches.map((result, index) => (
                    <button
                      key={`popular-${index}`}
                      onClick={() => handleResultClick(result)}
                      className="w-full text-left px-2 py-2 hover:bg-gray-50 rounded transition-colors"
                    >
                      <div className="text-sm font-medium text-gray-900">{result.title}</div>
                      <div className="text-xs text-gray-500">{result.category}</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Search Results Dropdown */}
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <button
                        key={`${result.path}-${index}`}
                        onClick={() => handleResultClick(result)}
                        className={`w-full text-left px-3 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors ${
                          selectedIndex === index ? 'bg-blue-50 border-blue-200' : ''
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-900">{result.title}</div>
                        <div className="text-xs text-gray-500">{result.category}</div>
                      </button>
                    ))}
                  </div>
                )}
                
                {/* No Results Message */}
                {searchQuery.trim() !== '' && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3">
                    <div className="text-sm text-gray-500 text-center">
                      No results found for "{searchQuery}"
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          <button 
            onClick={() => setIsSearchVisible(true)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Open search"
          >
            <Search className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
