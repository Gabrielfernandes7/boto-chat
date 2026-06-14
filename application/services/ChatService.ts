import { Message } from '@/domain/entities';
import { SendMessage } from '@/domain/usecases/SendMessage';
import { messageRepository } from '@/infrastructure/storage';

export const ChatService = {
  async sendMessage(peerId: string, text: string): Promise<Message> {
    const message = await SendMessage.execute(null as any, peerId, text); // transport is now handled differently
    await messageRepository.save(message);
    return message;
  },
  async getMessages(chatId: string): Promise<Message[]> {
    return await messageRepository.getMessagesByChatId(chatId);
  }
};
