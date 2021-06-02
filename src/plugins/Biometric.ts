export type AuthenticationType = "FaceID" | "TouchID"

export interface AuthenticateOptions {
  title?: string
  reason?: string
  cancelText?: string
  fallbackLabel?: string
  passcodeFallback?: boolean
}

export interface AuthenticateResults {
  authenticated: boolean
}

export interface SupportedResults {
  authenticationType: AuthenticationType
}

export default interface Biometric {
  authenticate(options?: AuthenticateOptions): Promise<AuthenticateResults>

  isSupported(): Promise<SupportedResults>
}
