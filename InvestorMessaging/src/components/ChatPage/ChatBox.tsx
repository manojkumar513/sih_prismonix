import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';
import { Follower, Message, NDAFormData } from '../../types';
import MessageList from './MessageList';
import NDAForm from '../NDA/NDAForm';

interface ChatBoxProps {
  selectedFollower: Follower | null;
}

function ChatBox({ selectedFollower }: ChatBoxProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [showNDAForm, setShowNDAForm] = useState(false);
  const [submittedNDA, setSubmittedNDA] = useState<string | null>(null);

  const handleSendMessage = () => {
    if (!message.trim() || !selectedFollower) return;

    const newMessage: Message = {
      id: Date.now(),
      content: message,
      senderId: 'user',
      receiverId: selectedFollower.id,
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Check for @NDA trigger
    if (message.includes('@NDA')) {
      setShowNDAForm(true);
    }
  };

  const handleNDASubmit = (data: NDAFormData) => {
    const ndaId = Date.now().toString();
    setSubmittedNDA(ndaId);

    // Add confirmation message to chat
    const confirmationMessage: Message = {
      id: Date.now(),
      content: `Your NDA has been submitted and is pending review. [View Submitted NDA](#${ndaId})`,
      senderId: 'system',
      receiverId: selectedFollower?.id || '',
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, confirmationMessage]);
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

      <MessageList messages={messages} onNDAClick={() => setShowNDAForm(true)} />

      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex space-x-4">
          <button className="text-gray-400 hover:text-gray-600">
            <Paperclip className="h-6 w-6" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message... (Type @NDA to create an NDA)"
            className="flex-1 border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {showNDAForm && (
        <NDAForm
          onClose={() => setShowNDAForm(false)}
          onSubmit={handleNDASubmit}
        />
      )}
    </div>
  );
}

export default ChatBox;