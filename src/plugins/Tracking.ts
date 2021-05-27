export type TrackingStatus = "unavailable" | "denied" | "authorized" | "restricted" | "not-determined"

export default interface TrackingPlugin {
  getStatus(): Promise<TrackingStatus>

  requestPermission(): Promise<TrackingStatus>
}
