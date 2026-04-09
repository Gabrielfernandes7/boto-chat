export interface SyncEngine {
  start(): Promise<void>;
  stop(): Promise<void>;
}
