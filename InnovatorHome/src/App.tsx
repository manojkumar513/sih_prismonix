import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Feed from './components/feed/Feed';
import CreatePostModal from './components/modals/CreatePostModal';
import type { Post } from './types/post';

const initialPosts: Post[] = [
  {
    id: '1',
    username: 'Sarah Johnson',
    timestamp: '2 hours ago',
    content: 'Just finished working on an amazing new project! 🚀',
    imageUrl: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=800',
    likes: 42
  },
  {
    id: '2',
    username: 'Alex Chen',
    timestamp: '4 hours ago',
    content: 'Beautiful sunset today at the beach! 🌅',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
    likes: 89
  }
];

function App() {
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleCreatePost = (content: string, imageUrl?: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      username: 'Current User',
      timestamp: 'just now',
      content,
      imageUrl,
      likes: 0
    };
    setPosts([newPost, ...posts]);
    setIsCreatePostOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <Header onCreatePost={() => setIsCreatePostOpen(true)} />
        <main className="mt-16 px-4">
          <Feed posts={posts} />
        </main>
      </div>
      <CreatePostModal 
        isOpen={isCreatePostOpen} 
        onClose={() => setIsCreatePostOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
}

export default App;