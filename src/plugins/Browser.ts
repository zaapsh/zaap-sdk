export interface OpenOptions {
  url: string
}

export default interface BrowserPlugin {
  open(opts: OpenOptions): Promise<void>

  close(): Promise<void>
}
