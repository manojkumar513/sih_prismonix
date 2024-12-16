import React from 'react';
import { Heart, Share2, MessageCircle } from 'lucide-react';

interface FeedItemProps {
  username: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
  likes: number;
}

export default function FeedItem({ username, timestamp, content, imageUrl, likes }: FeedItemProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        <div className="ml-3">
          <h3 className="font-semibold">{username}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>
      
      <p className="mb-4">{content}</p>
      
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt="Post content" 
          className="rounded-lg mb-4 w-full object-cover max-h-96"
        />
      )}
      
      <div className="flex items-center gap-6 text-gray-500">
        <button className="flex items-center gap-2 hover:text-blue-600">
          <Heart className="w-5 h-5" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600">
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-600">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}