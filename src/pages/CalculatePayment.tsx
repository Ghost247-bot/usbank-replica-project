
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, Car, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CalculatePayment = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculatePayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;
    
    if (principal && rate && term) {
      const payment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
      setMonthlyPayment(payment);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Loan Payment Calculator</h1>
            <p className="text-xl">Calculate your monthly loan payments for auto loans, personal loans, and more</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="h-6 w-6 mr-2" />
                  Calculate Your Monthly Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount ($)
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter the loan amount"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter the annual interest rate"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term (years)
                  </label>
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter the loan term in years"
                  />
                </div>
                
                <Button onClick={calculatePayment} className="w-full bg-green-700 hover:bg-green-800">
                  Calculate Payment
                </Button>
                
                {monthlyPayment !== null && (
                  <div className="mt-8 p-6 bg-green-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Your Monthly Payment</h3>
                    <p className="text-3xl font-bold text-green-700">${monthlyPayment.toFixed(2)}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Total amount paid: ${(monthlyPayment * parseFloat(loanTerm) * 12).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Total interest: ${(monthlyPayment * parseFloat(loanTerm) * 12 - parseFloat(loanAmount)).toFixed(2)}
                    </p>
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

export default CalculatePayment;
