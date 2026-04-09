import { useLocalSearchParams } from 'expo-router';

import { Message } from '@/domain/entities';
import { ChatScreen } from '@/ui/screens/ChatScreen';

const messages: Message[] = [
  {
    id: 'm1',
    chatId: 'c1',
    senderPeerId: '1',
    body: 'Olá! Sinal estável por aqui.',
    sentAt: new Date().toISOString(),
    direction: 'inbound',
  },
  {
    id: 'm2',
    chatId: 'c1',
    senderPeerId: 'local',
    body: 'Perfeito, seguimos conectados.',
    sentAt: new Date().toISOString(),
    direction: 'outbound',
  },
];

export default function ChatRoute() {
  const { peerId } = useLocalSearchParams<{ peerId: string }>();

  return <ChatScreen title={`Chat com Peer ${peerId}`} messages={messages} />;
}
