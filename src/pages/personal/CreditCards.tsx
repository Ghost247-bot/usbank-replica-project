
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CreditCardsHero from '@/components/personal/creditcards/CreditCardsHero';
import CreditCardsFeatures from '@/components/personal/creditcards/CreditCardsFeatures';
import CreditCardsBenefits from '@/components/personal/creditcards/CreditCardsBenefits';
import CreditCardsOptions from '@/components/personal/creditcards/CreditCardsOptions';
import CreditCardsCTA from '@/components/personal/creditcards/CreditCardsCTA';

const CreditCards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <CreditCardsHero />
        <CreditCardsFeatures />
        <CreditCardsBenefits />
        <CreditCardsOptions />
        <CreditCardsCTA />
      </main>

      <Footer />
    </div>
  );
};

export default CreditCards;
