
import React from 'react';
import { Trash2, Users, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Banner, UserProfile } from './types';
import { getBannerTypeColor, getUserDisplayName } from './utils';

interface BannerListProps {
  banners: Banner[];
  users: UserProfile[];
  onToggleBanner: (bannerId: string, isActive: boolean) => void;
  onDeleteBanner: (bannerId: string) => void;
}

const BannerList: React.FC<BannerListProps> = ({
  banners,
  users,
  onToggleBanner,
  onDeleteBanner
}) => {
  return (
    <div className="space-y-4">
      {banners.map((banner) => (
        <div key={banner.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-medium">{banner.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${getBannerTypeColor(banner.banner_type)}`}>
                  {banner.banner_type}
                </span>
                {banner.is_active ? (
                  <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-600">
                    Active
                  </span>
                ) : (
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-600">
                    Inactive
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-2">{banner.message}</p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  {banner.target_user_id ? (
                    <>
                      <User className="h-3 w-3 mr-1" />
                      {getUserDisplayName(banner.target_user_id, users)}
                    </>
                  ) : (
                    <>
                      <Users className="h-3 w-3 mr-1" />
                      All Users
                    </>
                  )}
                </span>
                {banner.expires_at && (
                  <span>
                    Expires: {new Date(banner.expires_at).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onToggleBanner(banner.id, banner.is_active)}
              >
                {banner.is_active ? 'Deactivate' : 'Activate'}
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDeleteBanner(banner.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerList;
