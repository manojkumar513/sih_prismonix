import { AI_QUESTIONS } from '../constants/aiQuestions';
import { DATA_ANALYTICS_QUESTIONS } from '../constants/dataAnalyticsQuestions';

export function getQuestions(skillName: string) {
  switch (skillName) {
    case 'AI':
      return AI_QUESTIONS;
    case 'Data Analytics':
      return DATA_ANALYTICS_QUESTIONS;
    default:
      throw new Error(`No questions available for skill: ${skillName}`);
  }
}