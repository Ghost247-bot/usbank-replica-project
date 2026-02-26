
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import InvestmentManagement from '@/pages/wealth/InvestmentManagement';
import PortfolioAnalysis from '@/pages/wealth/PortfolioAnalysis';
import RetirementPlanning from '@/pages/wealth/RetirementPlanning';
import PrivateBanking from '@/pages/wealth/PrivateBanking';
import TrustServices from '@/pages/wealth/TrustServices';
import FinancialPlanning from '@/pages/wealth/FinancialPlanning';
import TaxPlanning from '@/pages/wealth/TaxPlanning';
import EstatePlanning from '@/pages/wealth/EstatePlanning';
import InsuranceSolutions from '@/pages/wealth/InsuranceSolutions';
import AlternativeInvestments from '@/pages/wealth/AlternativeInvestments';
import GrowthPortfolios from '@/pages/wealth/GrowthPortfolios';
import IncomePortfolios from '@/pages/wealth/IncomePortfolios';
import BalancedPortfolios from '@/pages/wealth/BalancedPortfolios';
import ConservativeGrowthPortfolio from '@/pages/wealth/ConservativeGrowthPortfolio';
import ModerateGrowthPortfolio from '@/pages/wealth/ModerateGrowthPortfolio';
import AggressiveGrowthPortfolio from '@/pages/wealth/AggressiveGrowthPortfolio';

const WealthManagementRoutes = () => (
  <Routes>
    <Route path="investment-management" element={<InvestmentManagement />} />
    <Route path="portfolio-analysis" element={<PortfolioAnalysis />} />
    <Route path="retirement-planning" element={<RetirementPlanning />} />
    <Route path="private-banking" element={<PrivateBanking />} />
    <Route path="trust-services" element={<TrustServices />} />
    <Route path="financial-planning" element={<FinancialPlanning />} />
    <Route path="tax-planning" element={<TaxPlanning />} />
    <Route path="estate-planning" element={<EstatePlanning />} />
    <Route path="insurance-solutions" element={<InsuranceSolutions />} />
    <Route path="alternative-investments" element={<AlternativeInvestments />} />
    <Route path="growth-portfolios" element={<GrowthPortfolios />} />
    <Route path="income-portfolios" element={<IncomePortfolios />} />
    <Route path="balanced-portfolios" element={<BalancedPortfolios />} />
    <Route path="conservative-growth" element={<ConservativeGrowthPortfolio />} />
    <Route path="moderate-growth" element={<ModerateGrowthPortfolio />} />
    <Route path="aggressive-growth" element={<AggressiveGrowthPortfolio />} />
  </Routes>
);

export default WealthManagementRoutes;
