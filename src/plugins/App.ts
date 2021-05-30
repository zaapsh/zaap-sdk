import {TypedEventEmitter} from "rollup";

export type State = "active" | "background"

export interface Info {
  id: string
  name: string
  version: string
  theme: "dark" | "light"
  build: string
}

export type Events = {
  url: (payload: { url: string }) => void
  hardwareBackPress: () => void
}

export interface AppBasePlugin {
  getState(): Promise<State>

  getInfo(): Promise<Info>

  getLaunchUrl(): Promise<string | null>

  openSettings(): Promise<void>

  canOpenUrl(url: string): Promise<boolean>

  openUrl(url: string): Promise<any>
}

export default interface AppPlugin extends AppBasePlugin, TypedEventEmitter<Events> {}
