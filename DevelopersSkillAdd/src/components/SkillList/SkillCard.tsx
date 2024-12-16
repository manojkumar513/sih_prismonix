import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Skill } from '../../types/skill';

interface SkillCardProps {
  skill: Skill;
  onStartTest: () => void;
}

export default function SkillCard({ skill, onStartTest }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
          <p className="text-sm text-gray-600">
            Level: {skill.level}
          </p>
          {skill.lastTested && (
            <p className="text-xs text-gray-500">
              Last tested: {new Date(skill.lastTested).toLocaleDateString()}
            </p>
          )}
        </div>
        <button
          onClick={onStartTest}
          className="text-blue-600 hover:text-blue-800 transition-colors"
          title="Start Skill Test"
        >
          <PlayCircle size={24} />
        </button>
      </div>
    </div>
  );
}