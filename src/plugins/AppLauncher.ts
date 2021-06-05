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

export default interface AppLauncherPlugin {
  // Open the homepage of the settings app.
  openSettings(): Promise<void>

  // Check if an app can be opened with the given URL.
  canOpenUrl(options: CanOpenURLOptions): Promise<CanOpenURLResult>

  // Open an app with the given URL.
  openUrl(options: OpenURLOptions): Promise<OpenURLResult>
}
