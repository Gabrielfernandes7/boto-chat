import { Message, Peer } from '../entities';

export interface MessageRepository {
  save(message: Message): Promise<void>;
  getMessagesByChatId(chatId: string): Promise<Message[]>;
}

export interface PeerRepository {
  save(peer: Peer): Promise<void>;
  getPeers(): Promise<Peer[]>;
  updateStatus(peerId: string, status: 'online' | 'offline'): Promise<void>;
}
