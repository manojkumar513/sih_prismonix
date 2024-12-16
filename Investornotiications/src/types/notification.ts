export type NotificationType = 'like' | 'comment' | 'mention' | 'message' | 'invite';

export interface Notification {
  id: string;
  type: NotificationType;
  content: string;
  timestamp: Date;
  isRead: boolean;
  actionUrl?: string;
  sender: {
    name: string;
    avatar?: string;
  };
}