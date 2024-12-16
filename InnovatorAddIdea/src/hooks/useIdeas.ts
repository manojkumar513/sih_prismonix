import { useState } from 'react';

export interface Idea {
  id: string;
  title: string;
  description: string;
  type: 'submission' | 'documentation';
  createdAt: string;
}

export function useIdeas() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addIdea = ({ type, title, description }: Omit<Idea, 'id' | 'createdAt'>) => {
    const newIdea: Idea = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      type,
      createdAt: new Date().toISOString(),
    };
    setIdeas((prev) => [...prev, newIdea]);
  };

  return {
    ideas,
    showModal,
    setShowModal,
    addIdea,
  };
}