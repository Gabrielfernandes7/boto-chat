export interface StorageAdapter {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T): Promise<void>;
}

const memory = new Map<string, unknown>();

export const storage: StorageAdapter = {
  async get<T>(key: string) {
    return (memory.get(key) as T | undefined) ?? null;
  },
  async set<T>(key: string, value: T) {
    memory.set(key, value);
  },
};
