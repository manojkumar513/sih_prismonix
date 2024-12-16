export const skillSuggestions = [
  'Machine Learning',
  'Frontend Development',
  'Artificial Intelligence',
  'UI/UX Design',
  'IoT Development',
  'App Development',
  'Embedded Systems',
  'Cybersecurity',
  'Hybrid and Electric Vehicles',
  'Cloud Computing',
  'Data Analytics',
] as const;

export type SuggestedSkill = typeof skillSuggestions[number];