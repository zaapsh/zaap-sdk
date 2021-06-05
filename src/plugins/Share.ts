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
  // Show a Share modal for sharing content with other apps
  open(options: ShareOptions): Promise<ShareResult>
}
