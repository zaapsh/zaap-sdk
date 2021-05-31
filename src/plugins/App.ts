import {TypedEventEmitter} from "rollup"

export interface AppInfo {
  id: string
  name: string
  build: string
  version: string
  theme: "dark" | "light" | null
}

export type AppState = "active" | "background"

export type AppLaunchUrl = string

export type Events = {
  url: (payload: { url: string }) => void
  hardwareBackPress: () => void
}

export interface AppBasePlugin {
  getInfo(): Promise<AppInfo>

  getState(): Promise<AppState>

  getLaunchUrl(): Promise<AppLaunchUrl | undefined>

  openSettings(): Promise<void>

  canOpenUrl(url: string): Promise<boolean>

  openUrl(url: string): Promise<any>
}

export default interface AppPlugin extends AppBasePlugin, TypedEventEmitter<Events> {}
