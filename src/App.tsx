import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import InvestmentOptionsPage from '@/pages/wealth/InvestmentOptionsPage';
import PortfolioOptionsPage from '@/pages/wealth/PortfolioOptionsPage';
import StartInvesting from '@/pages/StartInvesting';
import TotalBalancePage from '@/pages/accounts/TotalBalancePage';
import CheckingAccountPage from '@/pages/accounts/CheckingAccountPage';
import SavingsAccountPage from '@/pages/accounts/SavingsAccountPage';
import InvestmentAccountPage from '@/pages/accounts/InvestmentAccountPage';
import EscrowAccountPage from '@/pages/accounts/EscrowAccountPage';
import CreditCardPage from '@/pages/accounts/CreditCardPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
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

            {/* Personal Banking Routes */}
            <Route path="/personal/*" element={<PersonalBankingRoutes />} />

            {/* Business Banking Routes */}
            <Route path="/business/*" element={<BusinessBankingRoutes />} />
            
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
  );
}

export default App;
