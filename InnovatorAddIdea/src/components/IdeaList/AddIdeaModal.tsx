import React from 'react';
import { X } from 'lucide-react';
import { useIdeas } from '../../hooks/useIdeas';

interface AddIdeaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddIdeaModal({ isOpen, onClose }: AddIdeaModalProps) {
  const { addIdea } = useIdeas();

  if (!isOpen) return null;

  const handleSubmission = () => {
    addIdea({
      type: 'submission',
      title: 'New Idea Submission',
      description: 'Submit a new idea for review',
    });
    onClose();
  };

  const handleDocumentation = () => {
    addIdea({
      type: 'documentation',
      title: 'Idea Documentation',
      description: 'Document and elaborate on your idea',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Add New Idea</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleSubmission}
            className="w-full py-4 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Idea Submission
          </button>
          
          <button
            onClick={handleDocumentation}
            className="w-full py-4 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            Idea Documentation
          </button>
        </div>
      </div>
    </div>
  );
}