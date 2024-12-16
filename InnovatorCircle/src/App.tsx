import React from 'react';
import { Header } from './components/Header/Header';
import { FollowersList } from './components/Followers/FollowersList';
import { SuggestionsList } from './components/Suggestions/SuggestionsList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto">
        <FollowersList />
        <SuggestionsList />
      </main>
    </div>
  );
}

export default App;