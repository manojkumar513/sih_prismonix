export interface Skill {
  id: string;
  name: string;
  level: number;
  lastTested?: Date;
}

export interface SkillFormData {
  name: string;
}