import { sendMessageAndWaitResponse } from "../util";

export interface ShareOptions {
  message?: string
  url?: string
  title?: string
  subject?: string
}

export type ShareResult = "SHARED" | "DISMISSED"

export async function share(opts: ShareOptions): Promise<ShareResult> {
  return sendMessageAndWaitResponse({
    type: "SHARE",
    payload: opts,
  })
}
