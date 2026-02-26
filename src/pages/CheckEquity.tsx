
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, Home, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CheckEquity = () => {
  const [homeValue, setHomeValue] = useState('');
  const [mortgageBalance, setMortgageBalance] = useState('');
  const [equity, setEquity] = useState<number | null>(null);
  const [equityPercentage, setEquityPercentage] = useState<number | null>(null);

  const calculateEquity = () => {
    const value = parseFloat(homeValue);
    const balance = parseFloat(mortgageBalance);
    
    if (value && balance >= 0) {
      const calculatedEquity = value - balance;
      const percentage = (calculatedEquity / value) * 100;
      setEquity(calculatedEquity);
      setEquityPercentage(percentage);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Home Equity Calculator</h1>
            <p className="text-xl">Calculate your home equity and explore your borrowing options</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="h-6 w-6 mr-2" />
                  Calculate Your Home Equity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Home Value ($)
                  </label>
                  <input
                    type="number"
                    value={homeValue}
                    onChange={(e) => setHomeValue(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your home's current value"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Remaining Mortgage Balance ($)
                  </label>
                  <input
                    type="number"
                    value={mortgageBalance}
                    onChange={(e) => setMortgageBalance(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your remaining mortgage balance"
                  />
                </div>
                
                <Button onClick={calculateEquity} className="w-full bg-green-700 hover:bg-green-800">
                  Calculate Equity
                </Button>
                
                {equity !== null && (
                  <div className="mt-8 p-6 bg-green-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Your Home Equity</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Total Equity</p>
                        <p className="text-2xl font-bold text-green-700">${equity.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Equity Percentage</p>
                        <p className="text-2xl font-bold text-green-700">{equityPercentage?.toFixed(1)}%</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CheckEquity;
