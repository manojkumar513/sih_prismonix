import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import { EditModal } from './EditModal';

interface ProfileFieldProps {
  label: string;
  value: string;
  onSave: (value: string) => void;
  type?: 'text' | 'select';
  options?: string[];
  editable?: boolean;
}

export function ProfileField({ 
  label, 
  value, 
  onSave, 
  type = 'text', 
  options = [],
  editable = true 
}: ProfileFieldProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-500">{label}</label>
        {editable && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            <Pencil size={16} />
          </button>
        )}
      </div>
      <div className="text-lg font-medium text-gray-800">{value}</div>

      {editable && (
        <EditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={onSave}
          title={label}
          value={value}
          type={type}
          options={options}
        />
      )}
    </div>
  );
}