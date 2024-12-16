import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { Skill } from '../types/skill';

interface SkillItemProps {
  skill: Skill;
  onStartTest: (skillId: string) => void;
}

export default function SkillItem({ skill, onStartTest }: SkillItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-indigo-200 transition-colors">
      <div className="flex items-center gap-3">
        <Award className={`w-5 h-5 ${getSkillLevelColor(skill.level)}`} />
        <div>
          <h3 className="font-medium text-gray-900">{skill.name}</h3>
          <p className="text-sm text-gray-500">
            {skill.lastTested 
              ? `Last tested: ${new Date(skill.lastTested).toLocaleDateString()}`
              : 'Not tested yet'}
          </p>
        </div>
      </div>
      
      <button
        onClick={() => onStartTest(skill.id)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 focus:outline-none"
      >
        Start Test
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function getSkillLevelColor(level: number): string {
  switch (level) {
    case 3: return 'text-green-500';
    case 2: return 'text-yellow-500';
    case 1: return 'text-orange-500';
    default: return 'text-gray-400';
  }
}