
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useBanners } from './banners/useBanners';
import CreateBannerDialog from './banners/CreateBannerDialog';
import BannerList from './banners/BannerList';

const BannerManagement = () => {
  const {
    banners,
    users,
    loading,
    createBanner,
    toggleBanner,
    deleteBanner
  } = useBanners();

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Banner Management</CardTitle>
            <CardDescription>Create and manage dashboard banners for all users or specific users</CardDescription>
          </div>
          <CreateBannerDialog
            users={users}
            onCreateBanner={createBanner}
            loading={loading}
          />
        </div>
      </CardHeader>
      <CardContent>
        <BannerList
          banners={banners}
          users={users}
          onToggleBanner={toggleBanner}
          onDeleteBanner={deleteBanner}
        />
      </CardContent>
    </Card>
  );
};

export default BannerManagement;
