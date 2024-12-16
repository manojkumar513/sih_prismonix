export interface Post {
  id: string;
  username: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
  likes: number;
}