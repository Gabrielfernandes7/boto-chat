import { router } from 'expo-router';

import { Peer } from '@/domain/entities';
import { PeersListScreen } from '@/ui/screens/PeersListScreen';

const demoPeers: Peer[] = [
  { id: '1', displayName: 'Ana - Barco 12', status: 'online' },
  { id: '2', displayName: 'Caio - Porto Norte', status: 'offline' },
  { id: '3', displayName: 'Equipe Resgate', status: 'online' },
];

export default function PeersRoute() {
  return <PeersListScreen peers={demoPeers} onOpenChat={(peer) => router.push(`/chat/${peer.id}`)} />;
}
