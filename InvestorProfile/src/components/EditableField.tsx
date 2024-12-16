import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import { EditModal } from './EditModal';

interface EditableFieldProps {
  label: string;
  value: string;
  onUpdate: (value: string) => void;
  type?: 'text' | 'select';
  options?: string[];
}

export function EditableField({ label, value, onUpdate, type = 'text', options = [] }: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    onUpdate(tempValue);
    setIsEditing(false);
  };

  const handleClose = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-600">{label}</label>
        <button
          onClick={() => setIsEditing(true)}
          className="text-gray-400 hover:text-blue-600 transition-colors"
        >
          <Pencil size={16} />
        </button>
      </div>

      <p className="text-gray-800 font-medium">{value}</p>

      <EditModal
        isOpen={isEditing}
        onClose={handleClose}
        onSave={handleSave}
        title={`Edit ${label}`}
      >
        {type === 'select' ? (
          <select
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            value={tempValue}
            onChange={(e) => setTempValue(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}
      </EditModal>
    </div>
  );
}