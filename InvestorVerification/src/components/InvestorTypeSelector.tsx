import React from 'react';
import { InvestorType } from '../types/verification';
import { UserCheck, Users } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  selectedType: InvestorType | null;
  onSelect: (type: InvestorType) => void;
}

export const InvestorTypeSelector: React.FC<Props> = ({ selectedType, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
      <button
        onClick={() => onSelect('new')}
        className={clsx(
          'p-6 rounded-lg border-2 transition-all',
          selectedType === 'new'
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-blue-200'
        )}
      >
        <UserCheck className="w-12 h-12 mx-auto mb-4 text-blue-600" />
        <h3 className="text-xl font-semibold mb-2">New Investor</h3>
        <p className="text-gray-600">Start your investment journey</p>
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-200">
            Silver Badge
          </span>
        </div>
      </button>

      <button
        onClick={() => onSelect('existing')}
        className={clsx(
          'p-6 rounded-lg border-2 transition-all',
          selectedType === 'existing'
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-200 hover:border-blue-200'
        )}
      >
        <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
        <h3 className="text-xl font-semibold mb-2">Existing Investor</h3>
        <p className="text-gray-600">Verify your investment history</p>
        <div className="mt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-200">
            Gold Badge
          </span>
        </div>
      </button>
    </div>
  );
};