
import { TrendingUp, PiggyBank, Shield, Users, Crown, FileText, Calculator, BarChart, Coins, CreditCard, Home, Car, GraduationCap, Smartphone, Globe, Building, DollarSign, Briefcase } from 'lucide-react';

export const getPersonalBankingIcon = (title: string) => {
  switch (title) {
    case 'Checking Accounts':
    case 'Savings Accounts':
      return PiggyBank;
    case 'Credit Cards':
      return CreditCard;
    case 'Mortgages':
    case 'Home Equity Loans':
      return Home;
    case 'Auto Loans':
      return Car;
    case 'Student Loans':
      return GraduationCap;
    case 'Online Banking':
      return Globe;
    case 'Mobile Banking':
      return Smartphone;
    case 'Overdraft Protection':
      return Shield;
    default:
      return CreditCard;
  }
};

export const getBusinessBankingIcon = (title: string) => {
  switch (title) {
    case 'Business Checking':
      return Building;
    case 'Business Credit Cards':
      return CreditCard;
    case 'Business Loans':
    case 'Business Lines of Credit':
    case 'SBA Loans':
      return DollarSign;
    case 'Merchant Services':
      return TrendingUp;
    case 'Treasury Management':
      return Briefcase;
    case 'Equipment Financing':
    case 'Commercial Real Estate':
      return Building;
    case 'Payroll Services':
      return Users;
    case 'Business Insurance':
      return Shield;
    case 'International Banking':
      return Globe;
    default:
      return Building;
  }
};

export const getWealthIcon = (title: string) => {
  switch (title) {
    case 'Investment Management':
      return TrendingUp;
    case 'Retirement Planning':
      return PiggyBank;
    case 'Financial Planning':
    case 'Tax Planning':
      return Calculator;
    case 'Estate Planning':
      return FileText;
    case 'Private Banking':
      return Crown;
    case 'Trust Services':
    case 'Insurance Solutions':
      return Shield;
    case 'Portfolio Analysis':
      return BarChart;
    case 'Alternative Investments':
      return Coins;
    default:
      return TrendingUp;
  }
};
