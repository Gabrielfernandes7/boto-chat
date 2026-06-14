import * as SQLite from 'expo-sqlite';
import { MessageRepository, PeerRepository } from '@/domain/repositories';
import { Message, Peer } from '@/domain/entities';

const db = SQLite.openDatabaseSync('botochat.db');

export const initDatabase = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS messages (
      id TEXT PRIMARY KEY,
      chatId TEXT,
      senderPeerId TEXT,
      body TEXT,
      sentAt TEXT,
      direction TEXT
    );
    CREATE TABLE IF NOT EXISTS peers (
      id TEXT PRIMARY KEY,
      displayName TEXT,
      status TEXT
    );
  `);
};

export const messageRepository: MessageRepository = {
  async save(message: Message) {
    db.runSync(
      'INSERT INTO messages (id, chatId, senderPeerId, body, sentAt, direction) VALUES (?, ?, ?, ?, ?, ?)',
      [message.id, message.chatId, message.senderPeerId, message.body, message.sentAt, message.direction]
    );
  },
  async getMessagesByChatId(chatId: string) {
    const messages = db.getAllSync<any>(
      'SELECT * FROM messages WHERE chatId = ? ORDER BY sentAt ASC',
      [chatId]
    );
    return messages.map(m => ({
      ...m,
      direction: m.direction as 'inbound' | 'outbound'
    }));
  },
};

export const peerRepository: PeerRepository = {
  async save(peer: Peer) {
    db.runSync(
      'INSERT OR REPLACE INTO peers (id, displayName, status) VALUES (?, ?, ?)',
      [peer.id, peer.displayName, peer.status]
    );
  },
  async getPeers() {
    return db.getAllSync<Peer>('SELECT * FROM peers');
  },
  async updateStatus(peerId: string, status: 'online' | 'offline') {
    db.runSync('UPDATE peers SET status = ? WHERE id = ?', [status, peerId]);
  },
};
