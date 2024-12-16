import React from 'react';
import { Follower } from '../../types';
import { useMessages } from '../../hooks/useMessages';

interface MessageListProps {
  selectedFollower: Follower;
}

function MessageList({ selectedFollower }: MessageListProps) {
  const { messages } = useMessages(selectedFollower.id);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.isOwn ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg px-4 py-2 ${
              message.isOwn
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            <p>{message.content}</p>
            <span className="text-xs opacity-75">
              {new Date(message.timestamp).toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;