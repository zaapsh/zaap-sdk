export interface OpenOptions {
  url: string
}

export default interface InAppBrowserPlugin {
  open(opts: OpenOptions): Promise<void>
}
