
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BusinessSavingsHero from '@/components/business/savings/BusinessSavingsHero';
import BusinessSavingsFeatures from '@/components/business/savings/BusinessSavingsFeatures';
import BusinessSavingsAccountTypes from '@/components/business/savings/BusinessSavingsAccountTypes';
import BusinessSavingsBenefits from '@/components/business/savings/BusinessSavingsBenefits';
import BusinessSavingsCTA from '@/components/business/savings/BusinessSavingsCTA';

const BusinessSavings = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <BusinessSavingsHero />
        <BusinessSavingsFeatures />
        <BusinessSavingsAccountTypes />
        <BusinessSavingsBenefits />
        <BusinessSavingsCTA />
      </main>

      <Footer />
    </div>
  );
};

export default BusinessSavings;
