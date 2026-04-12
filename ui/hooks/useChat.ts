import { useMemo, useState } from 'react';

import { ChatService } from '@/application/services/ChatService';
import { Message } from '@/domain/entities';

const inboundSeed: Omit<Message, 'chatId'>[] = [
  {
    id: 'm1',
    senderPeerId: '1',
    body: 'Olá! Sinal estável por aqui.',
    sentAt: new Date().toISOString(),
    direction: 'inbound',
  },
];

export function useChat(peerId: string) {
  const [messages, setMessages] = useState<Message[]>(
    inboundSeed.map((item) => ({
      ...item,
      chatId: peerId,
    })),
  );

  const title = useMemo(() => `Chat com Peer ${peerId}`, [peerId]);

  async function send(text: string) {
    const created = await ChatService.sendMessage(peerId, text);
    setMessages((prev) => [...prev, created]);
  }

  return {
    title,
    messages,
    send,
  };
}
