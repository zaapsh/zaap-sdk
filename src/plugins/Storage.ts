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
  // Get the value from storage of a given key.
  get(options: GetOptions): Promise<GetResult>

  // Set the value in storage for a given key.
  set(options: SetOptions): Promise<void>

  // Remove the value from storage for a given key, if any.
  remove(options: RemoveOptions): Promise<void>

  // Clear keys and values from storage.
  clear(): Promise<void>

  // Return the list of known keys in storage.
  keys(): Promise<KeysResult>
}
