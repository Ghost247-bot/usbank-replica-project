
import React from 'react';
import { Users, DollarSign, AlertTriangle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QuickActionsProps {
  onTabChange: (tab: string) => void;
}

const QuickActions: React.FC<QuickActionsProps> = ({ onTabChange }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Admin Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-20 flex flex-col items-center justify-center space-y-2"
            onClick={() => onTabChange('users')}
          >
            <Users className="h-5 w-5" />
            <span className="text-sm">Manage Users</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col items-center justify-center space-y-2"
            onClick={() => onTabChange('accounts')}
          >
            <DollarSign className="h-5 w-5" />
            <span className="text-sm">Manage Accounts</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col items-center justify-center space-y-2"
            onClick={() => onTabChange('banners')}
          >
            <AlertTriangle className="h-5 w-5" />
            <span className="text-sm">Manage Banners</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col items-center justify-center space-y-2"
            onClick={() => onTabChange('notifications')}
          >
            <Settings className="h-5 w-5" />
            <span className="text-sm">Send Notifications</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
