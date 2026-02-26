
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/hooks/useAuth';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import './App.css';

// Lazy load components for code splitting
const Auth = React.lazy(() => import('@/pages/Auth'));
const UserDashboard = React.lazy(() => import('@/pages/UserDashboard'));
const AdminDashboard = React.lazy(() => import('@/pages/AdminDashboard'));
const TransferMoney = React.lazy(() => import('@/pages/TransferMoney'));
const PayBills = React.lazy(() => import('@/pages/PayBills'));
const DepositCheck = React.lazy(() => import('@/pages/DepositCheck'));
const AccountSettings = React.lazy(() => import('@/pages/AccountSettings'));
const ContactUs = React.lazy(() => import('@/pages/ContactUs'));
const FinancialEducation = React.lazy(() => import('@/pages/FinancialEducation'));
const ScheduleConsultation = React.lazy(() => import('@/pages/ScheduleConsultation'));
const WealthManagement = React.lazy(() => import('@/pages/WealthManagement'));
const PersonalBankingRoutes = React.lazy(() => import('@/routes/PersonalBankingRoutes'));
const BusinessBankingRoutes = React.lazy(() => import('@/routes/BusinessBankingRoutes'));
const WealthManagementRoutes = React.lazy(() => import('@/routes/WealthManagementRoutes'));
const InvestmentOptionsPage = React.lazy(() => import('@/pages/wealth/InvestmentOptionsPage'));
const PortfolioOptionsPage = React.lazy(() => import('@/pages/wealth/PortfolioOptionsPage'));
const StartInvesting = React.lazy(() => import('@/pages/StartInvesting'));
const TotalBalancePage = React.lazy(() => import('@/pages/accounts/TotalBalancePage'));
const CheckingAccountPage = React.lazy(() => import('@/pages/accounts/CheckingAccountPage'));
const SavingsAccountPage = React.lazy(() => import('@/pages/accounts/SavingsAccountPage'));
const InvestmentAccountPage = React.lazy(() => import('@/pages/accounts/InvestmentAccountPage'));
const EscrowAccountPage = React.lazy(() => import('@/pages/accounts/EscrowAccountPage'));
const CreditCardPage = React.lazy(() => import('@/pages/accounts/CreditCardPage'));
const Index = React.lazy(() => import('@/pages/Index'));

// Additional pages
const AboutUs = React.lazy(() => import('@/pages/AboutUs'));
const LearnMore = React.lazy(() => import('@/pages/LearnMore'));
const CheckEquity = React.lazy(() => import('@/pages/CheckEquity'));
const CalculatePayment = React.lazy(() => import('@/pages/CalculatePayment'));
const CreateAccount = React.lazy(() => import('@/pages/CreateAccount'));
const ForgotPassword = React.lazy(() => import('@/pages/ForgotPassword'));
const AdminLogin = React.lazy(() => import('@/pages/AdminLogin'));
const AdminSetup = React.lazy(() => import('@/pages/AdminSetup'));
const MobileApp = React.lazy(() => import('@/pages/MobileApp'));
const WireTransfers = React.lazy(() => import('@/pages/WireTransfers'));
const SafeDepositBoxes = React.lazy(() => import('@/pages/SafeDepositBoxes'));
const NotaryServices = React.lazy(() => import('@/pages/NotaryServices'));
const CustomerService = React.lazy(() => import('@/pages/CustomerService'));
const FindLocations = React.lazy(() => import('@/pages/FindLocations'));
const SecurityCenter = React.lazy(() => import('@/pages/SecurityCenter'));
const PrivacyPolicy = React.lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('@/pages/TermsOfService'));
const Accessibility = React.lazy(() => import('@/pages/Accessibility'));
const SiteMap = React.lazy(() => import('@/pages/SiteMap'));

