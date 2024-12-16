import { useState, useEffect } from 'react';
import { Follower } from '../types';

export function useFollowers() {
  const [followers, setFollowers] = useState<Follower[]>([
    {
      id: '1',
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      isOnline: true,
    },
    {
      id: '2',
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      isOnline: false,
    },
    {
      id: '3',
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      isOnline: true,
    },
    {
      id: '4',
      name: 'James Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      isOnline: true,
    },
  ]);

  return { followers };
}