import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { VerificationButton } from './components/VerificationButton';
import { VerificationPage } from './pages/VerificationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <VerificationButton />
          </div>
        } />
        <Route path="/verify" element={<VerificationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;