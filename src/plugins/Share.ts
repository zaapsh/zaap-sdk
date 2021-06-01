export interface ShareOptions {
  title?: string
  text?: string
  url?: string
  dialogTitle?: string
}

export interface ShareResult {
  activityType: "SHARED" | "DISMISSED"
}

export default interface SharePlugin {
  open(options: ShareOptions): Promise<ShareResult>
}
