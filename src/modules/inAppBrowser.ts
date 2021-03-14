import { sendMessageAndWaitResponse } from "../util";

export interface InAppBrowserOptions {
  url?: string
}

export type InAppBrowserResult = "OPENED" | "DISMISSED"

export async function inAppBrowser(opts: InAppBrowserOptions): Promise<InAppBrowserResult> {
  return sendMessageAndWaitResponse({
    type: "OPEN_IN_APP_BROWSER",
    payload: opts,
  })
}
