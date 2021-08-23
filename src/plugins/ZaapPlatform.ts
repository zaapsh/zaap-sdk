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
}
