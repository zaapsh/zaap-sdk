export type AuthorizationLevel = "whenInUse" | "always"

export type AuthorizationStatus = "disabled" | "granted" | "denied" | "restricted" | "never_ask_again"

export interface GeolocationOptions {
  enableHighAccuracy?: boolean
  timeout?: number
  maximumAge?: number
}

export interface GeolocationPosition {
  timestamp:  number
  coords: {
    latitude: number
    longitude: number
    accuracy: number
    altitudeAccuracy?: number
    altitude?: number
    speed?: number
    heading?: number
  }
}

export default interface GeolocationPlugin {
  requestAuthorization(authorizationLevel: AuthorizationLevel): Promise<AuthorizationStatus>

  getCurrentPosition(opts?: GeolocationOptions): Promise<GeolocationPosition>

  // watchPosition(options: GeolocationOptions, callback: GeolocationWatchCallback): string

  // clearWatch(options: { id: string; }): Promise<void>
}
