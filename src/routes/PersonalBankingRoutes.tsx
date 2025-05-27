
import { Route } from "react-router-dom";
import CheckingAccounts from "@/pages/personal/CheckingAccounts";
import SavingsAccounts from "@/pages/personal/SavingsAccounts";
import CreditCards from "@/pages/personal/CreditCards";
import Mortgages from "@/pages/personal/Mortgages";
import PersonalLoans from "@/pages/personal/PersonalLoans";
import AutoLoans from "@/pages/personal/AutoLoans";
import StudentLoans from "@/pages/personal/StudentLoans";
import HomeEquityLoans from "@/pages/personal/HomeEquityLoans";
import CdsMoneyMarket from "@/pages/personal/CdsMoneyMarket";
import OnlineBanking from "@/pages/personal/OnlineBanking";
import MobileBanking from "@/pages/personal/MobileBanking";
import OverdraftProtection from "@/pages/personal/OverdraftProtection";

const PersonalBankingRoutes = () => (
  <>
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
  </>
);

export default PersonalBankingRoutes;
