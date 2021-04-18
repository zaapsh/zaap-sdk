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

export interface DeviceBatteryInfo {
  batteryLevel: number
  isCharging: boolean
}

export default interface DevicePlugin {
  getInfo(): Promise<DeviceInfo>

  getBatteryInfo(): Promise<DeviceBatteryInfo>
}
