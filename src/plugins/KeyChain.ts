export interface SetCredentialsOptions {
  username: string
  password: string
}

export interface SetCredentialsResult {
  service: string,
  storage: string,
}

export interface Credentials {
  username?: string
  password?: string
}

export default interface KeyChainPlugin {
  getCredentials(): Promise<Credentials | false>

  resetCredentials(): Promise<boolean>

  setCredentials(options: SetCredentialsOptions): Promise<SetCredentialsResult | false>
}
