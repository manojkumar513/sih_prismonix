import React from 'react';

interface FollowerCardProps {
  id: string;
  name: string;
  imageUrl: string;
  isFollowing: boolean;
  onFollow: (id: string) => void;
}

export function FollowerCard({ id, name, imageUrl, isFollowing, onFollow }: FollowerCardProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
        </div>
      </div>
      <button
        onClick={() => onFollow(id)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          isFollowing
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {isFollowing ? 'Following' : 'Follow Back'}
      </button>
    </div>
  );
}