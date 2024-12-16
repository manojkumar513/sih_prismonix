import React, { useState } from 'react';
import { FormField } from './FormField';

interface ProjectFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormState {
  name: string;
  description: string;
  screenshot: File | null;
  codeFile: File | null;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    description: '',
    screenshot: null,
    codeFile: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Project name is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.screenshot) {
      newErrors.screenshot = 'Screenshot is required';
    }
    
    if (!formData.codeFile) {
      newErrors.codeFile = 'Code file is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    if (formData.screenshot) form.append('screenshot', formData.screenshot);
    if (formData.codeFile) form.append('codeFile', formData.codeFile);

    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField label="Project Name" error={errors.name}>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </FormField>

      <FormField label="Description" error={errors.description}>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          rows={3}
        />
      </FormField>

      <FormField label="Screenshot" error={errors.screenshot}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, screenshot: e.target.files?.[0] || null })}
          className="w-full"
        />
      </FormField>

      <FormField label="Code Files" error={errors.codeFile}>
        <input
          type="file"
          accept=".zip,.rar"
          onChange={(e) => setFormData({ ...formData, codeFile: e.target.files?.[0] || null })}
          className="w-full"
        />
      </FormField>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Add Project
      </button>
    </form>
  );
};