import { useCallback, useEffect, useState } from 'react';

import { PeerService } from '@/application/services/PeerService';
import { Peer } from '@/domain/entities';

export function usePeers() {
  const [peers, setPeers] = useState<Peer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    setIsLoading(true);
    const found = await PeerService.discoverPeers();
    setPeers(found);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function connect(peerId: string) {
    await PeerService.connectPeer(peerId);
  }

  return {
    peers,
    isLoading,
    reload: load,
    connect,
  };
}
