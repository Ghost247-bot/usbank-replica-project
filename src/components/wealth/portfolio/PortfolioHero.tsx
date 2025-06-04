
import React from 'react';
import { PieChart, TrendingUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioHero = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Portfolio Management
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Diversified investment portfolios designed to meet your unique financial objectives and risk tolerance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Explore Portfolios
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Get Portfolio Analysis
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <PieChart className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diversified Strategies</h3>
              <p className="text-green-100">Balanced portfolios across multiple asset classes</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Focused</h3>
              <p className="text-green-100">Long-term wealth building strategies</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Goal Oriented</h3>
              <p className="text-green-100">Customized to your financial objectives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
