import { Message } from '@/domain/entities';

export interface SendMessagePort {
  send(peerId: string, text: string): Promise<Message>;
}

export const SendMessage = {
  async execute(adapter: SendMessagePort, peerId: string, text: string) {
    const normalized = text.trim();
    if (!normalized) {
      throw new Error('A mensagem não pode estar vazia.');
    }

    return adapter.send(peerId, normalized);
  },
};
