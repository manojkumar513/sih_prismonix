import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProjectList } from './components/ProjectList';
import { AddProjectModal } from './components/AddProjectModal';
import { useProjects } from './hooks/useProjects';

function App() {
  const { projects, addProject } = useProjects();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddClick={() => setIsModalOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProjectList projects={projects} />
      </main>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addProject}
      />
    </div>
  );
}

export default App;