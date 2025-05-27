
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Personal Banking Pages
import CheckingAccounts from "./pages/personal/CheckingAccounts";
import SavingsAccounts from "./pages/personal/SavingsAccounts";
import CreditCards from "./pages/personal/CreditCards";
import Mortgages from "./pages/personal/Mortgages";
import PersonalLoans from "./pages/personal/PersonalLoans";
import AutoLoans from "./pages/personal/AutoLoans";
import StudentLoans from "./pages/personal/StudentLoans";
import HomeEquityLoans from "./pages/personal/HomeEquityLoans";
import CdsMoneyMarket from "./pages/personal/CdsMoneyMarket";
import OnlineBanking from "./pages/personal/OnlineBanking";
import MobileBanking from "./pages/personal/MobileBanking";
import OverdraftProtection from "./pages/personal/OverdraftProtection";

// Business Banking Pages
import BusinessChecking from "./pages/business/BusinessChecking";
import BusinessCreditCards from "./pages/business/BusinessCreditCards";
import BusinessLoans from "./pages/business/BusinessLoans";
import MerchantServices from "./pages/business/MerchantServices";
import TreasuryManagement from "./pages/business/TreasuryManagement";
import BusinessLinesOfCredit from "./pages/business/BusinessLinesOfCredit";
import EquipmentFinancing from "./pages/business/EquipmentFinancing";
import CommercialRealEstate from "./pages/business/CommercialRealEstate";
import SbaLoans from "./pages/business/SbaLoans";
import PayrollServices from "./pages/business/PayrollServices";
import BusinessInsurance from "./pages/business/BusinessInsurance";
import InternationalBanking from "./pages/business/InternationalBanking";

// Wealth Management Pages
import InvestmentManagement from "./pages/wealth/InvestmentManagement";
import RetirementPlanning from "./pages/wealth/RetirementPlanning";
import TrustServices from "./pages/wealth/TrustServices";
import PrivateBanking from "./pages/wealth/PrivateBanking";
import FinancialPlanning from "./pages/wealth/FinancialPlanning";
import EstatePlanning from "./pages/wealth/EstatePlanning";
import TaxPlanning from "./pages/wealth/TaxPlanning";
import InsuranceSolutions from "./pages/wealth/InsuranceSolutions";
import PortfolioAnalysis from "./pages/wealth/PortfolioAnalysis";
import AlternativeInvestments from "./pages/wealth/AlternativeInvestments";

// Services Pages
import FinancialEducation from "./pages/FinancialEducation";
import MobileApp from "./pages/MobileApp";
import WireTransfers from "./pages/WireTransfers";
import SafeDepositBoxes from "./pages/SafeDepositBoxes";
import NotaryServices from "./pages/NotaryServices";

// Other Pages
import AboutUs from "./pages/AboutUs";
import CustomerService from "./pages/CustomerService";
import FindLocations from "./pages/FindLocations";
import ContactUs from "./pages/ContactUs";
import SecurityCenter from "./pages/SecurityCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Authentication and Additional Pages
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import Accessibility from "./pages/Accessibility";
import SiteMap from "./pages/SiteMap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Personal Banking Routes */}
          <Route path="/personal/checking-accounts" element={<CheckingAccounts />} />
          <Route path="/personal/savings-accounts" element={<SavingsAccounts />} />
          <Route path="/personal/credit-cards" element={<CreditCards />} />
          <Route path="/personal/mortgages" element={<Mortgages />} />
          <Route path="/personal/personal-loans" element={<PersonalLoans />} />
          <Route path="/personal/auto-loans" element={<AutoLoans />} />
          <Route path="/personal/student-loans" element={<StudentLoans />} />
          <Route path="/personal/home-equity-loans" element={<HomeEquityLoans />} />
          <Route path="/personal/cds-money-market" element={<CdsMoneyMarket />} />
          <Route path="/personal/online-banking" element={<OnlineBanking />} />
          <Route path="/personal/mobile-banking" element={<MobileBanking />} />
          <Route path="/personal/overdraft-protection" element={<OverdraftProtection />} />

          {/* Business Banking Routes */}
          <Route path="/business/business-checking" element={<BusinessChecking />} />
          <Route path="/business/business-credit-cards" element={<BusinessCreditCards />} />
          <Route path="/business/business-loans" element={<BusinessLoans />} />
          <Route path="/business/merchant-services" element={<MerchantServices />} />
          <Route path="/business/treasury-management" element={<TreasuryManagement />} />
          <Route path="/business/business-lines-of-credit" element={<BusinessLinesOfCredit />} />
          <Route path="/business/equipment-financing" element={<EquipmentFinancing />} />
          <Route path="/business/commercial-real-estate" element={<CommercialRealEstate />} />
          <Route path="/business/sba-loans" element={<SbaLoans />} />
          <Route path="/business/payroll-services" element={<PayrollServices />} />
          <Route path="/business/business-insurance" element={<BusinessInsurance />} />
          <Route path="/business/international-banking" element={<InternationalBanking />} />

          {/* Wealth Management Routes */}
          <Route path="/wealth/investment-management" element={<InvestmentManagement />} />
          <Route path="/wealth/retirement-planning" element={<RetirementPlanning />} />
          <Route path="/wealth/trust-services" element={<TrustServices />} />
          <Route path="/wealth/private-banking" element={<PrivateBanking />} />
          <Route path="/wealth/financial-planning" element={<FinancialPlanning />} />
          <Route path="/wealth/estate-planning" element={<EstatePlanning />} />
          <Route path="/wealth/tax-planning" element={<TaxPlanning />} />
          <Route path="/wealth/insurance-solutions" element={<InsuranceSolutions />} />
          <Route path="/wealth/portfolio-analysis" element={<PortfolioAnalysis />} />
          <Route path="/wealth/alternative-investments" element={<AlternativeInvestments />} />

          {/* Services Routes */}
          <Route path="/financial-education" element={<FinancialEducation />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/wire-transfers" element={<WireTransfers />} />
          <Route path="/safe-deposit-boxes" element={<SafeDepositBoxes />} />
          <Route path="/notary-services" element={<NotaryServices />} />

          {/* Other Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/find-locations" element={<FindLocations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/security-center" element={<SecurityCenter />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Authentication and Additional Routes */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/site-map" element={<SiteMap />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
