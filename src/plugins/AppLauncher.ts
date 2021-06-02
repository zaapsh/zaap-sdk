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
  openSettings(): Promise<void>

  canOpenUrl(options: CanOpenURLOptions): Promise<CanOpenURLResult>

  openUrl(options: OpenURLOptions): Promise<OpenURLResult>
}
