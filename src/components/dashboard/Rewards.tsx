
import React from 'react';
import { Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRewards } from '@/hooks/useRewards';

const Rewards = () => {
  const { totalAvailableRewards, loading, redeemReward, rewards } = useRewards();

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gift className="h-5 w-5" />
            <span>Rewards</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-gray-500">Loading...</div>
        </CardContent>
      </Card>
    );
  }

  const handleRedeemRewards = () => {
    const unredeemedRewards = rewards.filter(reward => !reward.is_redeemed);
    if (unredeemedRewards.length > 0) {
      // For demo purposes, redeem the first available reward
      redeemReward(unredeemedRewards[0].id);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Gift className="h-5 w-5" />
          <span>Rewards</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">
            ${totalAvailableRewards.toFixed(2)}
          </div>
          <p className="text-sm text-gray-600 mb-4">Available Cashback</p>
          <Button 
            size="sm" 
            className="w-full"
            onClick={handleRedeemRewards}
            disabled={totalAvailableRewards === 0}
          >
            {totalAvailableRewards > 0 ? 'Redeem Rewards' : 'No Rewards Available'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Rewards;
