import React from 'react';
import { InvestorType, VerificationFormData } from '../types/verification';
import { Upload, Save, Send } from 'lucide-react';

interface Props {
  type: InvestorType;
  onSubmit: (data: VerificationFormData) => void;
}

export const VerificationForm: React.FC<Props> = ({ type, onSubmit }) => {
  const [formData, setFormData] = React.useState<VerificationFormData>({
    governmentId: null,
    email: '',
    phoneNumber: '',
    bankAccount: '',
    ifscCode: '',
    previousInvestments: '',
    bankStatements: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'governmentId' | 'bankStatements') => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Government ID Proof (Aadhar or PAN Card)
          </label>
          <div className="flex items-center gap-2">
            <label className="flex-1 cursor-pointer">
              <div className="flex items-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500">
                <Upload className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Upload a scanned copy</span>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e, 'governmentId')}
              />
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Gmail
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your Gmail address"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phoneNumber}
            onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your 10-digit phone number"
          />
        </div>

        <div>
          <label htmlFor="bankAccount" className="block text-sm font-medium text-gray-700 mb-1">
            Bank Account Number
          </label>
          <input
            type="text"
            id="bankAccount"
            value={formData.bankAccount}
            onChange={(e) => setFormData(prev => ({ ...prev, bankAccount: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your bank account number"
          />
        </div>

        <div>
          <label htmlFor="ifsc" className="block text-sm font-medium text-gray-700 mb-1">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifsc"
            value={formData.ifscCode}
            onChange={(e) => setFormData(prev => ({ ...prev, ifscCode: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the IFSC code of your bank branch"
          />
        </div>

        {type === 'existing' && (
          <>
            <div>
              <label htmlFor="previousInvestments" className="block text-sm font-medium text-gray-700 mb-1">
                Previous Invested Company
              </label>
              <textarea
                id="previousInvestments"
                value={formData.previousInvestments}
                onChange={(e) => setFormData(prev => ({ ...prev, previousInvestments: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="List the companies you've invested in"
                rows={4}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Previous Invested Bank Statements
              </label>
              <div className="flex items-center gap-2">
                <label className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-2 p-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500">
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">Upload bank statements</span>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, 'bankStatements')}
                  />
                </label>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex gap-4 pt-6">
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-colors"
        >
          <Save className="w-5 h-5" />
          <span>Save Progress</span>
        </button>
        <button
          type="submit"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          <Send className="w-5 h-5" />
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};