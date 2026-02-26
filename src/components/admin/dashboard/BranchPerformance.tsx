
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BranchPerformance: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Branch Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4">Branch</th>
                <th className="text-left p-4">Customers</th>
                <th className="text-left p-4">Deposits</th>
                <th className="text-left p-4">Loans</th>
                <th className="text-left p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-medium">Downtown</td>
                <td className="p-4">3,247</td>
                <td className="p-4">$12.4M</td>
                <td className="p-4">$8.2M</td>
                <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Westside</td>
                <td className="p-4">2,891</td>
                <td className="p-4">$9.8M</td>
                <td className="p-4">$6.1M</td>
                <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span></td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Northgate</td>
                <td className="p-4">2,156</td>
                <td className="p-4">$7.3M</td>
                <td className="p-4">$4.8M</td>
                <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Maintenance</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default BranchPerformance;
