export interface Skill {
  id: string;
  name: string;
  level: number;
  lastTested?: Date;
}

export interface SkillTest {
  skillId: string;
  questions: string[];
  completed: boolean;
}