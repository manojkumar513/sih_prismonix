import { useState, useCallback } from 'react';
import { Notification } from '../types/notification';

// Mock initial notifications for demonstration
const initialNotifications: Notification[] = [
  {
    id: '1',
    type: 'like',
    content: 'Sarah liked your post about React development',
    timestamp: new Date(Date.now() - 300000),
    isRead: false,
    actionUrl: '#',
    sender: { name: 'Sarah Chen' }
  },
  {
    id: '2',
    type: 'comment',
    content: 'Alex commented on your article',
    timestamp: new Date(Date.now() - 3600000),
    isRead: false,
    actionUrl: '#',
    sender: { name: 'Alex Johnson' }
  },
  {
    id: '3',
    type: 'mention',
    content: 'Maria mentioned you in a discussion',
    timestamp: new Date(Date.now() - 86400000),
    isRead: true,
    actionUrl: '#',
    sender: { name: 'Maria Garcia' }
  }
];

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [filter, setFilter] = useState<string>('all');

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  }, []);

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.isRead;
    return notification.type === filter;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return {
    notifications: filteredNotifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    setFilter
  };
}