export type DeviceId = string

export interface DeviceInfo {
  name: string
  model: string
  platform: string
  operatingSystem: string
  osVersion: string
  manufacturer: string
  isVirtual: boolean
  memUsed: number
  diskFree: number
  diskTotal: number
  appVersion: string
  appBuild: string
  appId: string
  appName: string
}

export interface BatteryInfo {
  batteryLevel: number
  isCharging: boolean
}

export interface GetLanguageCodeResult {
  value: string
}

export default interface DevicePlugin {
  /**
   * Return a unique identifier for the device.
   */
  getId(): Promise<DeviceId>

  /**
   * Return information about the underlying device/os/platform.
   */
  getInfo(): Promise<DeviceInfo>

  /**
   * Return information about the battery.
   */
  getBatteryInfo(): Promise<BatteryInfo>

  /**
   * Get the device’s current language locale code.
   */
  getLanguageCode(): Promise<GetLanguageCodeResult>
}
