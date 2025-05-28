
import React from 'react';
import { Button } from '@/components/ui/button';

const CreditCardsOptions = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Find your perfect card
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Compare our most popular credit cards
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">Cash Rewards Card</h3>
            <div className="text-3xl font-bold text-green-700 mb-4">1.5% Cash Back</div>
            <p className="text-gray-600 mb-6">Earn cash back on all purchases</p>
            <ul className="space-y-2 mb-6">
              <li>• 1.5% cash back on all purchases</li>
              <li>• No annual fee</li>
              <li>• 0% intro APR for 15 months</li>
              <li>• No foreign transaction fees</li>
            </ul>
            <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
              Apply Now
            </Button>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-700">
            <div className="text-center mb-4">
              <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Most Popular</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Travel Rewards Card</h3>
            <div className="text-3xl font-bold text-green-700 mb-4">2X Points</div>
            <p className="text-gray-600 mb-6">Earn points on travel and dining</p>
            <ul className="space-y-2 mb-6">
              <li>• 2X points on travel & dining</li>
              <li>• 1X points on all other purchases</li>
              <li>• 60,000 bonus points welcome offer</li>
              <li>• Travel insurance included</li>
            </ul>
            <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
              Apply Now
            </Button>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border">
            <h3 className="text-2xl font-bold mb-4">Premium Card</h3>
            <div className="text-3xl font-bold text-green-700 mb-4">3X Points</div>
            <p className="text-gray-600 mb-6">Premium rewards and benefits</p>
            <ul className="space-y-2 mb-6">
              <li>• 3X points on select categories</li>
              <li>• Airport lounge access</li>
              <li>• Concierge service</li>
              <li>• Premium travel benefits</li>
            </ul>
            <Button className="w-full bg-green-700 hover:bg-green-800 text-white py-3">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardsOptions;
