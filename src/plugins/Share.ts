export interface OpenOptions {
  message?: string
  url?: string
  title?: string
  subject?: string
}

export type OpenResult = "SHARED" | "DISMISSED"

export default interface SharePlugin {
  open(opts: OpenOptions): Promise<OpenResult>
}
