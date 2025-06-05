
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BusinessChecking from '@/pages/business/BusinessChecking';
import BusinessSavings from '@/pages/business/BusinessSavings';
import BusinessCreditCards from '@/pages/business/BusinessCreditCards';
import BusinessLoans from '@/pages/business/BusinessLoans';
import MerchantServices from '@/pages/business/MerchantServices';
import TreasuryManagement from '@/pages/business/TreasuryManagement';
import BusinessLinesOfCredit from '@/pages/business/BusinessLinesOfCredit';
import EquipmentFinancing from '@/pages/business/EquipmentFinancing';
import CommercialRealEstate from '@/pages/business/CommercialRealEstate';
import SbaLoans from '@/pages/business/SbaLoans';
import PayrollServices from '@/pages/business/PayrollServices';
import BusinessInsurance from '@/pages/business/BusinessInsurance';
import InternationalBanking from '@/pages/business/InternationalBanking';

const BusinessBankingRoutes = () => (
  <Routes>
    <Route path="business-checking" element={<BusinessChecking />} />
    <Route path="business-savings" element={<BusinessSavings />} />
    <Route path="business-credit-cards" element={<BusinessCreditCards />} />
    <Route path="business-loans" element={<BusinessLoans />} />
    <Route path="merchant-services" element={<MerchantServices />} />
    <Route path="treasury-management" element={<TreasuryManagement />} />
    <Route path="business-lines-of-credit" element={<BusinessLinesOfCredit />} />
    <Route path="equipment-financing" element={<EquipmentFinancing />} />
    <Route path="commercial-real-estate" element={<CommercialRealEstate />} />
    <Route path="sba-loans" element={<SbaLoans />} />
    <Route path="payroll-services" element={<PayrollServices />} />
    <Route path="business-insurance" element={<BusinessInsurance />} />
    <Route path="international-banking" element={<InternationalBanking />} />
  </Routes>
);

export default BusinessBankingRoutes;
