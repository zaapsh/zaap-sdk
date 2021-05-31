export type AuthorizationLevel = "whenInUse" | "always"

export type AuthorizationStatus = "disabled" | "granted" | "denied" | "restricted" | "never_ask_again"

export interface PositionOptions {
  enableHighAccuracy?: boolean
  timeout?: number
  maximumAge?: number
}

export interface Position {
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

  getCurrentPosition(options?: PositionOptions | undefined): Promise<Position>

  // watchPosition(options: GeolocationOptions, callback: GeolocationWatchCallback): string

  // clearWatch(options: { id: string; }): Promise<void>
}
