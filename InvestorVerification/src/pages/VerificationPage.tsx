import React from 'react';
import { InvestorTypeSelector } from '../components/InvestorTypeSelector';
import { VerificationForm } from '../components/VerificationForm';
import { SuccessMessage } from '../components/SuccessMessage';
import { InvestorType, VerificationFormData } from '../types/verification';

export const VerificationPage: React.FC = () => {
  const [selectedType, setSelectedType] = React.useState<InvestorType | null>(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (data: VerificationFormData) => {
    // Save the form data (in a real app, this would be an API call)
    console.log('Form submitted:', data);
    // Show success message
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <SuccessMessage />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Investor Verification</h1>
          <p className="text-gray-600">Complete the verification process to start investing</p>
        </div>

        {!selectedType ? (
          <InvestorTypeSelector
            selectedType={selectedType}
            onSelect={setSelectedType}
          />
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6">
            <button
              onClick={() => setSelectedType(null)}
              className="text-blue-600 hover:text-blue-700 mb-6 inline-flex items-center"
            >
              ← Back to selection
            </button>
            <VerificationForm
              type={selectedType}
              onSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};