export interface DeviceInfo {
  name: string
  model: string
  platform: "unknown" | "ios" | "android"
  uuid: string
  appVersion: string
  appBuild: string
  appId: string
  appName: string
  operatingSystem: "unknown" | "ios" | "android"
  osVersion: string
  manufacturer: string
  isVirtual: boolean
  memUsed: number
  diskFree: number
  diskTotal: number
}

export interface DeviceBatteryInfo {
  batteryLevel: number
  isCharging: boolean
}

export interface DeviceLanguageCodeResult {
  value: string
}

export default interface DevicePlugin {
  getInfo(): Promise<DeviceInfo>
  getBatteryInfo(): Promise<DeviceBatteryInfo>
  getLanguageCode(): Promise<DeviceLanguageCodeResult>
}
