export interface TransportAdapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
