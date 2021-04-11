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
  getCurrentPosition(opts?: GeolocationOptions): Promise<GeolocationPosition>

  // watchPosition(options: GeolocationOptions, callback: GeolocationWatchCallback): string
  //
  // clearWatch(options: { id: string; }): Promise<void>
}
