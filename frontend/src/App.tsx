import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components (will be created later)
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App; 