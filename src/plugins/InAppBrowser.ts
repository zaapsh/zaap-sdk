export interface OpenOptions {
  url?: string
}

export type OpenResult = "OPENED" | "DISMISSED"

export default interface InAppBrowserPlugin {
  open(opts: OpenOptions): Promise<OpenResult>
}
