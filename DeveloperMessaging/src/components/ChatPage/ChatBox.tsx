import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';
import { Follower } from '../../types';
import MessageList from './MessageList';

interface ChatBoxProps {
  selectedFollower: Follower | null;
}

function ChatBox({ selectedFollower }: ChatBoxProps) {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // Here you would typically implement the logic to send the message
    setMessage('');
  };

  if (!selectedFollower) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">
          Select a follower to start chatting
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-4">
          <img
            src={selectedFollower.avatar}
            alt={selectedFollower.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-900">
              {selectedFollower.name}
            </h2>
            <p className="text-sm text-gray-500">
              {selectedFollower.isOnline ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
      </div>

      <MessageList selectedFollower={selectedFollower} />

      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-gray-600">
            <Paperclip className="h-6 w-6" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors duration-200"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;