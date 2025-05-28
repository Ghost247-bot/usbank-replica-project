
import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Users, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Banner {
  id: string;
  title: string;
  message: string;
  banner_type: 'info' | 'warning' | 'error' | 'success';
  target_user_id?: string;
  is_active: boolean;
  expires_at?: string;
  created_at: string;
}

const BannerManagement = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [showCreateBanner, setShowCreateBanner] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    banner_type: 'info' as const,
    target_user_id: '',
    expires_at: ''
  });
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const { data, error } = await supabase
        .from('dashboard_banners')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBanners(data || []);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch banners: " + error.message,
      });
    }
  };

  const handleCreateBanner = async () => {
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

      setShowCreateBanner(false);
      setFormData({
        title: '',
        message: '',
        banner_type: 'info',
        target_user_id: '',
        expires_at: ''
      });
      fetchBanners();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleBanner = async (bannerId: string, isActive: boolean) => {
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

  const handleDeleteBanner = async (bannerId: string) => {
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

  const getBannerTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'error': return 'text-red-600 bg-red-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Banner Management</CardTitle>
            <CardDescription>Create and manage dashboard banners</CardDescription>
          </div>
          <Dialog open={showCreateBanner} onOpenChange={setShowCreateBanner}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Banner
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Banner</DialogTitle>
                <DialogDescription>
                  Create a banner to display on user dashboards
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Banner title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
                <Textarea
                  placeholder="Banner message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Select value={formData.banner_type} onValueChange={(value) => setFormData({ ...formData, banner_type: value as any })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Banner type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Info</SelectItem>
                    <SelectItem value="success">Success</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Target User ID (optional)"
                  value={formData.target_user_id}
                  onChange={(e) => setFormData({ ...formData, target_user_id: e.target.value })}
                />
                <Input
                  type="datetime-local"
                  placeholder="Expires at (optional)"
                  value={formData.expires_at}
                  onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })}
                />
                <Button
                  onClick={handleCreateBanner}
                  disabled={loading || !formData.title || !formData.message}
                  className="w-full"
                >
                  Create Banner
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
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
                          Specific User
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
                    onClick={() => handleToggleBanner(banner.id, banner.is_active)}
                  >
                    {banner.is_active ? 'Deactivate' : 'Activate'}
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteBanner(banner.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BannerManagement;
