import { Message, Peer } from '@/domain/entities';

export interface TransportAdapter {
  connect(peerId: string): Promise<void>;
  disconnect(peerId: string): Promise<void>;
  send(peerId: string, text: string): Promise<Message>;
  discover(): Promise<Peer[]>;
}

const mockPeers: Peer[] = [
  { id: '1', displayName: 'Ana - Barco 12', status: 'online' },
  { id: '2', displayName: 'Caio - Porto Norte', status: 'offline' },
  { id: '3', displayName: 'Equipe Resgate', status: 'online' },
];

export const transport: TransportAdapter = {
  async connect() {
    return Promise.resolve();
  },
  async disconnect() {
    return Promise.resolve();
  },
  async send(peerId, text) {
    return {
      id: Date.now().toString(),
      chatId: peerId,
      senderPeerId: 'local',
      body: text,
      sentAt: new Date().toISOString(),
      direction: 'outbound',
    };
  },
  async discover() {
    return mockPeers;
  },
};