// Financial Tools Pages
const ExpenseTracker = React.lazy(() => import('@/pages/ExpenseTracker'));
const LoanCalculator = React.lazy(() => import('@/pages/LoanCalculator'));
const HelpCenter = React.lazy(() => import('@/pages/HelpCenter'));
const LiveChat = React.lazy(() => import('@/pages/LiveChat'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Error boundary for lazy loading
const LazyLoadWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (gcTime replaced cacheTime in v5)
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error && typeof error === 'object' && 'status' in error) {
          const status = (error as any).status;
          if (status >= 400 && status < 500) return false;
        }
        return failureCount < 3;
      },
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-white">
              <Routes>
              <Route path="/" element={<LazyLoadWrapper><Index /></LazyLoadWrapper>} />
              <Route path="/auth" element={<LazyLoadWrapper><Auth /></LazyLoadWrapper>} />
              <Route path="/dashboard" element={<LazyLoadWrapper><UserDashboard /></LazyLoadWrapper>} />
              <Route path="/admin" element={<LazyLoadWrapper><AdminDashboard /></LazyLoadWrapper>} />
              <Route path="/transfer-money" element={<LazyLoadWrapper><TransferMoney /></LazyLoadWrapper>} />
              <Route path="/pay-bills" element={<LazyLoadWrapper><PayBills /></LazyLoadWrapper>} />
              <Route path="/deposit-check" element={<LazyLoadWrapper><DepositCheck /></LazyLoadWrapper>} />
              <Route path="/account-settings" element={<LazyLoadWrapper><AccountSettings /></LazyLoadWrapper>} />
              <Route path="/contact-us" element={<LazyLoadWrapper><ContactUs /></LazyLoadWrapper>} />
              <Route path="/financial-education" element={<LazyLoadWrapper><FinancialEducation /></LazyLoadWrapper>} />
              <Route path="/schedule-consultation" element={<LazyLoadWrapper><ScheduleConsultation /></LazyLoadWrapper>} />
              <Route path="/wealth-management" element={<LazyLoadWrapper><WealthManagement /></LazyLoadWrapper>} />
              <Route path="/wealth/investment-options" element={<LazyLoadWrapper><InvestmentOptionsPage /></LazyLoadWrapper>} />
              <Route path="/wealth/portfolio-options" element={<LazyLoadWrapper><PortfolioOptionsPage /></LazyLoadWrapper>} />
              <Route path="/start-investing" element={<LazyLoadWrapper><StartInvesting /></LazyLoadWrapper>} />

              {/* Action Routes */}
              <Route path="/about-us" element={<LazyLoadWrapper><AboutUs /></LazyLoadWrapper>} />
              <Route path="/learn-more" element={<LazyLoadWrapper><LearnMore /></LazyLoadWrapper>} />
              <Route path="/check-equity" element={<LazyLoadWrapper><CheckEquity /></LazyLoadWrapper>} />
              <Route path="/calculate-payment" element={<LazyLoadWrapper><CalculatePayment /></LazyLoadWrapper>} />

              {/* Auth and Dashboard Routes */}
              <Route path="/create-account" element={<LazyLoadWrapper><CreateAccount /></LazyLoadWrapper>} />
              <Route path="/forgot-password" element={<LazyLoadWrapper><ForgotPassword /></LazyLoadWrapper>} />
              <Route path="/admin-login" element={<LazyLoadWrapper><AdminLogin /></LazyLoadWrapper>} />
              <Route path="/admin-setup" element={<LazyLoadWrapper><AdminSetup /></LazyLoadWrapper>} />
              <Route path="/user-dashboard" element={<LazyLoadWrapper><UserDashboard /></LazyLoadWrapper>} />
              <Route path="/admin-dashboard" element={<LazyLoadWrapper><AdminDashboard /></LazyLoadWrapper>} />

              {/* Services Routes */}
              <Route path="/mobile-app" element={<LazyLoadWrapper><MobileApp /></LazyLoadWrapper>} />
              <Route path="/wire-transfers" element={<LazyLoadWrapper><WireTransfers /></LazyLoadWrapper>} />
              <Route path="/safe-deposit-boxes" element={<LazyLoadWrapper><SafeDepositBoxes /></LazyLoadWrapper>} />
              <Route path="/notary-services" element={<LazyLoadWrapper><NotaryServices /></LazyLoadWrapper>} />
              <Route path="/customer-service" element={<LazyLoadWrapper><CustomerService /></LazyLoadWrapper>} />
              <Route path="/find-locations" element={<LazyLoadWrapper><FindLocations /></LazyLoadWrapper>} />
              <Route path="/security-center" element={<LazyLoadWrapper><SecurityCenter /></LazyLoadWrapper>} />
              <Route path="/privacy-policy" element={<LazyLoadWrapper><PrivacyPolicy /></LazyLoadWrapper>} />
              <Route path="/terms-of-service" element={<LazyLoadWrapper><TermsOfService /></LazyLoadWrapper>} />
              <Route path="/accessibility" element={<LazyLoadWrapper><Accessibility /></LazyLoadWrapper>} />
              <Route path="/site-map" element={<LazyLoadWrapper><SiteMap /></LazyLoadWrapper>} />

              {/* Personal Banking Routes */}
              <Route path="/personal/*" element={<LazyLoadWrapper><PersonalBankingRoutes /></LazyLoadWrapper>} />

              {/* Business Banking Routes */}
              <Route path="/business/*" element={<LazyLoadWrapper><BusinessBankingRoutes /></LazyLoadWrapper>} />

              {/* Wealth Management Routes */}
              <Route path="/wealth/*" element={<LazyLoadWrapper><WealthManagementRoutes /></LazyLoadWrapper>} />
              
              {/* Account Pages */}
              <Route path="/accounts/total-balance" element={<LazyLoadWrapper><TotalBalancePage /></LazyLoadWrapper>} />
              <Route path="/accounts/checking" element={<LazyLoadWrapper><CheckingAccountPage /></LazyLoadWrapper>} />
              <Route path="/accounts/savings" element={<LazyLoadWrapper><SavingsAccountPage /></LazyLoadWrapper>} />
              <Route path="/accounts/investment" element={<LazyLoadWrapper><InvestmentAccountPage /></LazyLoadWrapper>} />
              <Route path="/accounts/escrow" element={<LazyLoadWrapper><EscrowAccountPage /></LazyLoadWrapper>} />
              <Route path="/accounts/credit-card" element={<LazyLoadWrapper><CreditCardPage /></LazyLoadWrapper>} />

              {/* Financial Tools Routes */}
              <Route path="/expenses" element={<LazyLoadWrapper><ExpenseTracker /></LazyLoadWrapper>} />
              <Route path="/loan-calculator" element={<LazyLoadWrapper><LoanCalculator /></LazyLoadWrapper>} />
              <Route path="/help" element={<LazyLoadWrapper><HelpCenter /></LazyLoadWrapper>} />
              <Route path="/chat" element={<LazyLoadWrapper><LiveChat /></LazyLoadWrapper>} />
            </Routes>
          </div>
        </QueryClientProvider>
      </Router>
    </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
