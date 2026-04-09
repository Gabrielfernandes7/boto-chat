export interface Chat {
  id: string;
  peerId: string;
  title: string;
  lastMessagePreview?: string;
  lastMessageAt?: string;
  unreadCount: number;
}
