import React from 'react';
import { Search, Plus } from 'lucide-react';

interface HeaderProps {
  onCreatePost: () => void;
}

export default function Header({ onCreatePost }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white shadow-sm z-10 px-6">
      <div className="flex items-center justify-between h-full">
        <div className="relative flex-1 max-w-2xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search posts, users, or communities..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button 
          onClick={onCreatePost}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Create Post</span>
        </button>
      </div>
    </header>
  );
}