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
  getId(): Promise<DeviceId>

  getInfo(): Promise<DeviceInfo>

  getBatteryInfo(): Promise<BatteryInfo>

  getLanguageCode(): Promise<GetLanguageCodeResult>
}
