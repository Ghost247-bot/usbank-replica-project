
export interface SearchResult {
  title: string;
  path: string;
  category: string;
}

export const searchData: SearchResult[] = [
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

export const popularSearches: SearchResult[] = [
  { title: 'Credit Cards', path: '/personal/credit-cards', category: 'Popular' },
  { title: 'Online Banking', path: '/personal/online-banking', category: 'Popular' },
  { title: 'Investment Management', path: '/wealth/investment-management', category: 'Popular' },
  { title: 'Business Checking', path: '/business/business-checking', category: 'Popular' }
];
