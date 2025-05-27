
import { Route } from "react-router-dom";
import BusinessChecking from "@/pages/business/BusinessChecking";
import BusinessSavings from "@/pages/business/BusinessSavings";
import BusinessCreditCards from "@/pages/business/BusinessCreditCards";
import BusinessLoans from "@/pages/business/BusinessLoans";
import MerchantServices from "@/pages/business/MerchantServices";
import TreasuryManagement from "@/pages/business/TreasuryManagement";
import BusinessLinesOfCredit from "@/pages/business/BusinessLinesOfCredit";
import EquipmentFinancing from "@/pages/business/EquipmentFinancing";
import CommercialRealEstate from "@/pages/business/CommercialRealEstate";
import SbaLoans from "@/pages/business/SbaLoans";
import PayrollServices from "@/pages/business/PayrollServices";
import BusinessInsurance from "@/pages/business/BusinessInsurance";
import InternationalBanking from "@/pages/business/InternationalBanking";

const BusinessBankingRoutes = () => (
  <>
    <Route path="/business/business-checking" element={<BusinessChecking />} />
    <Route path="/business/business-savings" element={<BusinessSavings />} />
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
  </>
);

export default BusinessBankingRoutes;
