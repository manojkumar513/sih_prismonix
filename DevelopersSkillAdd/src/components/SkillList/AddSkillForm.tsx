import React from 'react';
import { X } from 'lucide-react';
import { SkillFormData } from '../../types/skill';
import SkillSuggestions from './SkillSuggestions';

interface AddSkillFormProps {
  onSubmit: (name: string) => void;
  onCancel: () => void;
  existingSkills: string[];
}

export default function AddSkillForm({ onSubmit, onCancel, existingSkills }: AddSkillFormProps) {
  const [formData, setFormData] = React.useState<SkillFormData>({ name: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim()) {
      onSubmit(formData.name.trim());
      setFormData({ name: '' });
    }
  };

  const handleSelectSuggestion = (skillName: string) => {
    onSubmit(skillName);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Add New Skill</h3>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      <SkillSuggestions
        onSelectSkill={handleSelectSuggestion}
        existingSkills={existingSkills}
      />

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="skillName" className="block text-sm font-medium text-gray-700">
              Custom Skill Name
            </label>
            <input
              type="text"
              id="skillName"
              value={formData.name}
              onChange={(e) => setFormData({ name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter skill name"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              disabled={!formData.name.trim()}
            >
              Add Custom Skill
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}