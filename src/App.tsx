
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '@/hooks/useAuth';
import './App.css';
import Auth from '@/pages/Auth';
import UserDashboard from '@/pages/UserDashboard';
import AdminDashboard from '@/pages/AdminDashboard';
import TransferMoney from '@/pages/TransferMoney';
import PayBills from '@/pages/PayBills';
import DepositCheck from '@/pages/DepositCheck';
import AccountSettings from '@/pages/AccountSettings';
import ContactUs from '@/pages/ContactUs';
import FinancialEducation from '@/pages/FinancialEducation';
import ScheduleConsultation from '@/pages/ScheduleConsultation';
import WealthManagement from '@/pages/WealthManagement';
import PersonalBankingRoutes from '@/routes/PersonalBankingRoutes';
import BusinessBankingRoutes from '@/routes/BusinessBankingRoutes';
import WealthManagementRoutes from '@/routes/WealthManagementRoutes';
import InvestmentOptionsPage from '@/pages/wealth/InvestmentOptionsPage';
import PortfolioOptionsPage from '@/pages/wealth/PortfolioOptionsPage';
import StartInvesting from '@/pages/StartInvesting';
import TotalBalancePage from '@/pages/accounts/TotalBalancePage';
import CheckingAccountPage from '@/pages/accounts/CheckingAccountPage';
import SavingsAccountPage from '@/pages/accounts/SavingsAccountPage';
import InvestmentAccountPage from '@/pages/accounts/InvestmentAccountPage';
import EscrowAccountPage from '@/pages/accounts/EscrowAccountPage';
import CreditCardPage from '@/pages/accounts/CreditCardPage';
import ViewAllTransactions from '@/pages/ViewAllTransactions';
import ViewAllBills from '@/pages/ViewAllBills';
import ViewAllGoals from '@/pages/ViewAllGoals';
import ManageBudget from '@/pages/ManageBudget';
import Index from '@/pages/Index';

// Import additional pages from routes
import AboutUs from '@/pages/AboutUs';
import LearnMore from '@/pages/LearnMore';
import CheckEquity from '@/pages/CheckEquity';
import CalculatePayment from '@/pages/CalculatePayment';
import CreateAccount from '@/pages/CreateAccount';
import ForgotPassword from '@/pages/ForgotPassword';
import AdminLogin from '@/pages/AdminLogin';
import AdminSetup from '@/pages/AdminSetup';
import MobileApp from '@/pages/MobileApp';
import WireTransfers from '@/pages/WireTransfers';
import SafeDepositBoxes from '@/pages/SafeDepositBoxes';
import NotaryServices from '@/pages/NotaryServices';
import CustomerService from '@/pages/CustomerService';
import FindLocations from '@/pages/FindLocations';
import SecurityCenter from '@/pages/SecurityCenter';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Accessibility from '@/pages/Accessibility';
import SiteMap from '@/pages/SiteMap';

function App() {
  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <Router>
        <QueryClientProvider client={queryClient}>
          <div className="min-h-screen bg-white">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/user-dashboard" element={<UserDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/transfer-money" element={<TransferMoney />} />
              <Route path="/pay-bills" element={<PayBills />} />
              <Route path="/deposit-check" element={<DepositCheck />} />
              <Route path="/account-settings" element={<AccountSettings />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/financial-education" element={<FinancialEducation />} />
              <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
              <Route path="/wealth-management" element={<WealthManagement />} />
              <Route path="/wealth/investment-options" element={<InvestmentOptionsPage />} />
              <Route path="/wealth/portfolio-options" element={<PortfolioOptionsPage />} />
              <Route path="/start-investing" element={<StartInvesting />} />

              {/* Utility Pages */}
              <Route path="/view-all-transactions" element={<ViewAllTransactions />} />
              <Route path="/view-all-bills" element={<ViewAllBills />} />
              <Route path="/view-all-goals" element={<ViewAllGoals />} />
              <Route path="/manage-budget" element={<ManageBudget />} />

              {/* Action Routes */}
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/check-equity" element={<CheckEquity />} />
              <Route path="/calculate-payment" element={<CalculatePayment />} />

              {/* Auth and Dashboard Routes */}
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-setup" element={<AdminSetup />} />

              {/* Services Routes */}
              <Route path="/mobile-app" element={<MobileApp />} />
              <Route path="/wire-transfers" element={<WireTransfers />} />
              <Route path="/safe-deposit-boxes" element={<SafeDepositBoxes />} />
              <Route path="/notary-services" element={<NotaryServices />} />
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="/find-locations" element={<FindLocations />} />
              <Route path="/security-center" element={<SecurityCenter />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/site-map" element={<SiteMap />} />

              {/* Personal Banking Routes */}
              <Route path="/personal/*" element={<PersonalBankingRoutes />} />

              {/* Business Banking Routes */}
              <Route path="/business/*" element={<BusinessBankingRoutes />} />

              {/* Wealth Management Routes */}
              <Route path="/wealth/*" element={<WealthManagementRoutes />} />
              
              {/* Account Pages */}
              <Route path="/accounts/total-balance" element={<TotalBalancePage />} />
              <Route path="/accounts/checking" element={<CheckingAccountPage />} />
              <Route path="/accounts/savings" element={<SavingsAccountPage />} />
              <Route path="/accounts/investment" element={<InvestmentAccountPage />} />
              <Route path="/accounts/escrow" element={<EscrowAccountPage />} />
              <Route path="/accounts/credit-card" element={<CreditCardPage />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
