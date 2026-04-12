export interface SyncEngine {
  start(): Promise<void>;
  stop(): Promise<void>;
}

export const sync: SyncEngine = {
  async start() {
    return Promise.resolve();
  },
  async stop() {
    return Promise.resolve();
  },
};
