import { TypedEventEmitter } from "rollup"

export interface AppInfo {
  id: string
  name: string
  build: string
  version: string
  theme: 'light' | 'dark' | null | undefined
}

export interface AppState {
  isActive: boolean
}

export interface AppLaunchUrl {
  url: string
}

export type Events = {
  url: (payload: { url: string }) => void
  hardwareBackPress: () => void
}

export interface AppBasePlugin {
  exitApp(): Promise<void>

  getInfo(): Promise<AppInfo>

  getState(): Promise<AppState>

  getLaunchUrl(): Promise<AppLaunchUrl>
}

export default interface AppPlugin extends AppBasePlugin, TypedEventEmitter<Events> {}
