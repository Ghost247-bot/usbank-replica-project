
import { Route } from "react-router-dom";
import InvestmentManagement from "@/pages/wealth/InvestmentManagement";
import RetirementPlanning from "@/pages/wealth/RetirementPlanning";
import TrustServices from "@/pages/wealth/TrustServices";
import PrivateBanking from "@/pages/wealth/PrivateBanking";
import FinancialPlanning from "@/pages/wealth/FinancialPlanning";
import EstatePlanning from "@/pages/wealth/EstatePlanning";
import TaxPlanning from "@/pages/wealth/TaxPlanning";
import InsuranceSolutions from "@/pages/wealth/InsuranceSolutions";
import PortfolioAnalysis from "@/pages/wealth/PortfolioAnalysis";
import AlternativeInvestments from "@/pages/wealth/AlternativeInvestments";
import PortfolioOptions from "@/pages/wealth/PortfolioOptions";
import ConservativeGrowthPortfolio from "@/pages/wealth/ConservativeGrowthPortfolio";
import ModerateGrowthPortfolio from "@/pages/wealth/ModerateGrowthPortfolio";
import AggressiveGrowthPortfolio from "@/pages/wealth/AggressiveGrowthPortfolio";
import GrowthPortfolios from "@/pages/wealth/GrowthPortfolios";
import IncomePortfolios from "@/pages/wealth/IncomePortfolios";
import BalancedPortfolios from "@/pages/wealth/BalancedPortfolios";

const WealthManagementRoutes = () => (
  <>
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
    <Route path="/wealth/portfolio-options" element={<PortfolioOptions />} />
    <Route path="/wealth/conservative-growth-portfolio" element={<ConservativeGrowthPortfolio />} />
    <Route path="/wealth/moderate-growth-portfolio" element={<ModerateGrowthPortfolio />} />
    <Route path="/wealth/aggressive-growth-portfolio" element={<AggressiveGrowthPortfolio />} />
    <Route path="/wealth/growth-portfolios" element={<GrowthPortfolios />} />
    <Route path="/wealth/income-portfolios" element={<IncomePortfolios />} />
    <Route path="/wealth/balanced-portfolios" element={<BalancedPortfolios />} />
  </>
);

export default WealthManagementRoutes;
