import React from 'react';
import { Skill } from './types/skill';
import { TestResult } from './types/test';
import SkillList from './components/SkillList/SkillList';
import SkillTestModal from './components/SkillTest/SkillTestModal';
import { skillTests } from './data/skillTests';

function App() {
  const [skills, setSkills] = React.useState<Skill[]>([
    {
      id: 'machine-learning',
      name: 'Machine Learning',
      level: 1,
    },
    {
      id: '2',
      name: 'React',
      level: 3,
      lastTested: new Date('2024-02-10'),
    },
    {
      id: '3',
      name: 'TypeScript',
      level: 3,
      lastTested: new Date('2024-02-01'),
    },
  ]);

  const [currentTest, setCurrentTest] = React.useState<string | null>(null);

  const handleAddSkill = (name: string) => {
    const newSkill: Skill = {
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      level: 1,
    };
    setSkills((prev) => [...prev, newSkill]);
  };

  const handleStartTest = (skillId: string) => {
    setCurrentTest(skillId);
  };

  const handleCompleteTest = (score: number) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === currentTest
          ? {
              ...skill,
              level: Math.min(5, Math.max(1, Math.ceil((score / 10) * 5))),
              lastTested: new Date(),
            }
          : skill
      )
    );
    setCurrentTest(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SkillList
        skills={skills}
        onAddSkill={handleAddSkill}
        onStartTest={handleStartTest}
      />
      {currentTest && skillTests[currentTest] && (
        <SkillTestModal
          test={skillTests[currentTest]}
          onClose={() => setCurrentTest(null)}
          onComplete={handleCompleteTest}
        />
      )}
    </div>
  );
}

export default App;