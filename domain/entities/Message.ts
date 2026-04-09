export type MessageDirection = 'inbound' | 'outbound';

export interface Message {
  id: string;
  chatId: string;
  senderPeerId: string;
  body: string;
  sentAt: string;
  direction: MessageDirection;
}
