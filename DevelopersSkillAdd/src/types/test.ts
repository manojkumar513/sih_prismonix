export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface SkillTest {
  skillId: string;
  skillName: string;
  questions: Question[];
}

export interface TestResult {
  skillId: string;
  score: number;
  completedAt: Date;
  answers: number[];
}

export interface QuestionResult {
  question: Question;
  userAnswer: number;
  isCorrect: boolean;
}