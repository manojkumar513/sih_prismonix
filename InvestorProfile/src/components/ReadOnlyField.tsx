import React from 'react';

interface ReadOnlyFieldProps {
  label: string;
  value: string;
}

export function ReadOnlyField({ label, value }: ReadOnlyFieldProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <label className="text-sm font-medium text-gray-600 block mb-2">{label}</label>
      <p className="text-gray-800 font-medium">{value}</p>
    </div>
  );
}