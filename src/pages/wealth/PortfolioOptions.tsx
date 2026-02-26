
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from '@/components/wealth/portfolio/PortfolioHero';
import CorePortfolioGrid from '@/components/wealth/portfolio/CorePortfolioGrid';
import SpecializedPortfolioGrid from '@/components/wealth/portfolio/SpecializedPortfolioGrid';
import PortfolioCTA from '@/components/wealth/portfolio/PortfolioCTA';

const PortfolioOptions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <PortfolioHero />
        <CorePortfolioGrid />
        <SpecializedPortfolioGrid />
        <PortfolioCTA />
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioOptions;
