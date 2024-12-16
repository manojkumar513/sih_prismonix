import React from 'react';
import { SuggestionCard } from './SuggestionCard';

const MOCK_SUGGESTIONS = [
  {
    id: '1',
    name: 'David Miller',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    mutualCount: 12,
  },
  {
    id: '2',
    name: 'Jessica Lee',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    mutualCount: 8,
  },
  {
    id: '3',
    name: 'Alex Johnson',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    mutualCount: 15,
  },
  {
    id: '4',
    name: 'Rachel Kim',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    mutualCount: 6,
  },
];

export function SuggestionsList() {
  const handleFollow = (id: string) => {
    console.log('Follow suggestion:', id);
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        People You May Want to Follow
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {MOCK_SUGGESTIONS.map((suggestion) => (
          <SuggestionCard
            key={suggestion.id}
            {...suggestion}
            onFollow={handleFollow}
          />
        ))}
      </div>
    </section>
  );
}