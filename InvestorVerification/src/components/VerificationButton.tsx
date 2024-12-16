import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

export const VerificationButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/verify')}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
    >
      <Shield className="w-5 h-5" />
      <span>Verify Account</span>
    </button>
  );
};