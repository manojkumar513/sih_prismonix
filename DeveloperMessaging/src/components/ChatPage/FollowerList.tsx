import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Follower } from '../../types';
import FollowerCard from './FollowerCard';
import { useFollowers } from '../../hooks/useFollowers';

interface FollowerListProps {
  onSelectFollower: (follower: Follower) => void;
}

function FollowerList({ onSelectFollower }: FollowerListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { followers } = useFollowers();

  const filteredFollowers = followers.filter((follower) =>
    follower.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Followers</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search followers..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredFollowers.map((follower) => (
          <FollowerCard
            key={follower.id}
            follower={follower}
            onClick={() => onSelectFollower(follower)}
          />
        ))}
      </div>
    </div>
  );
}

export default FollowerList;