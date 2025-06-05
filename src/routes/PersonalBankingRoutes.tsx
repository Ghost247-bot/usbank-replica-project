
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CheckingAccounts from '@/pages/personal/CheckingAccounts';
import SavingsAccounts from '@/pages/personal/SavingsAccounts';
import CreditCards from '@/pages/personal/CreditCards';
import Mortgages from '@/pages/personal/Mortgages';
import PersonalLoans from '@/pages/personal/PersonalLoans';
import AutoLoans from '@/pages/personal/AutoLoans';
import StudentLoans from '@/pages/personal/StudentLoans';
import HomeEquityLoans from '@/pages/personal/HomeEquityLoans';
import CdsMoneyMarket from '@/pages/personal/CdsMoneyMarket';
import OnlineBanking from '@/pages/personal/OnlineBanking';
import MobileBanking from '@/pages/personal/MobileBanking';
import OverdraftProtection from '@/pages/personal/OverdraftProtection';

const PersonalBankingRoutes = () => (
  <Routes>
    <Route path="checking-accounts" element={<CheckingAccounts />} />
    <Route path="savings-accounts" element={<SavingsAccounts />} />
    <Route path="credit-cards" element={<CreditCards />} />
    <Route path="mortgages" element={<Mortgages />} />
    <Route path="personal-loans" element={<PersonalLoans />} />
    <Route path="auto-loans" element={<AutoLoans />} />
    <Route path="student-loans" element={<StudentLoans />} />
    <Route path="home-equity-loans" element={<HomeEquityLoans />} />
    <Route path="cds-money-market" element={<CdsMoneyMarket />} />
    <Route path="online-banking" element={<OnlineBanking />} />
    <Route path="mobile-banking" element={<MobileBanking />} />
    <Route path="overdraft-protection" element={<OverdraftProtection />} />
  </Routes>
);

export default PersonalBankingRoutes;
