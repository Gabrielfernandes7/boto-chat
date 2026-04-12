import { router } from 'expo-router';

import { PeersListScreen } from '@/ui/screens/PeersListScreen';
import { usePeers } from '@/ui/hooks/usePeers';

export default function PeersRoute() {
  const { peers, isLoading, connect } = usePeers();

  return (
    <PeersListScreen
      peers={peers}
      isLoading={isLoading}
      onOpenChat={async (peer) => {
        await connect(peer.id);
        router.push(`/chat/${peer.id}`);
      }}
    />
  );
}
