export interface SetOptions {
  username: string
  password: string
}

export interface SetResult {
  service: string,
  storage: string,
}

export interface Credentials {
  username?: string
  password?: string
}

export default interface KeyChainPlugin {
  /**
   * Retrieve the credentials from the secure storage.
   * This will request a biometric verification if the device support biometric authentication methods.
   */
  get(): Promise<Credentials | false>

  /**
   * Set the credentials in the secure storage.
   */
  set(options: SetOptions): Promise<SetResult | false>

  /**
   * Remove the credentials from the secure storage.
   */
  clear(): Promise<boolean>
}
