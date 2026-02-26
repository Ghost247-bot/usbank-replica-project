import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, DollarSign, TrendingUp, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LoanCalculation {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  amortization: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}

const LoanCalculator = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState('250000');
  const [interestRate, setInterestRate] = useState('6.5');
  const [loanTerm, setLoanTerm] = useState('30');
  const [calculation, setCalculation] = useState<LoanCalculation | null>(null);

  const loanTerms = [
    { value: '10', label: '10 years' },
    { value: '15', label: '15 years' },
    { value: '20', label: '20 years' },
    { value: '25', label: '25 years' },
    { value: '30', label: '30 years' }
  ];

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate) / 100;
    const monthlyRate = annualRate / 12;
    const numberOfPayments = parseInt(loanTerm) * 12;

    if (principal > 0 && annualRate > 0 && numberOfPayments > 0) {
      // Calculate monthly payment
      const monthlyPayment = principal * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const totalPayment = monthlyPayment * numberOfPayments;
      const totalInterest = totalPayment - principal;

      // Generate amortization schedule
      const amortization = [];
      let balance = principal;

      for (let month = 1; month <= Math.min(numberOfPayments, 12); month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;

        amortization.push({
          month,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interestPayment,
          balance: Math.max(0, balance)
        });
      }

      setCalculation({
        monthlyPayment,
        totalPayment,
        totalInterest,
        amortization
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900">Loan Calculator</h1>
          <p className="text-gray-600 mt-2">Calculate monthly payments and total loan costs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-5 w-5 mr-2" />
                  Loan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="250000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="6.5"
                  />
                </div>
                
                <div>
                  <Label htmlFor="loanTerm">Loan Term</Label>
                  <Select value={loanTerm} onValueChange={setLoanTerm}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan term" />
                    </SelectTrigger>
                    <SelectContent>
                      {loanTerms.map(term => (
                        <SelectItem key={term.value} value={term.value}>
                          {term.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button onClick={calculateLoan} className="w-full">
                  Calculate Payment
                </Button>
              </CardContent>
            </Card>

            {/* Quick Examples */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => {
                    setLoanAmount('250000');
                    setInterestRate('6.5');
                    setLoanTerm('30');
                  }}
                >
                  30yr Mortgage $250k @ 6.5%
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => {
                    setLoanAmount('35000');
                    setInterestRate('4.5');
                    setLoanTerm('5');
                  }}
                >
                  5yr Auto $35k @ 4.5%
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => {
                    setLoanAmount('15000');
                    setInterestRate('8.9');
                    setLoanTerm('3');
                  }}
                >
                  3yr Personal $15k @ 8.9%
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-6">
            {calculation && (
              <>
                {/* Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2" />
                      Payment Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {formatCurrency(calculation.monthlyPayment)}
                        </div>
                        <div className="text-sm text-gray-500">Monthly Payment</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {formatCurrency(calculation.totalPayment)}
                        </div>
                        <div className="text-sm text-gray-500">Total Payment</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">
                          {formatCurrency(calculation.totalInterest)}
                        </div>
                        <div className="text-sm text-gray-500">Total Interest</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Amortization Schedule */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      First Year Amortization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Month</th>
                            <th className="text-right py-2">Payment</th>
                            <th className="text-right py-2">Principal</th>
                            <th className="text-right py-2">Interest</th>
                            <th className="text-right py-2">Balance</th>
                          </tr>
                        </thead>
                        <tbody>
                          {calculation.amortization.map((row) => (
                            <tr key={row.month} className="border-b">
                              <td className="py-2">{row.month}</td>
                              <td className="text-right py-2">{formatCurrency(row.payment)}</td>
                              <td className="text-right py-2">{formatCurrency(row.principal)}</td>
                              <td className="text-right py-2">{formatCurrency(row.interest)}</td>
                              <td className="text-right py-2">{formatCurrency(row.balance)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-500">
                      Showing first 12 months of {parseInt(loanTerm) * 12} total payments
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {!calculation && (
              <Card>
                <CardContent className="text-center py-12">
                  <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Ready to Calculate
                  </h3>
                  <p className="text-gray-500">
                    Enter loan details and click "Calculate Payment" to see your monthly payment and amortization schedule.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoanCalculator;
