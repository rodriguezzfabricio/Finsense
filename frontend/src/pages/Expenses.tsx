import React from 'react';

function Expenses() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Expenses</h1>
      
      {/* Add Expense Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Expense</h2>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <input
              type="text"
              placeholder="e.g., Coffee at Starbucks"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="number"
              step="0.01"
              placeholder="0.00"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">Auto-categorize</option>
              <option value="food">Food & Dining</option>
              <option value="transportation">Transportation</option>
              <option value="shopping">Shopping</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          
          <div className="md:col-span-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
      
      {/* Expenses List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Expenses</h2>
          <p className="text-gray-500">No expenses recorded yet.</p>
        </div>
      </div>
    </div>
  );
}

export default Expenses; 