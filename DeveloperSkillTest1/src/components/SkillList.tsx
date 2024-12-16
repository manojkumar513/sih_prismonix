import React, { useState } from 'react';
import { PlusCircle, Trophy } from 'lucide-react';
import { Skill } from '../types/skill';
import SkillItem from './SkillItem';
import AddSkillModal from './AddSkillModal';

interface SkillListProps {
  skills: Skill[];
  onAddSkill: (skillName: string) => void;
  onStartTest: (skillId: string) => void;
}

export default function SkillList({ skills, onAddSkill, onStartTest }: SkillListProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">My Skills</h2>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusCircle className="w-4 h-4" />
          Add Skill
        </button>
      </div>
      
      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            skill={skill}
            onStartTest={onStartTest}
          />
        ))}
        
        {skills.length === 0 && (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No skills added yet. Click the button above to add your first skill!</p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <AddSkillModal
          onClose={() => setIsModalOpen(false)}
          onAddSkill={onAddSkill}
          existingSkills={skills.map(s => s.name)}
        />
      )}
    </div>
  );
}