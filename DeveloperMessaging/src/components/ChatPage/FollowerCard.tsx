import React from 'react';
import { Follower } from '../../types';

interface FollowerCardProps {
  follower: Follower;
  onClick: () => void;
}

function FollowerCard({ follower, onClick }: FollowerCardProps) {
  return (
    <div
      onClick={onClick}
      className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={follower.avatar}
            alt={follower.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
              follower.isOnline ? 'bg-green-500' : 'bg-gray-400'
            }`}
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{follower.name}</h3>
          <p className="text-sm text-gray-500">
            {follower.isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FollowerCard;