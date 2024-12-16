import React from 'react';
import { Brain, BarChart, X } from 'lucide-react';
import { AVAILABLE_SKILLS } from '../constants/availableSkills';

interface AddSkillModalProps {
  onClose: () => void;
  onAddSkill: (skillName: string) => void;
  existingSkills: string[];
}

export default function AddSkillModal({ onClose, onAddSkill, existingSkills }: AddSkillModalProps) {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6" />;
      case 'BarChart':
        return <BarChart className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Add New Skill</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {AVAILABLE_SKILLS.map((skill) => {
            const isDisabled = existingSkills.includes(skill.name);
            
            return (
              <button
                key={skill.id}
                onClick={() => {
                  onAddSkill(skill.name);
                  onClose();
                }}
                disabled={isDisabled}
                className={`w-full flex items-center gap-3 p-4 rounded-lg border transition-colors ${
                  isDisabled
                    ? 'bg-gray-100 cursor-not-allowed opacity-60'
                    : 'hover:border-indigo-200 hover:bg-indigo-50'
                }`}
              >
                <div className={`text-indigo-600 ${isDisabled ? 'opacity-50' : ''}`}>
                  {getSkillIcon(skill.icon)}
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-900">{skill.name}</h3>
                  <p className="text-sm text-gray-500">{skill.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}