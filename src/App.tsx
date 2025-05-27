
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

// Wealth Management Pages
import InvestmentManagement from "./pages/wealth/InvestmentManagement";
import RetirementPlanning from "./pages/wealth/RetirementPlanning";
import TrustServices from "./pages/wealth/TrustServices";
import PrivateBanking from "./pages/wealth/PrivateBanking";

// Other Pages
import AboutUs from "./pages/AboutUs";
import CustomerService from "./pages/CustomerService";
import FindLocations from "./pages/FindLocations";
import ContactUs from "./pages/ContactUs";
import SecurityCenter from "./pages/SecurityCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

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

          {/* Wealth Management Routes */}
          <Route path="/wealth/investment-management" element={<InvestmentManagement />} />
          <Route path="/wealth/retirement-planning" element={<RetirementPlanning />} />
          <Route path="/wealth/trust-services" element={<TrustServices />} />
          <Route path="/wealth/private-banking" element={<PrivateBanking />} />

          {/* Other Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/find-locations" element={<FindLocations />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/security-center" element={<SecurityCenter />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
