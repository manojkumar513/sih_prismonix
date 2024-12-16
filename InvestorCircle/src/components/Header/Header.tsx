import React from 'react';
import { Home } from 'lucide-react';
import { SearchBar } from './SearchBar';

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Community</h1>
        <div className="flex items-center gap-6">
          <SearchBar />
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Home className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}