export interface OpenOptions {
  url: string
  toolbarColor: string
}

export default interface BrowserPlugin {
  open(options: OpenOptions): Promise<void>

  close(): Promise<void>
}
