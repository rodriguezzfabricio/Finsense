import React from 'react';

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Summary Cards */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Total Expenses</h3>
          <p className="text-2xl font-bold text-blue-600">$0.00</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">This Month</h3>
          <p className="text-2xl font-bold text-green-600">$0.00</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Budget Remaining</h3>
          <p className="text-2xl font-bold text-orange-600">$0.00</p>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">No transactions yet. Start by adding your first expense!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 