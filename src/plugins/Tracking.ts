export type TrackingStatus = "unavailable" | "denied" | "authorized" | "restricted" | "not-determined"

export default interface TrackingPlugin {
  // Get the status of the Tracking settings (only IOS).
  getStatus(): Promise<TrackingStatus>

  // Show dialog to request tracking permission for your app (only IOS).
  requestPermission(): Promise<TrackingStatus>
}
