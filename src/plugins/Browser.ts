export interface OpenOptions {
  url: string
}

export default interface BrowserPlugin {
  // Open a page with the specified options.
  open(options: OpenOptions): Promise<void>

  // Close an open browser window.
  close(): Promise<void>
}
