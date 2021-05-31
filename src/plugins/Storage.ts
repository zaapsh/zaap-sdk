export type GetOptions = string

export type GetResult = string | null

export interface SetOptions {
  key: string
  value: string
}

export type RemoveOptions = string

export type KeysResult = string[]

export default interface StoragePlugin {
  get(options: GetOptions): Promise<GetResult>

  set(options: SetOptions): Promise<void>

  remove(options: RemoveOptions): Promise<void>

  clear(): Promise<void>

  keys(): Promise<KeysResult>
}
