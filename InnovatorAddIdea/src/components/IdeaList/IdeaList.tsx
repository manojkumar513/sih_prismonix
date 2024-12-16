import React from 'react';
import { Plus } from 'lucide-react';
import { useIdeas } from '../../hooks/useIdeas';
import AddIdeaModal from './AddIdeaModal';

export default function IdeaList() {
  const { ideas, showModal, setShowModal } = useIdeas();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Ideas</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          <span>New Idea</span>
        </button>
      </div>

      <div className="grid gap-4">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {idea.title}
            </h3>
            <p className="text-gray-600">{idea.description}</p>
            <div className="mt-4 text-sm text-gray-500">
              Created: {new Date(idea.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}

        {ideas.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">No ideas yet. Click the + button to add your first idea!</p>
          </div>
        )}
      </div>

      <AddIdeaModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}