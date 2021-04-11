export default interface StoragePlugin {
  get(key: string): Promise<{ value: string | null }>
  set(key: string, value: string): Promise<void>
  remove(key: string): Promise<void>
  clear(): Promise<void>
  keys(): Promise<{ keys: string[] }>
}
