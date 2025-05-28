
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CreditCard, Upload } from 'lucide-react';
import { useBankingData } from '@/hooks/useBankingData';
import { useToast } from '@/hooks/use-toast';

const DepositCheck = () => {
  const navigate = useNavigate();
  const { accounts, isLoading } = useBankingData();
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('');
  const [checkNumber, setCheckNumber] = useState('');
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back') => {
    const file = event.target.files?.[0];
    if (file) {
      if (side === 'front') {
        setFrontImage(file);
      } else {
        setBackImage(file);
      }
    }
  };

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !selectedAccount || !checkNumber || !frontImage || !backImage) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields and upload both check images",
      });
      return;
    }

    // Here you would implement the actual check deposit logic
    toast({
      title: "Success",
      description: `Check deposit of $${amount} submitted for review`,
    });

    // Reset form
    setAmount('');
    setSelectedAccount('');
    setCheckNumber('');
    setFrontImage(null);
    setBackImage(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/user-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Deposit Check</h1>
          <p className="text-gray-600 mt-2">Deposit checks quickly and securely using your mobile device</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5" />
              <span>Mobile Check Deposit</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDeposit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="account">Deposit to Account</Label>
                  <Select value={selectedAccount} onValueChange={setSelectedAccount}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts?.map((account) => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.account_name} - ${Number(account.balance).toFixed(2)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Check Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    step="0.01"
                    min="0.01"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="checkNumber">Check Number</Label>
                <Input
                  id="checkNumber"
                  placeholder="Enter check number"
                  value={checkNumber}
                  onChange={(e) => setCheckNumber(e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Front of Check</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'front')}
                      className="hidden"
                      id="front-upload"
                    />
                    <label htmlFor="front-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        {frontImage ? frontImage.name : 'Upload front of check'}
                      </p>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Back of Check</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'back')}
                      className="hidden"
                      id="back-upload"
                    />
                    <label htmlFor="back-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600">
                        {backImage ? backImage.name : 'Upload back of check'}
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Important Notes:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Endorse the back of your check by signing it</li>
                  <li>• Ensure images are clear and all four corners are visible</li>
                  <li>• Keep your check for 30 days after deposit</li>
                  <li>• Deposits are subject to review and may take 1-2 business days</li>
                </ul>
              </div>

              <Button type="submit" className="w-full">
                Submit Check Deposit
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default DepositCheck;
