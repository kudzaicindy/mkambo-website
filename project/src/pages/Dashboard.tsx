import React from 'react';
import {
  Users,
  DollarSign,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-500">Here's what's happening with your business today.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Earnings"
          value="$12,426"
          icon={<DollarSign className="w-6 h-6 text-green-600" />}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Active Clients"
          value="48"
          icon={<Users className="w-6 h-6 text-blue-600" />}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Rating"
          value="4.8"
          icon={<Star className="w-6 h-6 text-yellow-500" />}
        />
        <DashboardCard
          title="Pending Tasks"
          value="6"
          icon={<Clock className="w-6 h-6 text-orange-500" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Service Requests</h2>
          <div className="space-y-4">
            {[
              {
                title: "Plumbing Repair",
                client: "Sarah Johnson",
                status: "pending",
                time: "2h ago"
              },
              {
                title: "Electrical Maintenance",
                client: "Mike Peters",
                status: "scheduled",
                time: "5h ago"
              },
              {
                title: "HVAC Service",
                client: "Emma Wilson",
                status: "completed",
                time: "1d ago"
              }
            ].map((request, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{request.title}</h3>
                  <p className="text-sm text-gray-500">{request.client}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    request.status === 'completed' ? 'bg-green-100 text-green-800' :
                    request.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {request.status}
                  </span>
                  <span className="text-sm text-gray-500">{request.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Performance Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <h3 className="font-medium">Completed Jobs</h3>
                  <p className="text-sm text-gray-500">Last 30 days</p>
                </div>
              </div>
              <span className="text-xl font-semibold">42</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-500" />
                <div>
                  <h3 className="font-medium">Response Time</h3>
                  <p className="text-sm text-gray-500">Average</p>
                </div>
              </div>
              <span className="text-xl font-semibold">2.4h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;