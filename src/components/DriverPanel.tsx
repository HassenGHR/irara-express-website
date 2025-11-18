import React from 'react';
import { driverData } from '../data/data';
import { Search, Star } from 'lucide-react';

interface DriverPanelProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (filter: string) => void;
}

const DriverPanel: React.FC<DriverPanelProps> = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }) => {
  const filteredDrivers = driverData.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         driver.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || driver.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <section id="driver-panel" className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-50 dark:bg-stone-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Driver Management Panel</h2>
          <p className="text-xl text-stone-600 dark:text-stone-400">Real-time overview of your driver network (Demo)</p>
        </div>

        <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-xl p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search drivers..."
                  className="w-full pl-10 pr-4 py-3 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-800 focus:ring-2 focus:ring-orange-500 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <select
              className="px-4 py-3 border border-stone-300 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-800 focus:ring-2 focus:ring-orange-500 outline-none"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Online</option>
              <option>Offline</option>
              <option>On Delivery</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-stone-100 dark:bg-stone-800">
                <tr>
                  <th className="px-4 py-3 text-left">Driver ID</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Vehicle</th>
                  <th className="px-4 py-3 text-left">Rating</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {filteredDrivers.map((driver, idx) => (
                  <tr key={idx} className="border-b dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800">
                    <td className="px-4 py-4 font-mono text-sm">{driver.id}</td>
                    <td className="px-4 py-4 font-medium">{driver.name}</td>
                    <td className="px-4 py-4 text-sm">{driver.phone}</td>
                    <td className="px-4 py-4">{driver.vehicle}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{driver.rating}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        driver.status === 'Online' ? 'bg-green-100 text-green-800' :
                        driver.status === 'On Delivery' ? 'bg-orange-100 text-orange-800' :
                        'bg-stone-100 text-stone-800'
                      }`}>
                        {driver.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-semibold">{driver.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverPanel;