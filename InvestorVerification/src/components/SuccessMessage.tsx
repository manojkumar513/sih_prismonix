import React from 'react';
import { CheckCircle } from 'lucide-react';

export const SuccessMessage: React.FC = () => {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Verification Request Submitted</h2>
      <p className="text-gray-600 text-lg">
        Your verification request has been submitted successfully. Verification will be completed within 24 hours.
      </p>
    </div>
  );
};