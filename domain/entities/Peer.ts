export type PeerStatus = 'online' | 'offline' | 'unknown';

export interface Peer {
  id: string;
  displayName: string;
  avatarUrl?: string;
  status: PeerStatus;
  lastSeenAt?: string;
}
