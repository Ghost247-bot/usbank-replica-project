
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import PictureSlider from '@/components/PictureSlider';
import FeaturedSection from '@/components/FeaturedSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServiceCards />
      <PictureSlider />
      <FeaturedSection />
      <Footer />
    </div>
  );
};

export default Index;
