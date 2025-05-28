
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AutoLoansHero from '@/components/personal/auto/AutoLoansHero';
import AutoLoansFeatures from '@/components/personal/auto/AutoLoansFeatures';
import AutoLoansBenefits from '@/components/personal/auto/AutoLoansBenefits';
import AutoLoansTypes from '@/components/personal/auto/AutoLoansTypes';
import AutoLoansCTA from '@/components/personal/auto/AutoLoansCTA';

const AutoLoans = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <AutoLoansHero />
        <AutoLoansFeatures />
        <AutoLoansBenefits />
        <AutoLoansTypes />
        <AutoLoansCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AutoLoans;
