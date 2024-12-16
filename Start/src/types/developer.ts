export type CurrentRole =
  | 'Frontend Developer'
  | 'Backend Developer'
  | 'Full Stack Developer'
  | 'Mobile App Developer'
  | 'Game Developer'
  | 'DevOps Engineer'
  | 'Cloud Engineer'
  | 'Machine Learning Engineer'
  | 'AI Developer'
  | 'Data Scientist'
  | 'Data Engineer'
  | 'Cybersecurity Analyst'
  | 'Blockchain Developer'
  | 'Embedded Systems Developer'
  | 'IoT Developer'
  | 'AR/VR Developer'
  | 'Student/Intern'
  | 'Freelancer'
  | 'UI/UX Designer'
  | 'Software Architect'
  | 'Quality Assurance Engineer'
  | 'Technical Lead'
  | 'Solution Architect'
  | 'IT Support Specialist'
  | 'Technical Writer';

export type ExperienceLevel =
  | '0-1 Years'
  | '1-2 Years'
  | '2-3 Years'
  | '3-5 Years'
  | '5-7 Years'
  | '7-10 Years'
  | '10+ Years';

export type Skill =
  | 'Frontend Development'
  | 'Backend Development'
  | 'Full Stack Development'
  | 'Mobile App Development'
  | 'Data Science'
  | 'Machine Learning'
  | 'Artificial Intelligence'
  | 'DevOps'
  | 'Cloud Computing'
  | 'Cybersecurity'
  | 'Blockchain Development'
  | 'Game Development'
  | 'UI/UX Design'
  | 'Web Development'
  | 'Embedded Systems'
  | 'IoT Development'
  | 'Database Management'
  | 'Networking'
  | 'AR/VR Development'
  | 'Quality Assurance'
  | 'Software Testing'
  | 'Big Data'
  | 'System Architecture'
  | 'Technical Writing'
  | 'IT Support'
  | 'Project Management';

export type WorkEnvironment = 'remote' | 'on-site' | 'hybrid';

export interface DeveloperProfile {
  address: string;
  currentRole: CurrentRole;
  experience: ExperienceLevel;
  skills: Skill[];
  interests: string[];
  preferredEmploymentType: string;
  workEnvironment: WorkEnvironment;
  portfolioUrl?: string;
}