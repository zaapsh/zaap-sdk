export default interface ReviewPlugin {
  // Show dialog to request a review of your app on the Store.
  request(): Promise<boolean>

  // Return if the device support rating or not
  isAvailable(): boolean
}
