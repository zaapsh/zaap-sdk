export type PermissionState = "disabled" | "granted" | "denied" | "restricted" | "never_ask_again"

export interface PermissionLevel {
  level: "whenInUse" | "always"
}

export interface PermissionStatus {
  location: PermissionState
}

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
  getCurrentPosition(options?: PositionOptions | undefined): Promise<Position>

  requestPermissions(options: PermissionLevel): Promise<PermissionStatus>
}
