
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { X, Info, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const DashboardBanner = () => {
  const { user } = useAuth();

  const { data: banners, isLoading, error } = useQuery({
    queryKey: ['dashboard_banners', user?.id],
    queryFn: async () => {
      if (!user) {
        console.log('No user found for banners query');
        return [];
      }
      
      console.log('Fetching banners for user:', user.id);
      
      const { data, error } = await supabase
        .from('dashboard_banners')
        .select('*')
        .eq('is_active', true)
        .or(`target_user_id.is.null,target_user_id.eq.${user.id}`)
        .or('expires_at.is.null,expires_at.gte.now()')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching banners:', error);
        throw error;
      }
      
      console.log('Fetched banners:', data);
      return data || [];
    },
    enabled: !!user,
  });

  const getBannerIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getBannerColors = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'error':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  // Add error logging
  if (error) {
    console.error('Banner query error:', error);
  }

  // Show loading state briefly
  if (isLoading) {
    console.log('Banners loading...');
    return null;
  }

  // Don't show anything if no banners or error
  if (error || !banners || banners.length === 0) {
    console.log('No banners to display:', { error, banners });
    return null;
  }

  console.log('Rendering banners:', banners);

  return (
    <div className="space-y-4 mb-8">
      {banners.map((banner) => (
        <Card key={banner.id} className={`border-l-4 ${getBannerColors(banner.banner_type)}`}>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getBannerIcon(banner.banner_type)}
                <div>
                  <h4 className="font-semibold text-gray-900">{banner.title}</h4>
                  <p className="text-gray-700 mt-1">{banner.message}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardBanner;
