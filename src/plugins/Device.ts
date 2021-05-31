export type DeviceId = string

export interface DeviceInfo {
  name: string
  model: string
  platform: string
  uuid: string
  appVersion: string
  appBuild: string
  appId: string
  appName: string
  operatingSystem: string
  osVersion: string
  manufacturer: string
  isVirtual: boolean
  memUsed: number
  diskFree: number
  diskTotal: number
}

export interface BatteryInfo {
  batteryLevel: number
  isCharging: boolean
}

export default interface DevicePlugin {
  getId(): Promise<DeviceId>

  getInfo(): Promise<DeviceInfo>

  getBatteryInfo(): Promise<BatteryInfo>
}
