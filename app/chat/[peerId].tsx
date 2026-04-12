import { useLocalSearchParams } from 'expo-router';

import { ChatScreen } from '@/ui/screens/ChatScreen';
import { useChat } from '@/ui/hooks/useChat';

export default function ChatRoute() {
  const { peerId = '' } = useLocalSearchParams<{ peerId: string }>();
  const { title, messages, send } = useChat(peerId);

  return <ChatScreen title={title} messages={messages} onSend={send} />;
}
