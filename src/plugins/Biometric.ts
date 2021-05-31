export interface SaveCredentialsOptions {
  username?: string
  password?: string
}

export interface Result {
  service: string,
  storage: string,
}

export interface UserCredentials {
  username?: string
  password?: string
}

export interface AuthenticateOptions {
  title?: string
  cancelText?: string
  fallbackLabel?: string
  passcodeFallback?: boolean
}

export type SupportedAuthentication = "FaceID" | "TouchID"

export default interface Biometric {
  saveCredentials(opts: SaveCredentialsOptions): Promise<false | Result>

  resetCredentials(): Promise<boolean>

  getCredentials(): Promise<UserCredentials>

  authenticate(reason?: string, opts?: AuthenticateOptions): Promise<boolean>

  isSupported(opts?: AuthenticateOptions): Promise<SupportedAuthentication>
}
