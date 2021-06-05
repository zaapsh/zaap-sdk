import { TypedEventEmitter } from "rollup"

export interface AppInfo {
  id: string
  name: string
  build: string
  version: string
  theme: "light" | "dark" | null | undefined
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
  /**
   * Force exit the app.
   * This should only be used in conjunction with the backButton handler for Android to exit the app when navigation is complete.
   */
  exitApp(): Promise<void>

  /**
   * @return Promise<AppInfo> Information about the app.
   */
  getInfo(): Promise<AppInfo>

  /**
   * Gets the current app state.
   */
  getState(): Promise<AppState>

  /**
   * Get the URL the app was launched with, if any.
   */
  getLaunchUrl(): Promise<AppLaunchUrl>
}

export default interface AppPlugin extends AppBasePlugin, TypedEventEmitter<Events> {}
