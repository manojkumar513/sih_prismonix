import React from 'react';
import { Plus } from 'lucide-react';
import { skillSuggestions } from '../../data/skillSuggestions';

interface SkillSuggestionsProps {
  onSelectSkill: (skillName: string) => void;
  existingSkills: string[];
}

export default function SkillSuggestions({ onSelectSkill, existingSkills }: SkillSuggestionsProps) {
  const availableSuggestions = skillSuggestions.filter(
    skill => !existingSkills.includes(skill)
  );

  if (availableSuggestions.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Suggested Skills</h3>
      <div className="flex flex-wrap gap-2">
        {availableSuggestions.map((skill) => (
          <button
            key={skill}
            onClick={() => onSelectSkill(skill)}
            className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
          >
            <Plus size={14} />
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}