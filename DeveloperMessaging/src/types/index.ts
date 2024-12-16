export interface Follower {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Message {
  id: string;
  content: string;
  timestamp: number;
  isOwn: boolean;
  senderId: string;
  receiverId: string;
}