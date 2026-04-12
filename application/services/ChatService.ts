import { Message } from '@/domain/entities';
import { SendMessage } from '@/domain/usecases/SendMessage';
import { transport } from '@/infrastructure/transport';

export const ChatService = {
  async sendMessage(peerId: string, text: string): Promise<Message> {
    return SendMessage.execute(transport, peerId, text);
  },
};
