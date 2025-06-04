
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InvestmentHero from '@/components/wealth/investment/InvestmentHero';
import InvestmentOptions from '@/components/wealth/investment/InvestmentOptions';
import InvestmentFeatures from '@/components/wealth/investment/InvestmentFeatures';
import InvestmentBenefits from '@/components/wealth/investment/InvestmentBenefits';
import InvestmentCTA from '@/components/wealth/investment/InvestmentCTA';

const InvestmentOptionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <InvestmentHero />
        <InvestmentOptions />
        <InvestmentFeatures />
        <InvestmentBenefits />
        <InvestmentCTA />
      </main>

      <Footer />
    </div>
  );
};

export default InvestmentOptionsPage;
