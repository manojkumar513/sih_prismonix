import { useState, useEffect } from 'react';
import { Message } from '../types';

export function useMessages(followerId: string) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hey, how are you?',
      timestamp: Date.now() - 3600000,
      isOwn: false,
      senderId: followerId,
      receiverId: 'currentUser',
    },
    {
      id: '2',
      content: "I'm doing great, thanks! How about you?",
      timestamp: Date.now() - 3500000,
      isOwn: true,
      senderId: 'currentUser',
      receiverId: followerId,
    },
    {
      id: '3',
      content: 'Just working on some new projects.',
      timestamp: Date.now() - 3400000,
      isOwn: false,
      senderId: followerId,
      receiverId: 'currentUser',
    },
  ]);

  return { messages };
}