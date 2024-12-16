import React from 'react';
import { Plus } from 'lucide-react';
import { Skill } from '../../types/skill';
import SkillCard from './SkillCard';
import AddSkillForm from './AddSkillForm';

interface SkillListProps {
  skills: Skill[];
  onAddSkill: (name: string) => void;
  onStartTest: (skillId: string) => void;
}

export default function SkillList({ skills, onAddSkill, onStartTest }: SkillListProps) {
  const [isAddingSkill, setIsAddingSkill] = React.useState(false);

  const handleAddSkill = (name: string) => {
    onAddSkill(name);
    setIsAddingSkill(false);
  };

  const existingSkillNames = skills.map(skill => skill.name);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Skills Management</h1>
        <button
          onClick={() => setIsAddingSkill(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>Add Skill</span>
        </button>
      </div>

      {isAddingSkill && (
        <div className="mb-6">
          <AddSkillForm
            onSubmit={handleAddSkill}
            onCancel={() => setIsAddingSkill(false)}
            existingSkills={existingSkillNames}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            onStartTest={() => onStartTest(skill.id)}
          />
        ))}
      </div>
    </div>
  );
}