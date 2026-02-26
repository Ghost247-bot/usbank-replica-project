
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Banner, UserProfile, BannerType } from './types';
import { logger } from '@/lib/logger';

export const useBanners = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchBanners();
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, first_name, last_name')
        .order('first_name', { ascending: true });

      if (error) throw error;
      setUsers(data || []);
    } catch (error: any) {
      logger.error('Error fetching users:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users: " + error.message,
      });
    }
  };

  const fetchBanners = async () => {
    try {
      const { data, error } = await supabase
        .from('dashboard_banners')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const typedBanners = (data || []).map(banner => ({
        ...banner,
        banner_type: banner.banner_type as BannerType
      }));
      
      setBanners(typedBanners);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch banners: " + error.message,
      });
    }
  };

  const createBanner = async (formData: {
    title: string;
    message: string;
    banner_type: BannerType;
    target_user_id: string;
    expires_at: string;
  }) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('dashboard_banners')
        .insert({
          title: formData.title,
          message: formData.message,
          banner_type: formData.banner_type,
          target_user_id: formData.target_user_id || null,
          expires_at: formData.expires_at || null,
          created_by: (await supabase.auth.getUser()).data.user?.id
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Banner created successfully",
      });

      fetchBanners();
      return true;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const toggleBanner = async (bannerId: string, isActive: boolean) => {
    try {
      const { error } = await supabase
        .from('dashboard_banners')
        .update({ is_active: !isActive })
        .eq('id', bannerId);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Banner ${!isActive ? 'activated' : 'deactivated'}`,
      });

      fetchBanners();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  const deleteBanner = async (bannerId: string) => {
    try {
      const { error } = await supabase
        .from('dashboard_banners')
        .delete()
        .eq('id', bannerId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Banner deleted successfully",
      });

      fetchBanners();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  return {
    banners,
    users,
    loading,
    createBanner,
    toggleBanner,
    deleteBanner
  };
};
