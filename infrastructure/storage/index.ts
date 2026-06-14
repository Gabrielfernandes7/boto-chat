import { messageRepository, peerRepository, initDatabase } from './sqlite';

// Initialize DB on first access
initDatabase();

export { messageRepository, peerRepository };
