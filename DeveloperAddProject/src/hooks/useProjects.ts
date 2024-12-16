import { useState, useEffect } from 'react';
import { Project } from '../types/project';
import { getProjects, saveProject } from '../utils/storage';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const addProject = (formData: FormData) => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      screenshot: URL.createObjectURL(formData.get('screenshot') as File),
      codeFile: URL.createObjectURL(formData.get('codeFile') as File),
      createdAt: new Date().toISOString(),
    };

    saveProject(newProject);
    setProjects([...projects, newProject]);
  };

  return {
    projects,
    addProject,
  };
};