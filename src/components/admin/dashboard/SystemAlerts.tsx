
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SystemAlerts: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-red-500" />
          <span>System Alerts</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm font-medium text-red-800">Security Alert</p>
            <p className="text-sm text-red-600">Multiple failed login attempts detected</p>
          </div>
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm font-medium text-yellow-800">System Maintenance</p>
            <p className="text-sm text-yellow-600">Scheduled maintenance tomorrow at 2 AM</p>
          </div>
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm font-medium text-blue-800">Compliance Report</p>
            <p className="text-sm text-blue-600">Monthly compliance report ready for review</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemAlerts;
