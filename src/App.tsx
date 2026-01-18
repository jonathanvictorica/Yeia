import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import DemoPage from './components/DemoPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'demo'>('landing');

  return (
    <div className="min-h-screen bg-white">
      {currentPage === 'landing' ? (
        <LandingPage onNavigateToDemo={() => setCurrentPage('demo')} />
      ) : (
        <DemoPage onNavigateToLanding={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}
