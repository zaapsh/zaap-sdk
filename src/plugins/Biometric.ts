export interface AuthenticateOptions {
  title?: string
  cancelText?: string
  fallbackLabel?: string
  passcodeFallback?: boolean
}

export type SupportedAuthentication = "FaceID" | "TouchID"

export default interface Biometric {
  authenticate(reason?: string, opts?: AuthenticateOptions): Promise<boolean>

  isSupported(opts?: AuthenticateOptions): Promise<SupportedAuthentication>
}
