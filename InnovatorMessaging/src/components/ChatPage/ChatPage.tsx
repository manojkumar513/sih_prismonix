import React, { useState } from 'react';
import FollowerList from './FollowerList';
import ChatBox from './ChatBox';
import { Follower } from '../../types';

function ChatPage() {
  const [selectedFollower, setSelectedFollower] = useState<Follower | null>(null);

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-1/3 border-r border-gray-200 bg-white">
        <FollowerList onSelectFollower={setSelectedFollower} />
      </div>
      <div className="w-2/3">
        <ChatBox selectedFollower={selectedFollower} />
      </div>
    </div>
  );
}

export default ChatPage;