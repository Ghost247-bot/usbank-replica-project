import React, { useState, useEffect } from 'react';
import { User, Camera, Save, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ProfileData {
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  profile_picture_url?: string;
}

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true); // Changed to true for auto-minimize
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({});

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
    // Check if page was refreshed and minimize profile
    const wasRefreshed = sessionStorage.getItem('profileRefreshed');
    if (wasRefreshed) {
      setIsMinimized(true);
      sessionStorage.removeItem('profileRefreshed');
    }
  }, [user]);

  // Set flag for page refresh detection
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('profileRefreshed', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
        return;
      }

      if (data) {
        // Convert the database data to match our ProfileData interface
        const convertedData: ProfileData = {
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          phone: data.phone || '',
          profile_picture_url: data.profile_picture_url || '',
          address: typeof data.address === 'object' && data.address !== null 
            ? data.address as { street?: string; city?: string; state?: string; zipCode?: string; country?: string; }
            : {
                street: '',
                city: '',
                state: '',
                zipCode: '',
                country: ''
              }
        };
        setProfileData(convertedData);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleSave = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          ...profileData,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'id'
        });

      if (error) throw error;

      toast.success('Profile updated successfully');
      setIsEditing(false);
      setIsMinimized(true); // Minimize after successful save
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith('address.')) {
      const addressField = field.split('.')[1];
      setProfileData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setProfileData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('profiles')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('profiles')
        .getPublicUrl(fileName);

      setProfileData(prev => ({
        ...prev,
        profile_picture_url: publicUrl
      }));

      // Update the database immediately
      const { error: updateError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          profile_picture_url: publicUrl,
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'id'
        });

      if (updateError) throw updateError;

      toast.success('Profile picture updated successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Failed to upload profile picture');
    } finally {
      setUploading(false);
    }
  };

  const getInitials = () => {
    const firstName = profileData.first_name || user?.user_metadata?.first_name || '';
    const lastName = profileData.last_name || user?.user_metadata?.last_name || '';
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Information
              </CardTitle>
              <CardDescription>
                Manage your personal information and profile picture
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!isMinimized && !isEditing ? (
              <Button onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            ) : !isMinimized && isEditing ? (
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button onClick={handleSave} disabled={loading}>
                  <Save className="h-4 w-4 mr-2" />
                  {loading ? 'Saving...' : 'Save'}
                </Button>
              </div>
            ) : null}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronUp className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {!isMinimized && (
        <CardContent>
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={profileData.profile_picture_url} />
                <AvatarFallback className="text-lg">
                  {getInitials() || 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <Label htmlFor="profile-picture" className="cursor-pointer">
                  <div className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                    <Camera className="h-4 w-4" />
                    {uploading ? 'Uploading...' : 'Change Photo'}
                  </div>
                </Label>
                <input
                  id="profile-picture"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={uploading}
                />
                <p className="text-xs text-gray-500 mt-1">
                  JPG, PNG or GIF up to 10MB
                </p>
              </div>
            </div>

            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first_name">First Name</Label>
                <Input
                  id="first_name"
                  value={profileData.first_name || ''}
                  onChange={(e) => handleInputChange('first_name', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <Label htmlFor="last_name">Last Name</Label>
                <Input
                  id="last_name"
                  value={profileData.last_name || ''}
                  onChange={(e) => handleInputChange('last_name', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={profileData.phone || ''}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                disabled={!isEditing}
                placeholder="Enter your phone number"
              />
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Address</h3>
              <div>
                <Label htmlFor="street">Street Address</Label>
                <Input
                  id="street"
                  value={profileData.address?.street || ''}
                  onChange={(e) => handleInputChange('address.street', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Enter your street address"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={profileData.address?.city || ''}
                    onChange={(e) => handleInputChange('address.city', e.target.value)}
                    disabled={!isEditing}
                    placeholder="City"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={profileData.address?.state || ''}
                    onChange={(e) => handleInputChange('address.state', e.target.value)}
                    disabled={!isEditing}
                    placeholder="State"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    value={profileData.address?.zipCode || ''}
                    onChange={(e) => handleInputChange('address.zipCode', e.target.value)}
                    disabled={!isEditing}
                    placeholder="ZIP Code"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={profileData.address?.country || ''}
                  onChange={(e) => handleInputChange('address.country', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Enter your country"
                />
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default Profile;
