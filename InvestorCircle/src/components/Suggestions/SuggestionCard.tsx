import React from 'react';

interface SuggestionCardProps {
  id: string;
  name: string;
  imageUrl: string;
  mutualCount: number;
  onFollow: (id: string) => void;
}

export function SuggestionCard({ id, name, imageUrl, mutualCount, onFollow }: SuggestionCardProps) {
  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm p-4">
      <div className="flex flex-col items-center text-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mb-3"
        />
        <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{mutualCount} mutual followers</p>
        <button
          onClick={() => onFollow(id)}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
        >
          Follow
        </button>
      </div>
    </div>
  );
}