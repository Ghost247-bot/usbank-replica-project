
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { logger } from '@/lib/logger';

interface Reward {
  id: string;
  reward_type: string;
  amount: number;
  description: string | null;
  is_redeemed: boolean;
  earned_date: string;
  redeemed_date: string | null;
}

export const useRewards = () => {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  const fetchRewards = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('rewards')
        .select('*')
        .eq('user_id', user.id)
        .order('earned_date', { ascending: false });

      if (error) throw error;
      setRewards(data || []);
    } catch (error: any) {
      logger.error('Error fetching rewards:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load rewards",
      });
    } finally {
      setLoading(false);
    }
  };

  const redeemReward = async (id: string) => {
    if (!user) return;
    
    try {
      const { error } = await supabase
        .from('rewards')
        .update({ 
          is_redeemed: true,
          redeemed_date: new Date().toISOString()
        })
        .eq('id', id)
        .eq('user_id', user.id);

      if (error) throw error;
      
      setRewards(prev => 
        prev.map(reward => 
          reward.id === id 
            ? { ...reward, is_redeemed: true, redeemed_date: new Date().toISOString() }
            : reward
        )
      );

      toast({
        title: "Success",
        description: "Reward redeemed successfully!",
      });
    } catch (error: any) {
      logger.error('Error redeeming reward:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to redeem reward",
      });
    }
  };

  useEffect(() => {
    fetchRewards();
  }, [user]);

  const totalAvailableRewards = rewards
    .filter(reward => !reward.is_redeemed)
    .reduce((sum, reward) => sum + reward.amount, 0);

  return { rewards, loading, redeemReward, totalAvailableRewards, refetch: fetchRewards };
};
