export interface ConnectPeerPort {
  connect(peerId: string): Promise<void>;
}

export const ConnectPeer = {
  async execute(adapter: ConnectPeerPort, peerId: string) {
    if (!peerId) {
      throw new Error('peerId é obrigatório para conexão.');
    }

    await adapter.connect(peerId);
  },
};
