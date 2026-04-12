import { Peer } from '@/domain/entities';

export interface DiscoverPeersPort {
  discover(): Promise<Peer[]>;
}

export const DiscoverPeers = {
  async execute(adapter: DiscoverPeersPort) {
    const peers = await adapter.discover();
    return peers;
  },
};
