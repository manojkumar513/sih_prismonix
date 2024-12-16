import React from 'react';
import { Bell, Check, Home } from 'lucide-react';

interface NotificationsHeaderProps {
  unreadCount: number;
  onMarkAllRead: () => void;
  onFilterChange: (filter: string) => void;
}

export function NotificationsHeader({ unreadCount, onMarkAllRead, onFilterChange }: NotificationsHeaderProps) {
  return (
    <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Bell className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl font-semibold">Notifications</h1>
        {unreadCount > 0 && (
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {unreadCount}
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <select
            onChange={(e) => onFilterChange(e.target.value)}
            className="text-sm border rounded-md px-2 py-1"
          >
            <option value="all">All</option>
            <option value="unread">Unread</option>
            <option value="like">Likes</option>
            <option value="comment">Comments</option>
            <option value="mention">Mentions</option>
            <option value="message">Messages</option>
            <option value="invite">Invites</option>
          </select>

          <button
            onClick={onMarkAllRead}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800"
          >
            <Check className="w-4 h-4" />
            Mark all read
          </button>
        </div>

        <a
          href="/"
          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go to home page"
        >
          <Home className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}