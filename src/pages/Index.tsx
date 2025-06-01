
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceCards from '@/components/ServiceCards';
import FeaturedSection from '@/components/FeaturedSection';
import PictureSlider from '@/components/PictureSlider';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <main className="w-full">
        <Hero />
        <ServiceCards />
        <FeaturedSection />
        <PictureSlider />
        
        {!user && (
          <section className="py-12 sm:py-16 bg-blue-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8">Join thousands of customers who trust Moonstone Bank</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Link to="/auth">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                    Open an Account
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
