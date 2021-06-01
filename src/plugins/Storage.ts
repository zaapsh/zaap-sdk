export interface GetOptions {
  group: string
}

export interface GetResult {
  value: string | null
}

export interface SetOptions {
  key: string
  value: string
}

export interface RemoveOptions {
  key: string
}

export interface KeysResult {
  keys: string[]
}

export default interface StoragePlugin {
  get(options: GetOptions): Promise<GetResult>

  set(options: SetOptions): Promise<void>

  remove(options: RemoveOptions): Promise<void>

  clear(): Promise<void>

  keys(): Promise<KeysResult>
}
