export interface Installation {
  id: string
  appVersion: string | null
  data: { [key: string]: any }
  deviceModel: string | null
  deviceOS: string | null
  deviceType: string | null
  language: string | null
  lastSessionAt: Date | null
  sdkVersion: string | null
  subscribed: boolean
  testMode: boolean
  externalId: string | null
  createdAt: Date
  updatedAt: Date
}

export default interface ZaapPlatformPlugin {
  /**
   * Register for push notifications.
   * Returns if successfully registered to notifications.
   */
  registerForNotifications(): Promise<boolean>

  /**
   * Returns if registered to notifications.
   */
  isRegisteredForNotifications(): Promise<boolean>

  /**
   * Returns the installation.
   */
  getInstallation(): Promise<Installation>

  /**
   * Update the installation external id.
   * @param externalId The new external id.
   */
  setExternalId(externalId: string | null): Promise<Installation>
}
