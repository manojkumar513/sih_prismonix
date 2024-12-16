import React from 'react';
import { Message } from '../../types';

interface MessageListProps {
  messages: Message[];
  onNDAClick: () => void;
}

function MessageList({ messages, onNDAClick }: MessageListProps) {
  const renderMessageContent = (content: string) => {
    if (content.includes('[View Submitted NDA]')) {
      return (
        <div>
          <p>{content.split('[')[0]}</p>
          <button
            onClick={onNDAClick}
            className="text-blue-500 hover:underline mt-1"
          >
            View Submitted NDA
          </button>
        </div>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.senderId === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[70%] rounded-lg px-4 py-2 ${
              message.senderId === 'user'
                ? 'bg-blue-500 text-white'
                : message.senderId === 'system'
                ? 'bg-gray-200 text-gray-800'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            {renderMessageContent(message.content)}
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