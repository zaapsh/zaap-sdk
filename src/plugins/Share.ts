export interface ShareOptions {
  title?: string
  message?: string
  url?: string
  subject?: string
}

export type ShareResult = "SHARED" | "DISMISSED"

export default interface SharePlugin {
  open(options: ShareOptions): Promise<ShareResult>

}
