import { Peer } from '@/domain/entities';
import { ConnectPeer } from '@/domain/usecases/ConnectPeer';
import { DiscoverPeers } from '@/domain/usecases/DiscoverPeers';
import { transport } from '@/infrastructure/transport';

export const PeerService = {
  async discoverPeers(): Promise<Peer[]> {
    return DiscoverPeers.execute(transport);
  },

  async connectPeer(peerId: string): Promise<void> {
    await ConnectPeer.execute(transport, peerId);
  },
};
