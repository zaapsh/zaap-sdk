export type AuthenticationType = "FaceID" | "TouchID"

export interface VerifyOptions {
  title?: string
  reason?: string
  cancelText?: string
  fallbackLabel?: string
  passcodeFallback?: boolean
}

export interface VerifyResults {
  verified: boolean
}

export interface SupportedResults {
  authenticationType: AuthenticationType
}

export default interface Biometric {
  // Request a biometric verification
  verify(options?: VerifyOptions): Promise<VerifyResults>

  // Return if the device support biometric verification or not
  isSupported(): Promise<SupportedResults>
}
