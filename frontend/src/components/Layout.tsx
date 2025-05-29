import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">FinSense AI</h1>
          <div className="space-x-4">
            <a href="/dashboard" className="hover:text-blue-200">Dashboard</a>
            <a href="/expenses" className="hover:text-blue-200">Expenses</a>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}

export default Layout; 