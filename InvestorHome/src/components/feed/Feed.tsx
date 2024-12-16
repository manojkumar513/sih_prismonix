import React from 'react';
import FeedItem from './FeedItem';
import type { Post } from '../../types/post';

interface FeedProps {
  posts: Post[];
}

export default function Feed({ posts }: FeedProps) {
  return (
    <div className="max-w-2xl mx-auto py-6">
      {posts.map((post) => (
        <FeedItem key={post.id} {...post} />
      ))}
    </div>
  );
}