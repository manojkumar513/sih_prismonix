import React from 'react';
import { FollowerCard } from './FollowerCard';

const MOCK_FOLLOWERS = [
  {
    id: '1',
    name: 'Sarah Wilson',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    isFollowing: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    isFollowing: false,
  },
  {
    id: '3',
    name: 'Emma Thompson',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    isFollowing: true,
  },
];

export function FollowersList() {
  const handleFollow = (id: string) => {
    console.log('Toggle follow for:', id);
  };

  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Followers</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_FOLLOWERS.map((follower) => (
          <FollowerCard
            key={follower.id}
            {...follower}
            onFollow={handleFollow}
          />
        ))}
      </div>
    </section>
  );
}