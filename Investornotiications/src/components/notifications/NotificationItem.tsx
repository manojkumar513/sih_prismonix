import React from 'react';
import { Check } from 'lucide-react';
import { NotificationIcon } from './NotificationIcon';
import { Notification } from '../../types/notification';
import { formatTimeAgo } from '../../utils/dateUtils';

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}

export function NotificationItem({ notification, onMarkAsRead }: NotificationItemProps) {
  return (
    <div className={`p-4 flex items-start gap-3 border-b ${notification.isRead ? 'bg-white' : 'bg-blue-50'}`}>
      <NotificationIcon 
        type={notification.type} 
        className={`flex-shrink-0 ${notification.isRead ? 'text-gray-500' : 'text-blue-500'}`} 
      />
      
      <div className="flex-grow">
        <p className="text-sm text-gray-800">{notification.content}</p>
        <span className="text-xs text-gray-500">{formatTimeAgo(notification.timestamp)}</span>
        
        {notification.actionUrl && (
          <a 
            href={notification.actionUrl}
            className="block mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            View Details
          </a>
        )}
      </div>

      {!notification.isRead && (
        <button
          onClick={() => onMarkAsRead(notification.id)}
          className="p-1 text-gray-400 hover:text-gray-600"
          aria-label="Mark as read"
        >
          <Check className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}