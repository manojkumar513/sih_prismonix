import { Project } from '../types/project';

export const saveProject = (project: Project): void => {
  const projects = getProjects();
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
};

export const getProjects = (): Project[] => {
  const projects = localStorage.getItem('projects');
  return projects ? JSON.parse(projects) : [];
};