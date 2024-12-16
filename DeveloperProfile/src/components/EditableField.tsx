import React, { useState } from 'react';
import { Pencil, Check, X } from 'lucide-react';

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (value: string) => void;
  type?: 'text' | 'select';
  options?: string[];
}

export function EditableField({ label, value, onSave, type = 'text', options = [] }: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleSave = () => {
    onSave(currentValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setCurrentValue(value);
    setIsEditing(false);
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-500">{label}</label>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            <Pencil size={16} />
          </button>
        )}
      </div>
      
      {isEditing ? (
        <div className="flex items-center gap-2">
          {type === 'select' ? (
            <select
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <button
            onClick={handleSave}
            className="p-2 text-green-500 hover:text-green-600"
          >
            <Check size={16} />
          </button>
          <button
            onClick={handleCancel}
            className="p-2 text-red-500 hover:text-red-600"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div className="text-lg font-medium text-gray-800">{value}</div>
      )}
    </div>
  );
}