import React, { useState } from 'react';
import { X } from 'lucide-react';
import { NDAFormData } from '../../types';

interface NDAFormProps {
  onClose: () => void;
  onSubmit: (data: NDAFormData) => void;
}

function NDAForm({ onClose, onSubmit }: NDAFormProps) {
  const [formData, setFormData] = useState<NDAFormData>({
    parties: '',
    terms: '',
    effectiveDate: new Date().toISOString().split('T')[0],
    validityPeriod: '1 Year',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Non-Disclosure Agreement</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Parties Involved
            </label>
            <input
              type="text"
              required
              placeholder="Enter the names of the parties involved"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.parties}
              onChange={(e) =>
                setFormData({ ...formData, parties: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Agreement Terms
            </label>
            <textarea
              required
              placeholder="Specify the terms of confidentiality"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
              value={formData.terms}
              onChange={(e) =>
                setFormData({ ...formData, terms: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Effective Date
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.effectiveDate}
                onChange={(e) =>
                  setFormData({ ...formData, effectiveDate: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Validity Period
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={formData.validityPeriod}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    validityPeriod: e.target.value as NDAFormData['validityPeriod'],
                  })
                }
              >
                <option value="1 Year">1 Year</option>
                <option value="3 Years">3 Years</option>
                <option value="Indefinite">Indefinite</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Signature
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    yourSignature: e.target.files?.[0],
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Other Party's Signature (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    otherPartySignature: e.target.files?.[0],
                  })
                }
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit NDA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NDAForm;