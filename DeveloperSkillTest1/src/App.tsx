import React, { useState } from 'react';
import { Skill } from './types/skill';
import SkillList from './components/SkillList';
import SkillTest from './components/SkillTest';

function App() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [activeTest, setActiveTest] = useState<string | null>(null);

  const handleAddSkill = (skillName: string) => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: skillName,
      level: 1
    };
    setSkills([...skills, newSkill]);
  };

  const handleStartTest = (skillId: string) => {
    const skill = skills.find(s => s.id === skillId);
    if (skill && (skill.name === 'Data Analytics' || skill.name === 'AI')) {
      setActiveTest(skillId);
    }
  };

  const handleTestComplete = (score: number) => {
    if (activeTest) {
      setSkills(skills.map(skill => {
        if (skill.id === activeTest) {
          return {
            ...skill,
            level: Math.ceil((score / 10) * 3), // Convert score to level (1-3)
            lastTested: new Date()
          };
        }
        return skill;
      }));
    }
  };

  const activeSkill = activeTest ? skills.find(s => s.id === activeTest) : null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <SkillList
        skills={skills}
        onAddSkill={handleAddSkill}
        onStartTest={handleStartTest}
      />
      
      {activeTest && activeSkill && (
        <SkillTest
          skillId={activeTest}
          skillName={activeSkill.name}
          onComplete={handleTestComplete}
          onClose={() => setActiveTest(null)}
        />
      )}
    </div>
  );
}

export default App;