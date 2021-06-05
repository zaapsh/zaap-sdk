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

export interface CanOpenURLOptions {
  url: string
}

export interface CanOpenURLResult {
  value: boolean
}

export interface OpenURLOptions {
  url: string
}

export interface OpenURLResult {
  completed: boolean
}

export interface AppBasePlugin {
  /**
   * Force exit the app.
   * This should only be used in conjunction with the backButton handler for Android to exit the app when navigation is complete.
   */
  exitApp(): Promise<void>

  /**
   * Return information about the app.
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

  /**
   * Open the homepage of the settings app.
   */
  openSettings(): Promise<void>

  /**
   * Check if an app can be opened with the given URL.
   */
  canOpenUrl(options: CanOpenURLOptions): Promise<CanOpenURLResult>

  /**
   * Open an app with the given URL.
   */
  openUrl(options: OpenURLOptions): Promise<OpenURLResult>
}

export default interface AppPlugin extends AppBasePlugin, TypedEventEmitter<Events> {}
